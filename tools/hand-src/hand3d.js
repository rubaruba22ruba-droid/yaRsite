/* YarVpn — настоящая 3D-рука (three.js): скелетная модель руки (WebXR generic hand, MIT), кожа с подповерхностным свечением,
   ногти, предплечье, цепь на запястье. Рука в цепи → цепь рвётся → пальцы раскрываются и тянутся к солнцу. */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import HAND_B64 from "./hand_glb.js";

const V = THREE.Vector3, Q = THREE.Quaternion, M4 = THREE.Matrix4;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const ease = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
const eo = (x) => { x = clamp(x, 0, 1); return 1 - Math.pow(1 - x, 3); };
const mix = (a, b, t) => a + (b - a) * t;

export function mountHand(canvas, opts) {
  opts = opts || {};
  const reduce = !!opts.reduce;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, 1, 0.05, 20);
  camera.position.set(0, 0, 1.15);

  /* ---------- окружение (небо для отражений и мягкого света) ---------- */
  const envCv = document.createElement("canvas"); envCv.width = 512; envCv.height = 256;
  const envTex = new THREE.CanvasTexture(envCv); envTex.mapping = THREE.EquirectangularReflectionMapping; envTex.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  let envRT = null;
  const sky = { top: [0.16, 0.42, 0.85], hor: [0.85, 0.93, 1.0], gnd: [0.55, 0.62, 0.32], sun: [1, 0.96, 0.85], sunDir: new V(-0.5, 0.5, 0.7).normalize(), key: "" };
  function css(c, k) { return "rgb(" + Math.round(clamp(c[0] * (k || 1), 0, 1) * 255) + "," + Math.round(clamp(c[1] * (k || 1), 0, 1) * 255) + "," + Math.round(clamp(c[2] * (k || 1), 0, 1) * 255) + ")"; }
  function buildEnv() {
    const g = envCv.getContext("2d"), w = 512, h = 256;
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, css(sky.top)); gr.addColorStop(0.5, css(sky.hor)); gr.addColorStop(0.52, css(sky.gnd, 0.8)); gr.addColorStop(1, css(sky.gnd, 0.45));
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    // солнце
    const d = sky.sunDir, u = 0.5 + Math.atan2(d.x, -d.z) / (2 * Math.PI), v = 0.5 - Math.asin(clamp(d.y, -1, 1)) / Math.PI;
    const rg = g.createRadialGradient(u * w, v * h, 0, u * w, v * h, 70);
    rg.addColorStop(0, css(sky.sun, 1.4)); rg.addColorStop(0.15, css(sky.sun, 1)); rg.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = rg; g.fillRect(0, 0, w, h);
    envTex.needsUpdate = true;
    if (envRT) envRT.dispose();
    envRT = pmrem.fromEquirectangular(envTex);
    scene.environment = envRT.texture;
  }

  /* ---------- свет ---------- */
  const sun = new THREE.DirectionalLight(0xfff1dc, 3.6); scene.add(sun); scene.add(sun.target);
  sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024); sun.shadow.camera.left = -0.3; sun.shadow.camera.right = 0.3; sun.shadow.camera.top = 0.3; sun.shadow.camera.bottom = -0.3; sun.shadow.camera.near = 0.1; sun.shadow.camera.far = 4; sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.004; sun.shadow.radius = 4;
  const rim = new THREE.DirectionalLight(0xff6a3a, 1.6); scene.add(rim);      // «просвечивание» кожи против солнца
  const fill = new THREE.HemisphereLight(0xbcd8ff, 0x8a6a48, 0.35); scene.add(fill);

  /* ---------- материалы ---------- */
  function skinNormal() {
    const s = 512, cv = document.createElement("canvas"); cv.width = cv.height = s;
    const g = cv.getContext("2d"), hgt = new Float32Array(s * s);
    // высота: поры + мелкие складки
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 5200; i++) { const x = rnd() * s, y = rnd() * s, r = 0.8 + rnd() * 1.6; for (let yy = -3; yy <= 3; yy++) for (let xx = -3; xx <= 3; xx++) { const d = Math.sqrt(xx * xx + yy * yy); if (d < r * 2) { const px = (Math.floor(x + xx) + s) % s, py = (Math.floor(y + yy) + s) % s; hgt[py * s + px] -= Math.exp(-d * d / (r * r)) * 0.9; } } }
    for (let i = 0; i < 120; i++) { let x = rnd() * s, y = rnd() * s, a = rnd() * 6.28, l = 20 + rnd() * 70; for (let k = 0; k < l; k++) { x += Math.cos(a) * 1.2; y += Math.sin(a) * 1.2; a += (rnd() - 0.5) * 0.25; const px = (Math.floor(x) + s) % s, py = (Math.floor(y) + s) % s; hgt[py * s + px] -= 0.7; hgt[((py + 1) % s) * s + px] -= 0.3; } }
    const img = g.createImageData(s, s);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      const gx = hgt[y * s + (x + 1) % s] - hgt[y * s + (x - 1 + s) % s], gy = hgt[((y + 1) % s) * s + x] - hgt[((y - 1 + s) % s) * s + x];
      const nx = -gx * 0.6, ny = -gy * 0.6, nz = 1, l = Math.sqrt(nx * nx + ny * ny + nz * nz), o = (y * s + x) * 4;
      img.data[o] = (nx / l * 0.5 + 0.5) * 255; img.data[o + 1] = (ny / l * 0.5 + 0.5) * 255; img.data[o + 2] = (nz / l * 0.5 + 0.5) * 255; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(5, 5); t.anisotropy = 4; return t;
  }
  const skin = new THREE.MeshPhysicalMaterial({
    color: 0xe3a27f, roughness: 0.50, metalness: 0, vertexColors: true,
    sheen: 1, sheenColor: new THREE.Color(1.0, 0.62, 0.52), sheenRoughness: 0.45,
    clearcoat: 0.18, clearcoatRoughness: 0.45, normalMap: skinNormal(), normalScale: new THREE.Vector2(0.45, 0.45), envMapIntensity: 0.65
  });
  const nailMat = new THREE.MeshPhysicalMaterial({ color: 0xf2c2b6, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 1.2 });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xb8bec9, metalness: 1, roughness: 0.28, envMapIntensity: 1.3 });

  /* ---------- модель ---------- */
  const root = new THREE.Group(); scene.add(root);
  const S = { bones: {}, rest: {}, ready: false, links: [], mesh: null };
  const CH = {
    thumb: ["thumb-metacarpal", "thumb-phalanx-proximal", "thumb-phalanx-distal", "thumb-tip"],
    index: ["index-finger-metacarpal", "index-finger-phalanx-proximal", "index-finger-phalanx-intermediate", "index-finger-phalanx-distal", "index-finger-tip"],
    middle: ["middle-finger-metacarpal", "middle-finger-phalanx-proximal", "middle-finger-phalanx-intermediate", "middle-finger-phalanx-distal", "middle-finger-tip"],
    ring: ["ring-finger-metacarpal", "ring-finger-phalanx-proximal", "ring-finger-phalanx-intermediate", "ring-finger-phalanx-distal", "ring-finger-tip"],
    pinky: ["pinky-finger-metacarpal", "pinky-finger-phalanx-proximal", "pinky-finger-phalanx-intermediate", "pinky-finger-phalanx-distal", "pinky-finger-tip"]
  };
  const ORDER = ["index", "middle", "ring", "pinky"];

  const bin = Uint8Array.from(atob(HAND_B64), (c) => c.charCodeAt(0)).buffer;
  new GLTFLoader().parse(bin, "", (gltf) => {
    const model = gltf.scene; root.add(model);
    model.traverse((o) => {
      if (o.isBone) { S.bones[o.name] = o; S.rest[o.name] = { p: o.position.clone(), q: o.quaternion.clone() }; }
      if (o.isSkinnedMesh) { S.mesh = o; o.material = skin; o.frustumCulled = false; o.castShadow = true; o.receiveShadow = true; }
    });
    // цвет кожи по вершинам: кончики пальцев и костяшки чуть розовее
    const pos = S.mesh.geometry.attributes.position, col = new Float32Array(pos.count * 3), tips = [];
    Object.keys(CH).forEach((k) => tips.push(S.rest[CH[k][CH[k].length - 1]].p));
    for (let i = 0; i < pos.count; i++) {
      const v = new V(pos.getX(i), pos.getY(i), pos.getZ(i)); let m = 1e9; tips.forEach((t) => { m = Math.min(m, v.distanceTo(t)); });
      const k = smooth(0.030, 0.0, m);
      col[i * 3] = 1; col[i * 3 + 1] = 1 - 0.10 * k; col[i * 3 + 2] = 1 - 0.13 * k;
    }
    S.mesh.geometry.setAttribute("color", new THREE.BufferAttribute(col, 3));
    function smooth(a, b, x) { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
    buildExtras(); S.ready = true; if (opts.onReady) opts.onReady();
  });

  function buildExtras() {
    // предплечье: продолжение запястья
    // рукав: светлая ткань с мягкими складками и подвёрнутой манжетой — прячет стык кисти и предплечья
    const geo = new THREE.CylinderGeometry(1.5, 1, 0.42, 56, 30, true);
    geo.translate(0, 0.21, 0);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i), t = y / 0.42, ang = Math.atan2(pos.getZ(i), pos.getX(i));
      const fold = 1 + 0.045 * Math.sin(ang * 5 + t * 6) * Math.min(1, t * 3) + 0.02 * Math.sin(ang * 9 - t * 11);
      const f = (1 + 0.55 * t) * fold;
      pos.setX(i, pos.getX(i) * 0.0262 * f); pos.setZ(i, pos.getZ(i) * 0.0345 * f);
    }
    geo.computeVertexNormals();
    const cloth = new THREE.MeshPhysicalMaterial({ color: 0xf5f1ea, roughness: 0.82, sheen: 1, sheenColor: new THREE.Color(1, 0.96, 0.9), sheenRoughness: 0.5, side: THREE.DoubleSide, envMapIntensity: 0.5 });
    const arm = new THREE.Mesh(geo, cloth); arm.castShadow = true; arm.receiveShadow = true;
    arm.position.set(0.0372, 0.0475, 0.0122);
    root.add(arm); S.arm = arm;
    const cuffGeo = new THREE.CylinderGeometry(1.06, 1.0, 0.016, 56, 1, false);
    const cp2 = cuffGeo.attributes.position;
    for (let i = 0; i < cp2.count; i++) { cp2.setX(i, cp2.getX(i) * 0.0276); cp2.setZ(i, cp2.getZ(i) * 0.0364); }
    cuffGeo.computeVertexNormals();
    const cuff = new THREE.Mesh(cuffGeo, cloth); cuff.position.set(0.0372, 0.0475 + 0.004, 0.0122); cuff.castShadow = true; root.add(cuff);
    // цепь: 8 звеньев браслетом вокруг запястья
    for (let i = 0; i < 8; i++) {
      const link = new THREE.Mesh(new THREE.TorusGeometry(0.0125, 0.0032, 12, 28), steelMat);
      root.add(link); S.links.push({ m: link, i, broken: false, v: new V(), w: new V() });
    }
  }

  /* ---------- скелетная анимация пальцев (кости — соседи, поэтому считаем цепочки сами) ---------- */
  const tmpM = new M4(), tmpQ = new Q(), tmpV = new V();
  function applyChain(names, angles, axis, spreadAngle, spreadAxis, pivotIdx) {
    // D — накопленное мировое смещение цепочки
    let D = new M4();
    // разведение пальцев вокруг оси нормали ладони с центром в основании пальца
    if (spreadAngle) {
      const c = S.rest[names[1]].p.clone();
      D = new M4().makeTranslation(c.x, c.y, c.z).multiply(new M4().makeRotationAxis(spreadAxis, spreadAngle)).multiply(new M4().makeTranslation(-c.x, -c.y, -c.z));
    }
    for (let j = 0; j < names.length; j++) {
      const r = S.rest[names[j]];
      if (j >= 1 && j <= angles.length && angles[j - 1] !== 0) {
        const c = r.p.clone().applyMatrix4(D);
        const ax = axis.clone().transformDirection(D);
        const R = new M4().makeTranslation(c.x, c.y, c.z).multiply(new M4().makeRotationAxis(ax, angles[j - 1])).multiply(new M4().makeTranslation(-c.x, -c.y, -c.z));
        D = R.multiply(D);
      }
      // новая поза кости = D * rest
      const m = new M4().compose(r.p, r.q, new V(1, 1, 1)); m.premultiply(D);
      const b = S.bones[names[j]]; m.decompose(b.position, b.quaternion, tmpV);
    }
  }

  const AXIS_FLEX = new V(0, 0, 1), AXIS_PALM = new V(1, 0, 0);
  const fit = { s: 1, x: 0, y: 0 };
  const st = { t: 0, mx: 0, my: 0, mxs: 0, mys: 0, broke: false, flare: 0 };
  const T_BREAK = 1.9, T_OPEN = 2.15, T_DUR = 2.4;

  const P = { // параметры позы, чтобы можно было подобрать снаружи
    flexSign: 1, openCurl: [0.30, 0.34, 0.20], fist: [1.25, 1.55, 1.0], per: [[0.0, -0.06, -0.04], [0.06, 0.02, -0.02], [0.14, 0.10, 0.02], [0.24, 0.16, 0.06]]
  };

  function pose(o) {
    if (!S.ready) return;
    const sgn = P.flexSign;
    ORDER.forEach((k, idx) => {
      const c = o.curl[idx];
      const pf = P.per[idx], op = 1 - c, a1 = (mix(P.openCurl[0], P.fist[0], c) + pf[0] * op) * sgn, a2 = (mix(P.openCurl[1], P.fist[1], c) + pf[1] * op) * sgn, a3 = (mix(P.openCurl[2], P.fist[2], c) + pf[2] * op) * sgn;
      const spr = (idx - 1.5) * 0.11 * o.spread * (idx === 3 ? 1.15 : 1);
      applyChain(CH[k], [a1, a2, a3], AXIS_FLEX, spr, AXIS_PALM);
    });
    const tc = o.curl[4];
    applyChain(CH.thumb, [mix(0.05, 0.9, tc) * sgn, mix(0.02, 0.8, tc) * sgn], new V(0, 0.6, 0.8).normalize(), -o.thumbOut * 0.5, new V(0, 0, 1));
  }

  function layout() {
    const w = canvas.clientWidth || canvas.width, h = canvas.clientHeight || canvas.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    const a = w / h; fit.s = a < 1.25 ? 1.85 : 1; fit.x = a < 1.25 ? -0.02 : 0; fit.y = a < 1.25 ? 0.03 : 0;
  }

  function setSky(o) {
    if (!o) return;
    const key = [o.top, o.hor, o.gnd, o.sun].map((a) => a.map((x) => x.toFixed(2)).join(",")).join("|") + o.sunDir.map((x) => x.toFixed(2)).join(",");
    if (key === sky.key) return; sky.key = key;
    sky.top = o.top; sky.hor = o.hor; sky.gnd = o.gnd; sky.sun = o.sun; sky.sunDir.set(o.sunDir[0], o.sunDir[1], o.sunDir[2]).normalize();
    buildEnv();
    sun.color.setRGB(o.sun[0], o.sun[1], o.sun[2]);
    sun.position.copy(sky.sunDir).multiplyScalar(2);
    rim.position.copy(sky.sunDir).multiplyScalar(-2).add(new V(0, 0.4, -1));
  }

  function frame(dt) {
    st.t += dt; const t = st.t;
    st.mxs += (st.mx - st.mxs) * (1 - Math.exp(-dt * 3)); st.mys += (st.my - st.mys) * (1 - Math.exp(-dt * 3));
    const open = reduce ? 1 : eo((t - T_OPEN) / T_DUR);
    const tremble = t < T_BREAK ? Math.sin(t * 40) * 0.010 * ease((t - 0.7) / 1.0) : 0;
    const breathe = 0.5 + 0.5 * Math.sin(t * 0.9);
    const curl = [];
    for (let i = 0; i < 5; i++) {
      const stag = reduce ? 1 : ease((t - T_OPEN - i * 0.10) / T_DUR);
      curl.push(clamp(1 - stag + 0.05 * breathe * stag + 0.03 * Math.sin(t * 1.3 + i) * stag + tremble * 6, 0, 1.05));
    }
    const rise = reduce ? 1 : eo((t - T_OPEN + 0.3) / (T_DUR + 0.8));
    const flo = Math.sin(t * 0.7) * open;
    pose({ curl, spread: mix(0.35, 1.0 + 0.12 * Math.sin(t * 0.8), open), thumbOut: mix(0, 1, open) });

    // положение и поворот всей руки: из угла кадра вверх-влево к солнцу (два ключевых кадра: кулак → тянется)
    root.rotation.order = "XYZ";
    const sway = Math.sin(t * 0.55) * 0.05 * open, sway2 = Math.cos(t * 0.43) * 0.04 * open;
    root.rotation.set(mix(0.20, 0.45, rise) + st.mys * 0.10 + sway2, mix(-0.75, -0.90, rise) + st.mxs * 0.16 + sway, mix(3.72, 4.0, rise) - st.mxs * 0.08);
    root.position.set(mix(0.09, 0.075, rise) + st.mxs * 0.02, mix(-0.16, -0.10, rise) + flo * 0.006 - tremble * 0.3 - st.mys * 0.01, 0);
    root.scale.setScalar((P.scale || mix(0.78, 0.86, rise)) * fit.s); root.position.x += fit.x; root.position.y += fit.y;
    if (P.rot) { root.rotation.set(P.rot[0], P.rot[1], P.rot[2]); root.position.set(P.rot[3] || 0, P.rot[4] || 0, 0); }

    // цепь
    if (S.ready) {
      const wr = S.rest["wrist"].p;
      S.links.forEach((L) => {
        if (!st.broke) {
          const a = L.i / S.links.length * Math.PI * 2;
          L.m.position.set(0.0372 + Math.cos(a) * 0.0312, 0.0475 + 0.030 + (L.i % 2 ? 0.003 : -0.003), 0.0122 + Math.sin(a) * 0.0398);
          L.m.rotation.set(0, -a + Math.PI / 2, L.i % 2 ? Math.PI / 2 : 0);
          L.m.rotation.order = "YXZ";
          L.m.visible = true;
        }
      });
      if (!st.broke && t >= T_BREAK) {
        st.broke = true; st.flare = 1;
        root.updateMatrixWorld(true);
        const c = root.localToWorld(new V(0.0372, 0.0475 + 0.03, 0.0122));
        S.links.forEach((L) => {
          L.broken = true;
          const wp = new V(); L.m.getWorldPosition(wp);
          scene.attach(L.m);                                   // дальше звенья падают в мировых координатах, а не «вверх ногами» вместе с рукой
          L.v.copy(wp).sub(c).normalize().multiplyScalar(0.10 + Math.random() * 0.08); L.v.y += 0.05 + Math.random() * 0.05;
          L.w.set((Math.random() - 0.5) * 7, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 7);
        });
        if (reduce) S.links.forEach((L) => { L.m.visible = false; });
        if (opts.onBreak) opts.onBreak();
      }
      if (st.broke) S.links.forEach((L) => {
        if (!L.m.visible) return;
        L.v.y -= 0.9 * dt; L.m.position.addScaledVector(L.v, dt);
        L.m.rotation.x += L.w.x * dt; L.m.rotation.y += L.w.y * dt; L.m.rotation.z += L.w.z * dt;
        if (L.m.position.y < -0.6) L.m.visible = false;
      });
    }
    st.flare = Math.max(0, st.flare - dt * 0.6);
  }

  function render() { renderer.render(scene, camera); }
  function loop(ts) { if (!loop.on) return; const dt = Math.min((ts - loop.last) / 1000, 0.05); loop.last = ts; frame(dt); render(); requestAnimationFrame(loop); }
  loop.on = false; loop.last = 0;

  layout();
  buildEnv();
  const api = {
    S, st, P, root, camera, scene, layout, setSky, render,
    frame: (t) => { st.t = t; frame(0); render(); },
    reset: () => { st.t = 0; st.broke = false; S.links.forEach((L) => { L.broken = false; L.m.visible = true; root.add(L.m); }); },
    step: (dt) => { frame(dt); render(); },
    start: () => { if (loop.on) return; loop.on = true; loop.last = performance.now(); requestAnimationFrame(loop); },
    stop: () => { loop.on = false; },
    pointer: (x, y) => { st.mx = x; st.my = y; }
  };
  return api;
}
