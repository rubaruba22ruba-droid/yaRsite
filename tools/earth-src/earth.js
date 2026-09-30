/* YarVpn — реальный 3D-глобус: снимки NASA (Blue Marble, ночные огни, облака), атмосфера, «линии связи».
   Собирается в assets/js/earth.js. Подписей и списка серверов нет — точки и дуги только оформление. */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, ShaderMaterial, TextureLoader, Vector3,
  AdditiveBlending, BackSide, TubeGeometry, CatmullRomCurve3, MeshBasicMaterial, RingGeometry, DoubleSide, Color, LinearFilter, LinearMipmapLinearFilter
} from "three";

const BASE = "assets/img/earth/";
const ll = (lat, lon, r) => {
  const p = (lat * Math.PI) / 180, l = (lon * Math.PI) / 180;
  return new Vector3(Math.cos(p) * Math.cos(l) * r, Math.sin(p) * r, -Math.cos(p) * Math.sin(l) * r);
};

const VERT = `varying vec2 vUv;varying vec3 vN;varying vec3 vP;
void main(){vUv=uv;vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.);vP=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`;

const EARTH_FRAG = `uniform sampler2D uDay,uNight,uBump,uWater;uniform vec3 uSun;
varying vec2 vUv;varying vec3 vN;varying vec3 vP;
void main(){
  vec3 Ng=normalize(vN);vec3 V=normalize(cameraPosition-vP);
  float h=texture2D(uBump,vUv).r,hx=texture2D(uBump,vUv+vec2(.001,0.)).r,hy=texture2D(uBump,vUv+vec2(0.,.002)).r;
  vec3 T=normalize(cross(vec3(0.,1.,0.),Ng)+vec3(1e-4,0.,0.));vec3 B=cross(Ng,T);
  vec3 N=normalize(Ng+(T*(hx-h)+B*(hy-h))*9.);
  float ng=dot(Ng,uSun);float dayF=smoothstep(-.09,.24,ng);
  vec3 day=texture2D(uDay,vUv).rgb;
  float lum=dot(day,vec3(.3,.59,.11));day=mix(vec3(lum),day,1.22);day=pow(day,vec3(.95))*1.12;
  float lit=clamp(dot(N,uSun)*.9+.1,0.,1.);
  vec3 col=day*(.035+1.08*pow(lit,.9));
  float water=texture2D(uWater,vUv).r;
  vec3 H=normalize(uSun+V);float sp=pow(max(dot(Ng,H),0.),70.)*water;
  col+=vec3(1.,.9,.72)*sp*.85*dayF;
  col+=vec3(.55,.75,1.)*pow(max(dot(Ng,H),0.),8.)*water*.05*dayF;
  float tw=exp(-pow(ng/.17,2.));col+=vec3(1.,.45,.16)*tw*.16*(.25+day.b*1.3);
  vec3 nl=texture2D(uNight,vUv).rgb;nl=pow(nl,vec3(1.1))*3.0*vec3(1.,.8,.5);
  col=mix(nl+day*.028,col,dayF);
  float fr=pow(1.-max(dot(Ng,V),0.),3.);
  col+=vec3(.22,.5,1.)*fr*(.12+.85*dayF)*.9;
  gl_FragColor=vec4(col,1.);
}`;

const CLOUD_FRAG = `uniform sampler2D uCl;uniform vec3 uSun;varying vec2 vUv;varying vec3 vN;varying vec3 vP;
void main(){
  vec3 N=normalize(vN);float ng=dot(N,uSun);float dayF=smoothstep(-.14,.28,ng);
  float a=texture2D(uCl,vUv).r;a=smoothstep(.06,.95,a)*.86;
  vec3 c=vec3(1.)*(.10+1.0*clamp(ng*.9+.15,0.,1.));
  c=mix(c,vec3(1.,.62,.4)*clamp(ng*3.+.7,0.,1.),exp(-pow(ng/.14,2.))*.5);
  gl_FragColor=vec4(c,a*(.16+.84*dayF));
}`;

const ATMO_VERT = `varying vec3 vNormal;varying vec3 vView;
void main(){vNormal=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vView=-mv.xyz;gl_Position=projectionMatrix*mv;}`;
const ATMO_FRAG = `uniform vec3 uSunV;varying vec3 vNormal;varying vec3 vView;
void main(){
  float i=pow(max(0.,.69-dot(vNormal,vec3(0.,0.,1.))),5.2)*2.3;
  float sunSide=.30+.95*clamp(dot(normalize(vNormal),uSunV)*.6+.5,0.,1.);
  vec3 c=mix(vec3(.10,.34,.95),vec3(.38,.68,1.),clamp(i*.5,0.,1.));
  gl_FragColor=vec4(c*i*sunSide,0.);
}`;

