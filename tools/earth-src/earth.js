/* YarVpn — реальный 3D-глобус: снимки NASA (Blue Marble, ночные огни, облака), атмосфера, «линии связи».
   Собирается в assets/js/earth.js. Подписей и списка серверов нет — точки и дуги только оформление. */
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, ShaderMaterial, TextureLoader, Vector3, Matrix4, Shape, ShapeGeometry,
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
  vec3 H=normalize(uSun+V);float sp=pow(max(dot(Ng,H),0.),220.)*water;
  col+=vec3(1.,.92,.78)*sp*.22*dayF;
  col+=vec3(.55,.75,1.)*pow(max(dot(Ng,H),0.),8.)*water*.03*dayF;
  float tw=exp(-pow(ng/.17,2.));col+=vec3(1.,.45,.16)*tw*.16*(.25+day.b*1.3);
  vec3 nl=texture2D(uNight,vUv).rgb;nl=pow(nl,vec3(1.1))*3.0*vec3(1.,.8,.5);
  col=mix(nl+day*.028,col,dayF);
  float fr=pow(1.-max(dot(Ng,V),0.),3.);
  col+=vec3(.2,.45,.9)*fr*(.06+.42*dayF)*.6;
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
  float i=pow(max(0.,.66-dot(vNormal,vec3(0.,0.,1.))),6.0)*0.85;
  float sunSide=.30+.95*clamp(dot(normalize(vNormal),uSunV)*.6+.5,0.,1.);
  vec3 c=mix(vec3(.12,.36,.9),vec3(.36,.62,.95),clamp(i*.5,0.,1.));
  gl_FragColor=vec4(c*i*sunSide,0.);
}`;

const ARC_VERT = `varying float vT;void main(){vT=uv.x;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const ARC_FRAG = `uniform float uP;uniform vec3 uCol;varying float vT;
void main(){
  float behind=uP-vT;                               // расстояние позади самолёта
  float trail=(behind>0.)?exp(-behind*7.)*smoothstep(0.,.012,behind):0.;
  float base=.20*sin(vT*3.14159);
  float a=base+trail*.95;
  gl_FragColor=vec4(uCol*(.75+trail*1.1)*a,0.);
}`;

// Центр сети — Москва (откуда смотрит пользователь); серверы берутся из assets/js/servers.js
const HUB = [55.75, 37.62];

export function initEarth(canvas, labelsEl, opts) {
  opts = opts || {};
  const reduce = !!opts.reduce;
  const SERVERS = (window.YV_SERVERS && window.YV_SERVERS.length ? window.YV_SERVERS : []);
  let renderer;
  try { renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" }); }
  catch (e) { return null; }
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene();
  const FOV = 28, CAMZ = 5.3;
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 50);
  camera.position.set(0, 0, CAMZ);
  const sun = new Vector3(-0.85, 0.34, 0.78).normalize();
  const sunV = sun.clone();

  const loader = new TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  const load = (f) => new Promise((res) => loader.load(BASE + f, (t) => { t.anisotropy = Math.min(8, maxAniso); t.minFilter = LinearMipmapLinearFilter; t.magFilter = LinearFilter; res(t); }, undefined, () => res(null)));

  const place = new Group();          // положение на экране (масштаб и сдвиг)
  const world = new Group();          // наклон оси
  world.rotation.z = 0.26;
  const spin = new Group();           // вращение вокруг оси
  place.add(world); world.add(spin); scene.add(place);
  const R = 1;

  const earthMat = new ShaderMaterial({ vertexShader: VERT, fragmentShader: EARTH_FRAG, uniforms: { uDay: { value: null }, uNight: { value: null }, uBump: { value: null }, uWater: { value: null }, uSun: { value: sun } } });
  const earth = new Mesh(new SphereGeometry(R, 128, 96), earthMat);
  spin.add(earth);
  const cloudMat = new ShaderMaterial({ vertexShader: VERT, fragmentShader: CLOUD_FRAG, transparent: true, depthWrite: false, uniforms: { uCl: { value: null }, uSun: { value: sun } } });
  const clouds = new Mesh(new SphereGeometry(R * 1.007, 96, 72), cloudMat);
  world.add(clouds);
  const atmoMat = new ShaderMaterial({ vertexShader: ATMO_VERT, fragmentShader: ATMO_FRAG, side: BackSide, blending: AdditiveBlending, premultipliedAlpha: true, transparent: true, depthWrite: false, uniforms: { uSunV: { value: sunV } } });
  place.add(new Mesh(new SphereGeometry(R * 1.08, 96, 72), atmoMat));

  // маршруты и самолёты
  const ORANGE = 0xff5a00, WHITE = 0xffffff;
  const hubP = ll(HUB[0], HUB[1], R);
  const routes = [];
  const planeShape = new Shape();
  [[1, 0], [-.55, .9], [-.3, .16], [-.95, .34], [-.95, -.34], [-.3, -.16], [-.55, -.9]].forEach((p, i) => i ? planeShape.lineTo(p[0], p[1]) : planeShape.moveTo(p[0], p[1]));
  planeShape.closePath();
  const planeGeo = new ShapeGeometry(planeShape); planeGeo.rotateX(-Math.PI / 2);
  const planeMat = new MeshBasicMaterial({ color: WHITE, side: DoubleSide });
  const tmpF = new Vector3(), tmpU = new Vector3(), tmpZ = new Vector3(), mtx = new Matrix4();

  function addRoute(a, b, idx) {
    const hgt = Math.min(0.30, 0.05 + a.angleTo(b) * 0.19), mid = a.clone().add(b).normalize().multiplyScalar(R + hgt);
    const curve = new CatmullRomCurve3([a.clone().multiplyScalar(1.004), a.clone().lerp(mid, 0.5).normalize().multiplyScalar(R + hgt * 0.55), mid, b.clone().lerp(mid, 0.5).normalize().multiplyScalar(R + hgt * 0.55), b.clone().multiplyScalar(1.004)]);
    const mat = new ShaderMaterial({ vertexShader: ARC_VERT, fragmentShader: ARC_FRAG, transparent: true, premultipliedAlpha: true, depthWrite: false, blending: AdditiveBlending, uniforms: { uP: { value: 0 }, uCol: { value: new Color(ORANGE) } } });
    spin.add(new Mesh(new TubeGeometry(curve, 110, 0.0030, 5, false), mat));
    const plane = new Mesh(planeGeo, planeMat); plane.scale.setScalar(0.024); spin.add(plane);
    routes.push({ curve, mat, plane, dur: 7.5 + (idx % 3) * 1.6, off: (idx * 0.37) % 1 });
  }
  const dots = [], labels = [];
  function addDot(p, big) {
    const col = big ? WHITE : ORANGE;
    const m = new Mesh(new SphereGeometry(big ? 0.016 : 0.013, 16, 12), new MeshBasicMaterial({ color: col }));
    m.position.copy(p).multiplyScalar(1.004); spin.add(m);
    const ring = new Mesh(new RingGeometry(0.016, 0.022, 40), new MeshBasicMaterial({ color: col, transparent: true, opacity: 0.6, blending: AdditiveBlending, side: DoubleSide, depthWrite: false }));
    ring.position.copy(p).multiplyScalar(1.006); ring.lookAt(p.clone().multiplyScalar(2)); spin.add(ring);
    dots.push({ ring, ph: Math.random() * 6.28 });
  }
  SERVERS.forEach((sv, i) => {
    const p = ll(sv.lat, sv.lon, R);
    addRoute(hubP, p, i); addDot(p, false);
    if (labelsEl) { const el = document.createElement("span"); el.className = "gl-label d-" + (sv.dir || "r"); const tb = document.createElement("b"); tb.textContent = sv.city || sv.name; el.appendChild(tb); labelsEl.appendChild(el); labels.push({ el, p }); }
  });
  addDot(hubP, true);
  if (labelsEl) { const el = document.createElement("span"); el.className = "gl-label you d-r"; const tb = document.createElement("b"); tb.textContent = "Вы"; el.appendChild(tb); labelsEl.appendChild(el); labels.push({ el, p: hubP }); }

  Promise.all([load("day.jpg"), load("night.jpg"), load("bump.jpg"), load("water.jpg"), load("clouds.jpg")]).then((t) => {
    const u = earthMat.uniforms; u.uDay.value = t[0]; u.uNight.value = t[1]; u.uBump.value = t[2]; u.uWater.value = t[3]; cloudMat.uniforms.uCl.value = t[4];
    ready = true; canvas.classList.add("on"); if (labelsEl) labelsEl.classList.add("on"); if (opts.onReady) opts.onReady();
  });

  let ready = false, visible = true, raf = 0, last = 0, t = 0, cw = 600, ch = 600;
  const CENTER_LON = -17;                                      // Атлантика: видны и Москва, и Америка
  const BASE_ROT = -Math.PI / 2 - (CENTER_LON * Math.PI) / 180;
  let mx = 0, my = 0, tx = 0, ty = 0, sc = 0;
  const wv = new Vector3();

  function size() {
    cw = canvas.clientWidth || 600; ch = canvas.clientHeight || 600;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); renderer.setSize(cw, ch, false);
    const aspect = cw / ch; camera.aspect = aspect; camera.updateProjectionMatrix();
    const halfH = Math.tan((FOV * Math.PI) / 360) * CAMZ, halfW = halfH * aspect;
    let s, x, y;
    if (aspect >= 1.05) { s = Math.min(halfH * 0.9, halfW * 0.46); x = halfW * 0.50; y = -halfH * 0.02; }       // компьютер: справа, крупно
    else { s = halfW * 0.88; x = 0; y = -halfH + s * 1.08; }                                   // телефон: ниже заголовка
    place.scale.setScalar(s); place.position.set(x, y, 0);
  }
  size();
  window.addEventListener("resize", size);
  window.addEventListener("pointermove", (e) => { mx = e.clientX / window.innerWidth - 0.5; my = e.clientY / window.innerHeight - 0.5; }, { passive: true });

  function updateLabels() {
    if (!labels.length) return;
    for (let i = 0; i < labels.length; i++) {
      const L = labels[i];
      wv.copy(L.p).multiplyScalar(1.03); spin.localToWorld(wv);
      const facing = wv.clone().sub(place.position).normalize().dot(camera.position.clone().sub(wv).normalize());   // >0 — точка на видимой стороне
      wv.project(camera);
      const vis = facing > 0.12 && wv.z < 1;
      L.el.style.opacity = vis ? "" : "0";
      L.el.style.transform = "translate3d(" + ((wv.x * 0.5 + 0.5) * cw).toFixed(1) + "px," + ((-wv.y * 0.5 + 0.5) * ch).toFixed(1) + "px,0)";
    }
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.max(0, Math.min(0.05, (now - last) / 1000 || 0.016)); last = now; t += dt;
    tx += (mx * 0.12 - tx) * (1 - Math.exp(-dt * 3)); ty += (my * 0.08 - ty) * (1 - Math.exp(-dt * 3));
    const sway = reduce ? 0 : Math.sin(t * 0.11) * 0.28;      // плавное покачивание вместо бесконечного вращения
    spin.rotation.y = BASE_ROT + sway + sc;
    clouds.rotation.y = BASE_ROT * 0.98 + sway + sc + t * 0.005;
    world.rotation.x = 0.36 + ty; world.rotation.y = tx;
    for (let i = 0; i < routes.length; i++) {
      const r = routes[i];
      const p = reduce ? 0.55 : (((t / r.dur + r.off) % 1) + 1) % 1;
      r.mat.uniforms.uP.value = p;
      const pos = r.curve.getPointAt(Math.min(0.999, p)), tan = r.curve.getTangentAt(Math.min(0.999, p));
      tmpU.copy(pos).normalize(); tmpF.copy(tan).normalize(); tmpZ.crossVectors(tmpF, tmpU);
      mtx.makeBasis(tmpF, tmpU, tmpZ); r.plane.quaternion.setFromRotationMatrix(mtx);
      r.plane.position.copy(pos).multiplyScalar(1.012);
      const fade = p < 0.04 ? p / 0.04 : p > 0.96 ? (1 - p) / 0.04 : 1; r.plane.scale.setScalar(0.024 * fade);
    }
    dots.forEach((d) => { const k = (t * 0.7 + d.ph) % 1; d.ring.scale.setScalar(1 + k * 2.6); d.ring.material.opacity = 0.55 * (1 - k); });
    renderer.render(scene, camera);
    updateLabels();
  }
  function start() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }
  function stop() { cancelAnimationFrame(raf); raf = 0; }
  start();
  if ("IntersectionObserver" in window) new IntersectionObserver((es) => { es.forEach((e) => { visible = e.isIntersecting; visible ? start() : stop(); }); }, { threshold: 0.01 }).observe(canvas);
  document.addEventListener("visibilitychange", () => { document.hidden ? stop() : (visible && start()); });
  return { setScroll(v) { sc = v * 0.5; }, step(dt) { t += dt; } };
}