const ARC_VERT = `varying float vT;void main(){vT=uv.x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const ARC_FRAG = `uniform float uTime;uniform float uOff;uniform vec3 uCol;varying float vT;
void main(){
  float d=fract(vT*1.15-uTime*.16+uOff);
  float pulse=smoothstep(0.,.05,d)*(1.-smoothstep(.05,.30,d));
  float base=.22*sin(vT*3.14159);
  float a=base+pulse*.95;
  gl_FragColor=vec4(uCol*(.8+pulse*1.2)*a,0.);
}`;

// Москва — центр, остальное — узлы сети (без подписей).
const HUB = [55.75, 37.62];
const NODES = [[60.17, 24.94], [59.33, 18.07], [40.42, -3.7], [39.93, 32.86], [41.33, 19.82]];

export function initEarth(canvas, opts) {
  opts = opts || {};
  const reduce = !!opts.reduce;
  let renderer;
  try { renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" }); }
  catch (e) { return null; }
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene();
  const camera = new PerspectiveCamera(28, 1, 0.1, 50);
  camera.position.set(0, 0, 5.3);
  const sun = new Vector3(-0.85, 0.34, 0.78).normalize();
  const sunV = sun.clone();

  const loader = new TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const load = (f, color) => new Promise((res) => loader.load(BASE + f, (t) => { t.anisotropy = Math.min(8, maxAniso); t.minFilter = LinearMipmapLinearFilter; t.magFilter = LinearFilter; res(t); }, undefined, () => res(null)));

  const world = new Group();          // наклон оси
  world.rotation.z = 0.26;
  const spin = new Group();           // вращение вокруг оси
  world.add(spin); scene.add(world);
  const R = 1;

  const earthMat = new ShaderMaterial({ vertexShader: VERT, fragmentShader: EARTH_FRAG, uniforms: { uDay: { value: null }, uNight: { value: null }, uBump: { value: null }, uWater: { value: null }, uSun: { value: sun } } });
  const earth = new Mesh(new SphereGeometry(R, 128, 96), earthMat);
  spin.add(earth);
  const cloudMat = new ShaderMaterial({ vertexShader: VERT, fragmentShader: CLOUD_FRAG, transparent: true, depthWrite: false, uniforms: { uCl: { value: null }, uSun: { value: sun } } });
  const clouds = new Mesh(new SphereGeometry(R * 1.007, 96, 72), cloudMat);
  world.add(clouds);
  const atmoMat = new ShaderMaterial({ vertexShader: ATMO_VERT, fragmentShader: ATMO_FRAG, side: BackSide, blending: AdditiveBlending, premultipliedAlpha: true, transparent: true, depthWrite: false, uniforms: { uSunV: { value: sunV } } });
  scene.add(new Mesh(new SphereGeometry(R * 1.13, 96, 72), atmoMat));

  // линии связи
  const arcs = [];
  const hubP = ll(HUB[0], HUB[1], R);
  function addArc(a, b, off, col) {
    const hgt = Math.min(0.32, 0.05 + a.angleTo(b) * 0.2), mid = a.clone().add(b).normalize().multiplyScalar(R + hgt);
    const c = new CatmullRomCurve3([a.clone().multiplyScalar(1.004), a.clone().lerp(mid, 0.5).normalize().multiplyScalar(R + hgt * 0.55), mid, b.clone().lerp(mid, 0.5).normalize().multiplyScalar(R + hgt * 0.55), b.clone().multiplyScalar(1.004)]);
    const mat = new ShaderMaterial({ vertexShader: ARC_VERT, fragmentShader: ARC_FRAG, transparent: true, premultipliedAlpha: true, depthWrite: false, blending: AdditiveBlending, uniforms: { uTime: { value: 0 }, uOff: { value: off }, uCol: { value: new Color(col) } } });
    const m = new Mesh(new TubeGeometry(c, 90, 0.0028, 5, false), mat);
    spin.add(m); arcs.push(mat);
  }
  const dots = [];
  function addDot(p, big) {
    const m = new Mesh(new SphereGeometry(big ? 0.017 : 0.0115, 16, 12), new MeshBasicMaterial({ color: big ? 0xffd27a : 0xbfe3ff }));
    m.position.copy(p).multiplyScalar(1.004); spin.add(m);
    const ring = new Mesh(new RingGeometry(0.014, 0.019, 40), new MeshBasicMaterial({ color: big ? 0xffd27a : 0xbfe3ff, transparent: true, opacity: 0.6, blending: AdditiveBlending, side: DoubleSide, depthWrite: false }));
    ring.position.copy(p).multiplyScalar(1.006); ring.lookAt(p.clone().multiplyScalar(2)); spin.add(ring);
    dots.push({ ring, ph: Math.random() * 6.28 });
  }
  NODES.forEach((n, i) => { const p = ll(n[0], n[1], R); addArc(hubP, p, i * 0.17, i % 2 ? 0x9fd4ff : 0xffd98a); addDot(p, false); });
  addDot(hubP, true);

  Promise.all([load("day.jpg"), load("night.jpg"), load("bump.jpg"), load("water.jpg"), load("clouds.jpg")]).then((t) => {
    const u = earthMat.uniforms; u.uDay.value = t[0]; u.uNight.value = t[1]; u.uBump.value = t[2]; u.uWater.value = t[3]; cloudMat.uniforms.uCl.value = t[4];
    ready = true; canvas.classList.add("on"); if (opts.onReady) opts.onReady();
  });

  // управление
  let ready = false, visible = true, raf = 0, last = 0, t = 0;
  let rot = -Math.PI / 2 - (62 * Math.PI) / 180;       // лицом к камере — Европа/Россия
  let vel = 0, dragging = false, lx = 0, mx = 0, my = 0, tx = 0, ty = 0, sc = 0;
  const AUTO = 0.045;
  function size() {
    const w = canvas.clientWidth || 600, h = canvas.clientHeight || 600, dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr); renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    camera.position.z = w / h < 0.9 ? 5.3 / Math.max(0.75, w / h) * 0.95 : 5.3;
  }
  size();
  window.addEventListener("resize", size);
  canvas.addEventListener("pointerdown", (e) => { dragging = true; lx = e.clientX; vel = 0; try { canvas.setPointerCapture(e.pointerId); } catch (_) {} canvas.classList.add("grab"); });
  canvas.addEventListener("pointermove", (e) => {
    if (dragging) { const dx = e.clientX - lx; lx = e.clientX; rot += dx * 0.0062; vel = dx * 0.0062 * 60; }
    const r = canvas.getBoundingClientRect(); mx = ((e.clientX - r.left) / r.width - 0.5); my = ((e.clientY - r.top) / r.height - 0.5);
  });
  const up = () => { dragging = false; canvas.classList.remove("grab"); };
  canvas.addEventListener("pointerup", up); canvas.addEventListener("pointercancel", up);
  canvas.addEventListener("pointerleave", () => { mx = 0; my = 0; });

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now; t += dt;
    if (!dragging) { rot += (vel + (reduce ? 0 : AUTO)) * dt; vel *= Math.exp(-dt * 2.2); }
    tx += (mx * 0.16 - tx) * (1 - Math.exp(-dt * 3)); ty += (my * 0.12 - ty) * (1 - Math.exp(-dt * 3));
    spin.rotation.y = rot + sc;
    clouds.rotation.y = rot * 0.9 + sc + t * 0.006;
    world.rotation.x = 0.46 + ty; world.rotation.y = tx;
    clouds.rotation.z = 0; 
    arcs.forEach((m) => { m.uniforms.uTime.value = t; });
    dots.forEach((d) => { const k = (t * 0.7 + d.ph) % 1; d.ring.scale.setScalar(1 + k * 2.6); d.ring.material.opacity = 0.55 * (1 - k); });
    renderer.render(scene, camera);
  }
  function start() { if (!raf && ready !== null) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  function stop() { cancelAnimationFrame(raf); raf = 0; }
  start();
  if ("IntersectionObserver" in window) new IntersectionObserver((es) => { es.forEach((e) => { visible = e.isIntersecting; visible ? start() : stop(); }); }, { threshold: 0.01 }).observe(canvas);
  document.addEventListener("visibilitychange", () => { document.hidden ? stop() : (visible && start()); });
  return { setScroll(v) { sc = v; }, render() { frame(performance.now()); stop(); }, step(dt) { t += dt; rot += AUTO * dt; } };
}
