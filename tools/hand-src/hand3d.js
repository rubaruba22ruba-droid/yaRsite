/* YarVpn — настоящая 3D-рука (three.js): скелетная модель кисти (WebXR generic hand, MIT), реальное освещение от HDR-панорам (Poly Haven, CC0),
   процедурная кожа (поры, складки суставов, ногти, румянец), пружинная анимация без «линейных» движений.
   Сюжет: рука в цепи → цепь рвётся → пальцы раскрываются с лёгким «перелётом» → рука плавно тянется к солнцу и дышит. */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import HAND_B64 from "./hand_glb.js";
import { IBL_W, IBL_H, IBL_DAY, IBL_GOLD, IBL_SET } from "./ibl_data.js";

const V = THREE.Vector3, Q = THREE.Quaternion, M4 = THREE.Matrix4;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const mix = (a, b, t) => a + (b - a) * t;

/* пружина: устойчивая (подшаги), с настраиваемым «перелётом» */
class Spring {
  constructor(x, k, d) { this.x = x; this.v = 0; this.t = x; this.k = k; this.d = d; }
  step(dt) {
    const c = 2 * Math.sqrt(this.k) * this.d, n = Math.max(1, Math.ceil(dt / 0.008)), h = dt / n;
    for (let i = 0; i < n; i++) { const a = this.k * (this.t - this.x) - c * this.v; this.v += a * h; this.x += this.v * h; }
    return this.x;
  }
  snap(x) { this.x = this.t = x; this.v = 0; }
}
const wob = (t, a, b, c) => Math.sin(t * a) * 0.5 + Math.sin(t * b + 1.7) * 0.3 + Math.sin(t * c + 4.1) * 0.2;   // мягкий «живой» шум

function decodeRGBE(b64) {
  const bin = atob(b64), n = IBL_W * IBL_H, out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const e = bin.charCodeAt(i * 4 + 3), f = e ? Math.pow(2, e - 136) : 0;
    out[i * 3] = bin.charCodeAt(i * 4) * f; out[i * 3 + 1] = bin.charCodeAt(i * 4 + 1) * f; out[i * 3 + 2] = bin.charCodeAt(i * 4 + 2) * f;
  }
  return out;
}


/* Подразбиение поверхности (Loop): гладкие кончики пальцев и суставы вместо граней. Веса костей и UV переносятся на новые вершины. */
function loopSubdivide(geo) {
  const P = geo.attributes.position, UV = geo.attributes.uv, SI = geo.attributes.skinIndex, SW = geo.attributes.skinWeight, IDX = geo.index.array, n = P.count;
  const canon = new Int32Array(n), cmap = new Map(); let nc = 0;
  for (let i = 0; i < n; i++) { const k = Math.round(P.getX(i) * 1e5) + "," + Math.round(P.getY(i) * 1e5) + "," + Math.round(P.getZ(i) * 1e5); let c = cmap.get(k); if (c === undefined) { c = nc++; cmap.set(k, c); } canon[i] = c; }
  const cp = new Float32Array(nc * 3); for (let i = 0; i < n; i++) { const c = canon[i]; cp[c * 3] = P.getX(i); cp[c * 3 + 1] = P.getY(i); cp[c * 3 + 2] = P.getZ(i); }
  const edges = new Map(), nb = Array.from({ length: nc }, () => new Set());
  const ek = (a, b) => (a < b ? a * 1048576 + b : b * 1048576 + a);
  for (let t = 0; t < IDX.length; t += 3) {
    const c = [canon[IDX[t]], canon[IDX[t + 1]], canon[IDX[t + 2]]];
    for (let e = 0; e < 3; e++) { const a = c[e], b = c[(e + 1) % 3], o = c[(e + 2) % 3], k = ek(a, b); let E = edges.get(k); if (!E) { E = { a, b, opp: [] }; edges.set(k, E); } E.opp.push(o); nb[a].add(b); nb[b].add(a); }
  }
  const bnd = Array.from({ length: nc }, () => []);
  edges.forEach((E) => { if (E.opp.length === 1) { bnd[E.a].push(E.b); bnd[E.b].push(E.a); } });
  const np = new Float32Array(nc * 3);
  for (let c = 0; c < nc; c++) {
    const x = cp[c * 3], y = cp[c * 3 + 1], z = cp[c * 3 + 2];
    if (bnd[c].length) { const b1 = bnd[c][0], b2 = bnd[c][1] === undefined ? b1 : bnd[c][1]; for (let k = 0; k < 3; k++) np[c * 3 + k] = 0.75 * cp[c * 3 + k] + 0.125 * (cp[b1 * 3 + k] + cp[b2 * 3 + k]); continue; }
    const val = nb[c].size, beta = val === 3 ? 3 / 16 : 3 / (8 * val); let sx = 0, sy = 0, sz = 0;
    nb[c].forEach((m) => { sx += cp[m * 3]; sy += cp[m * 3 + 1]; sz += cp[m * 3 + 2]; });
    np[c * 3] = (1 - val * beta) * x + beta * sx; np[c * 3 + 1] = (1 - val * beta) * y + beta * sy; np[c * 3 + 2] = (1 - val * beta) * z + beta * sz;
  }
  const outP = [], outUV = [], outSI = [], outSW = [], outI = [];
  for (let i = 0; i < n; i++) { const c = canon[i]; outP.push(np[c * 3], np[c * 3 + 1], np[c * 3 + 2]); outUV.push(UV.getX(i), UV.getY(i)); outSI.push(SI.getX(i), SI.getY(i), SI.getZ(i), SI.getW(i)); outSW.push(SW.getX(i), SW.getY(i), SW.getZ(i), SW.getW(i)); }
  const mids = new Map();
  function mid(i, j) {
    const k = i < j ? i * 1048576 + j : j * 1048576 + i; let m = mids.get(k); if (m !== undefined) return m;
    m = outP.length / 3; mids.set(k, m);
    const E = edges.get(ek(canon[i], canon[j])), a = canon[i], b = canon[j];
    for (let q = 0; q < 3; q++) {
      const A = cp[a * 3 + q], B = cp[b * 3 + q];
      outP.push(E.opp.length === 2 ? 0.375 * (A + B) + 0.125 * (cp[E.opp[0] * 3 + q] + cp[E.opp[1] * 3 + q]) : 0.5 * (A + B));
    }
    outUV.push((UV.getX(i) + UV.getX(j)) / 2, (UV.getY(i) + UV.getY(j)) / 2);
    const acc = new Map(), add = (v, w) => { for (let q = 0; q < 4; q++) { const ji = v === 0 ? SI.getComponent(i, q) : SI.getComponent(j, q), ww = (v === 0 ? SW.getComponent(i, q) : SW.getComponent(j, q)) * 0.5; if (ww > 0) acc.set(ji, (acc.get(ji) || 0) + ww); } };
    add(0); add(1);
    const top = Array.from(acc.entries()).sort((x, y) => y[1] - x[1]).slice(0, 4); let sum = 0; top.forEach((t) => { sum += t[1]; });
    for (let q = 0; q < 4; q++) { outSI.push(top[q] ? top[q][0] : 0); outSW.push(top[q] ? top[q][1] / sum : 0); }
    return m;
  }
  for (let t = 0; t < IDX.length; t += 3) {
    const a = IDX[t], b = IDX[t + 1], c = IDX[t + 2], ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
    outI.push(a, ab, ca, b, bc, ab, c, ca, bc, ab, bc, ca);
  }
  const vn = outP.length / 3, g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(outP), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(outUV), 2));
  g.setAttribute("skinIndex", new THREE.BufferAttribute(new Uint16Array(outSI), 4));
  g.setAttribute("skinWeight", new THREE.BufferAttribute(new Float32Array(outSW), 4));
  g.setIndex(new THREE.BufferAttribute(vn > 65535 ? new Uint32Array(outI) : new Uint16Array(outI), 1));
  // гладкие нормали: усредняем по совпадающим позициям, чтобы не было швов по разрезам UV
  const cmap2 = new Map(), cid = new Int32Array(vn); let n2 = 0;
  for (let i = 0; i < vn; i++) { const k = Math.round(outP[i * 3] * 1e5) + "," + Math.round(outP[i * 3 + 1] * 1e5) + "," + Math.round(outP[i * 3 + 2] * 1e5); let c = cmap2.get(k); if (c === undefined) { c = n2++; cmap2.set(k, c); } cid[i] = c; }
  const acc = new Float32Array(n2 * 3), pa = new V(), pb = new V(), pc = new V(), e1 = new V(), e2 = new V();
  for (let t = 0; t < outI.length; t += 3) {
    pa.fromArray(outP, outI[t] * 3); pb.fromArray(outP, outI[t + 1] * 3); pc.fromArray(outP, outI[t + 2] * 3);
    e1.subVectors(pb, pa); e2.subVectors(pc, pa); e1.cross(e2);
    for (let q = 0; q < 3; q++) { const c = cid[outI[t + q]]; acc[c * 3] += e1.x; acc[c * 3 + 1] += e1.y; acc[c * 3 + 2] += e1.z; }
  }
  const nr = new Float32Array(vn * 3);
  for (let i = 0; i < vn; i++) { const c = cid[i]; e1.set(acc[c * 3], acc[c * 3 + 1], acc[c * 3 + 2]).normalize(); nr[i * 3] = e1.x; nr[i * 3 + 1] = e1.y; nr[i * 3 + 2] = e1.z; }
  g.setAttribute("normal", new THREE.BufferAttribute(nr, 3));
  return g;
}

export function mountHand(canvas, opts) {
  opts = opts || {};
  const reduce = !!opts.reduce;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(26, 1, 0.05, 20);
  camera.position.set(0, 0, 1.15);

  /* ---------- освещение: реальные панорамы неба/земли; между ними плавный переход по времени суток ---------- */
  const HDR = [decodeRGBE(IBL_DAY), decodeRGBE(IBL_GOLD), decodeRGBE(IBL_SET)];
  const envData = new Float32Array(IBL_W * IBL_H * 4);
  const envTex = new THREE.DataTexture(envData, IBL_W, IBL_H, THREE.RGBAFormat, THREE.FloatType);
  envTex.mapping = THREE.EquirectangularReflectionMapping; envTex.colorSpace = THREE.LinearSRGBColorSpace; envTex.minFilter = THREE.LinearFilter; envTex.magFilter = THREE.LinearFilter; envTex.flipY = true;
  const pmrem = new THREE.PMREMGenerator(renderer);
  let envRT = null, envKey = -9;
  function setEnv(ph) {
    ph = clamp(ph, 0, 2);
    if (Math.abs(ph - envKey) < 0.02) return; envKey = ph;
    const i = Math.min(1, Math.floor(ph)), t = ph - i, A = HDR[i], B = HDR[i + 1], n = IBL_W * IBL_H;
    for (let p = 0; p < n; p++) {
      envData[p * 4] = mix(A[p * 3], B[p * 3], t); envData[p * 4 + 1] = mix(A[p * 3 + 1], B[p * 3 + 1], t); envData[p * 4 + 2] = mix(A[p * 3 + 2], B[p * 3 + 2], t); envData[p * 4 + 3] = 1;
    }
    envTex.needsUpdate = true;
    if (envRT) envRT.dispose();
    envRT = pmrem.fromEquirectangular(envTex); scene.environment = envRT.texture; scene.environmentIntensity = 0.95;
  }
  const sun = new THREE.DirectionalLight(0xfff1dc, 3.4); scene.add(sun); scene.add(sun.target);
  sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024); sun.shadow.camera.left = -0.3; sun.shadow.camera.right = 0.3; sun.shadow.camera.top = 0.3; sun.shadow.camera.bottom = -0.3; sun.shadow.camera.near = 0.1; sun.shadow.camera.far = 4; sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.004; sun.shadow.radius = 3;
  const skyLight = { dir: new V(-0.55, 0.55, 0.62).normalize(), key: "" };

  /* ---------- кожа ---------- */
  function skinNormal() {
    const s = 512, cv = document.createElement("canvas"); cv.width = cv.height = s;
    const g = cv.getContext("2d"), hgt = new Float32Array(s * s);
    let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 5200; i++) { const x = rnd() * s, y = rnd() * s, r = 0.8 + rnd() * 1.6; for (let yy = -3; yy <= 3; yy++) for (let xx = -3; xx <= 3; xx++) { const d = Math.sqrt(xx * xx + yy * yy); if (d < r * 2) { const px = (Math.floor(x + xx) + s) % s, py = (Math.floor(y + yy) + s) % s; hgt[py * s + px] -= Math.exp(-d * d / (r * r)) * 0.9; } } }
    for (let i = 0; i < 160; i++) { let x = rnd() * s, y = rnd() * s, a = rnd() * 6.28, l = 20 + rnd() * 80; for (let k = 0; k < l; k++) { x += Math.cos(a) * 1.2; y += Math.sin(a) * 1.2; a += (rnd() - 0.5) * 0.25; const px = (Math.floor(x) + s) % s, py = (Math.floor(y) + s) % s; hgt[py * s + px] -= 0.7; hgt[((py + 1) % s) * s + px] -= 0.3; } }
    const img = g.createImageData(s, s);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      const gx = hgt[y * s + (x + 1) % s] - hgt[y * s + (x - 1 + s) % s], gy = hgt[((y + 1) % s) * s + x] - hgt[((y - 1 + s) % s) * s + x];
      const nx = -gx * 0.6, ny = -gy * 0.6, nz = 1, l = Math.sqrt(nx * nx + ny * ny + nz * nz), o = (y * s + x) * 4;
      img.data[o] = (nx / l * 0.5 + 0.5) * 255; img.data[o + 1] = (ny / l * 0.5 + 0.5) * 255; img.data[o + 2] = (nz / l * 0.5 + 0.5) * 255; img.data[o + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(6, 6); t.anisotropy = 4; return t;
  }
  const skin = new THREE.MeshPhysicalMaterial({
    color: 0xe0a07e, roughness: 0.50, metalness: 0, vertexColors: true,
    sheen: 1, sheenColor: new THREE.Color(1.0, 0.66, 0.55), sheenRoughness: 0.5,
    clearcoat: 0.16, clearcoatRoughness: 0.5, normalMap: skinNormal(), normalScale: new THREE.Vector2(0.5, 0.5), envMapIntensity: 1.0
  });
  const SK = { tip: [], tax: [], tdo: [], j: [], jax: [], jdo: [] };
  for (let i = 0; i < 5; i++) { SK.tip.push(new V()); SK.tax.push(new V(0, -1, 0)); SK.tdo.push(new V(1, 0, 0)); }
  for (let i = 0; i < 15; i++) { SK.j.push(new V(0, 9, 0)); SK.jax.push(new V(0, -1, 0)); SK.jdo.push(new V(1, 0, 0)); }
  skin.onBeforeCompile = (sh) => {
    sh.uniforms.uTip = { value: SK.tip }; sh.uniforms.uTAx = { value: SK.tax }; sh.uniforms.uTDo = { value: SK.tdo };
    sh.uniforms.uJ = { value: SK.j }; sh.uniforms.uJAx = { value: SK.jax }; sh.uniforms.uJDo = { value: SK.jdo };
    sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vMPos;")
      .replace("#include <skinning_vertex>", "#include <skinning_vertex>\nvMPos = transformed;");
    sh.fragmentShader = sh.fragmentShader.replace("#include <common>", `#include <common>
varying vec3 vMPos;
uniform vec3 uTip[5]; uniform vec3 uTAx[5]; uniform vec3 uTDo[5];
uniform vec3 uJ[15]; uniform vec3 uJAx[15]; uniform vec3 uJDo[15];
float h31(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float n3(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
  return mix(mix(mix(h31(i),h31(i+vec3(1,0,0)),f.x),mix(h31(i+vec3(0,1,0)),h31(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h31(i+vec3(0,0,1)),h31(i+vec3(1,0,1)),f.x),mix(h31(i+vec3(0,1,1)),h31(i+vec3(1,1,1)),f.x),f.y),f.z);}
float gNail=0.; float gLun=0.; float gCrease=0.; float gKnuckle=0.;`)
      .replace("#include <color_fragment>", `#include <color_fragment>
{
  float nail=0.,lun=0.;
  for(int i=0;i<5;i++){
    vec3 v=vMPos-uTip[i]; float al=dot(v,uTAx[i]); float dr=dot(v,uTDo[i]); float sw=length(v-uTAx[i]*al-uTDo[i]*dr);
    float wid=(i==0)?.0092:(i==4)?.0062:.0074; float len=.0128;
    float u=(al+len*.62)/(len*.5); float w=sw/wid;
    float d=pow(abs(u),3.2)+w*w*1.25;
    float m=smoothstep(1.,.82,d)*smoothstep(.0025,.0055,dr);
    nail=max(nail,m); lun=max(lun,m*smoothstep(-.55,-.9,u)*smoothstep(.9,.2,w));
  }
  gNail=nail; gLun=lun;
  float cr=0.,kn=0.;
  for(int i=0;i<12;i++){
    vec3 v=vMPos-uJ[i]; float a=dot(v,uJAx[i]); float dr=dot(v,uJDo[i]); float lat=length(v-uJAx[i]*a-uJDo[i]*dr);
    float dors=smoothstep(-.001,.005,dr)*smoothstep(.0125,.0085,lat);
    float band=exp(-a*a/(2.*.0026*.0026));
    float isMcp=(mod(float(i),3.)<.5)?1.:0.;
    cr+=(1.-isMcp)*dors*band*(.5+.5*cos(a*1900.+n3(vMPos*120.)*2.5));
    kn+=dors*exp(-a*a/(2.*.0065*.0065))*(.6+.4*isMcp);
  }
  gCrease=clamp(cr,0.,1.); gKnuckle=clamp(kn,0.,1.);
  float m1=n3(vMPos*260.),m2=n3(vMPos*70.+7.);
  diffuseColor.rgb*=vec3(.94+.10*m1,.95+.07*m1,.96+.05*m1)*(.96+.08*m2);
  diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(1.05,.86,.84),gKnuckle*.55);
  diffuseColor.rgb*=1.-.16*gCrease;
  vec3 nailC=mix(vec3(.93,.60,.56),vec3(.96,.80,.76),gLun*.7);
  diffuseColor.rgb=mix(diffuseColor.rgb,nailC,gNail*.9);
}`)
      .replace("#include <roughnessmap_fragment>", "#include <roughnessmap_fragment>\nroughnessFactor=mix(roughnessFactor,.16,gNail);roughnessFactor=mix(roughnessFactor,roughnessFactor+.12,gCrease);")
      .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
{ float fr=pow(1.-clamp(dot(normalize(vNormal),normalize(vViewPosition)),0.,1.),3.);
  totalEmissiveRadiance+=vec3(.30,.07,.04)*fr*(1.-gNail)*.55; }`);
  };
  const cloth = new THREE.MeshPhysicalMaterial({ color: 0xf5f1ea, roughness: 0.82, sheen: 1, sheenColor: new THREE.Color(1, 0.96, 0.9), sheenRoughness: 0.5, side: THREE.DoubleSide });
  const steelMat = new THREE.MeshStandardMaterial({ color: 0xb8bec9, metalness: 1, roughness: 0.3, envMapIntensity: 1.4 });

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
      if (o.isBone) { S.bones[o.name] = o; S.rest[o.name] = { p: o.position.clone(), q: o.quaternion.clone(), qi: o.quaternion.clone().invert() }; }
      if (o.isSkinnedMesh) { S.mesh = o; o.material = skin; o.frustumCulled = false; o.castShadow = true; o.receiveShadow = true; }
    });
    let g0 = S.mesh.geometry; g0 = loopSubdivide(loopSubdivide(g0)); S.mesh.geometry = g0;
    const pos = g0.attributes.position, col = new Float32Array(pos.count * 3), tips = [];
    Object.keys(CH).forEach((k) => tips.push(S.rest[CH[k][CH[k].length - 1]].p));
    const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
    for (let i = 0; i < pos.count; i++) {
      const v = new V(pos.getX(i), pos.getY(i), pos.getZ(i)); let m = 1e9; tips.forEach((t) => { m = Math.min(m, v.distanceTo(t)); });
      const k = smooth(0.030, 0.0, m);
      col[i * 3] = 1; col[i * 3 + 1] = 1 - 0.10 * k; col[i * 3 + 2] = 1 - 0.13 * k;
    }
    S.mesh.geometry.setAttribute("color", new THREE.BufferAttribute(col, 3));
    buildExtras(); S.ready = true; if (opts.onReady) opts.onReady();
  });

  function buildExtras() {
    const geo = new THREE.CylinderGeometry(1.5, 1, 0.42, 64, 30, true);
    geo.translate(0, 0.21, 0);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i), t = y / 0.42, ang = Math.atan2(pos.getZ(i), pos.getX(i));
      const fold = 1 + 0.045 * Math.sin(ang * 5 + t * 6) * Math.min(1, t * 3) + 0.02 * Math.sin(ang * 9 - t * 11);
      const f = (1 + 0.55 * t) * fold;
      pos.setX(i, pos.getX(i) * 0.0262 * f); pos.setZ(i, pos.getZ(i) * 0.0345 * f);
    }
    geo.computeVertexNormals();
    const arm = new THREE.Mesh(geo, cloth); arm.castShadow = true; arm.receiveShadow = true; arm.position.set(0.0372, 0.0475, 0.0122);
    root.add(arm); S.arm = arm;
    const cuffGeo = new THREE.CylinderGeometry(1.06, 1.0, 0.016, 64, 1, false);
    const cp2 = cuffGeo.attributes.position;
    for (let i = 0; i < cp2.count; i++) { cp2.setX(i, cp2.getX(i) * 0.0276); cp2.setZ(i, cp2.getZ(i) * 0.0364); }
    cuffGeo.computeVertexNormals();
    const cuff = new THREE.Mesh(cuffGeo, cloth); cuff.position.set(0.0372, 0.0515, 0.0122); cuff.castShadow = true; root.add(cuff);
    for (let i = 0; i < 8; i++) {
      const link = new THREE.Mesh(new THREE.TorusGeometry(0.0125, 0.0032, 14, 32), steelMat); link.castShadow = true;
      root.add(link); S.links.push({ m: link, i, broken: false, v: new V(), w: new V() });
    }
  }

  /* ---------- скелетная анимация (кости плоские — считаем цепочки сами) ---------- */
  const tmpS = new V(), A1 = new M4(), A2 = new M4(), A3 = new M4(), Dm = new M4(), Mm = new M4(), cv = new V(), av = new V(), one = new V(1, 1, 1);
  function rotAbout(D, c, ax, ang) {   // D = T(c) · R(ax, ang) · T(-c) · D  — без лишних выделений памяти
    A1.makeTranslation(c.x, c.y, c.z); A2.makeRotationAxis(ax, ang); A3.makeTranslation(-c.x, -c.y, -c.z);
    A1.multiply(A2).multiply(A3); D.premultiply(A1);
  }
  function applyChain(names, angles, axis, spreadAngle, spreadAxis, D0) {
    Dm.copy(D0);
    if (spreadAngle) { cv.copy(S.rest[names[1]].p).applyMatrix4(D0); rotAbout(Dm, cv, spreadAxis, spreadAngle); }
    for (let j = 0; j < names.length; j++) {
      const r = S.rest[names[j]];
      if (j >= 1 && j <= angles.length && angles[j - 1] !== 0) {
        cv.copy(r.p).applyMatrix4(Dm); av.copy(axis).transformDirection(Dm); rotAbout(Dm, cv, av, angles[j - 1]);
      }
      Mm.compose(r.p, r.q, one); Mm.premultiply(Dm);
      const b = S.bones[names[j]]; Mm.decompose(b.position, b.quaternion, tmpS);
    }
  }
  const AXIS_FLEX = new V(0, 0, 1), AXIS_PALM = new V(1, 0, 0), THUMB_AX = new V(0, 0.6, 0.8).normalize();
  const qd = new Q(), qBase = new Q(), qExtra = new Q(), eul = new THREE.Euler();
  function dorsalOf(name, out) { qd.copy(S.bones[name].quaternion).multiply(S.rest[name].qi); return out.set(1, 0, 0).applyQuaternion(qd); }
  function updateSkinUniforms() {
    if (!S.ready) return;
    ORDER.forEach((k, fi) => {
      const n = CH[k];
      for (let j = 0; j < 3; j++) {
        const i = fi * 3 + j, b = S.bones[n[1 + j]], nb = S.bones[n[2 + j]];
        SK.j[i].copy(b.position); SK.jax[i].copy(nb.position).sub(b.position).normalize(); dorsalOf(n[1 + j], SK.jdo[i]);
      }
    });
    ["thumb", "index", "middle", "ring", "pinky"].forEach((k, idx) => {
      const n = CH[k], dist = S.bones[n[n.length - 2]], tip = S.bones[n[n.length - 1]];
      SK.tip[idx].copy(tip.position); SK.tax[idx].copy(tip.position).sub(dist.position).normalize(); dorsalOf(n[n.length - 2], SK.tdo[idx]);
      if (k === "thumb") SK.tdo[idx].applyAxisAngle(SK.tax[idx], -0.9);
    });
  }

  /* ---------- состояние, пружины, сценарий ---------- */
  const fit = { s: 1, x: 0, y: 0 };
  const T_BREAK = 1.75;
  const st = { t: 0, mx: 0, my: 0, broke: false, snapped: false, flare: 0 };
  const sp = {
    curl: [0, 1, 2, 3, 4].map(() => new Spring(1, 110, 0.5)),
    spread: new Spring(0.3, 60, 0.55), wrist: new Spring(-0.16, 22, 0.6),
    rx: new Spring(0.32, 9, 0.85), ry: new Spring(0.30, 9, 0.85), rz: new Spring(0.12, 9, 0.85),
    px: new Spring(0.09, 7, 0.9), py: new Spring(-0.16, 7, 0.9), scale: new Spring(0.78, 6, 0.95),
    kx: new Spring(0, 45, 0.45), ky: new Spring(0, 45, 0.45), lookX: new Spring(0, 8, 0.9), lookY: new Spring(0, 8, 0.9)
  };
  const P = { openCurl: [0.30, 0.34, 0.20], fist: [1.25, 1.55, 1.0], per: [[0.0, -0.06, -0.04], [0.06, 0.02, -0.02], [0.14, 0.10, 0.02], [0.24, 0.16, 0.06]] };

  function pose(curl, spread, wrist) {
    if (!S.ready) return;
    const D0 = new M4(), wp = S.rest["wrist"].p;
    D0.makeTranslation(wp.x, wp.y, wp.z).multiply(new M4().makeRotationAxis(new V(0, 0, 1), wrist)).multiply(new M4().makeTranslation(-wp.x, -wp.y, -wp.z));
    const wb = S.bones["wrist"], wm = new M4().compose(S.rest["wrist"].p, S.rest["wrist"].q, new V(1, 1, 1)).premultiply(D0); wm.decompose(wb.position, wb.quaternion, tmpS);
    ORDER.forEach((k, idx) => {
      const c = curl[idx], pf = P.per[idx], op = clamp(1 - c, -0.3, 1);
      const a1 = mix(P.openCurl[0], P.fist[0], c) + pf[0] * op, a2 = mix(P.openCurl[1], P.fist[1], c) + pf[1] * op, a3 = mix(P.openCurl[2], P.fist[2], c) * 0.85 + pf[2] * op + 0.12 * (a2 - 0.3);
      const spr = (idx - 1.5) * 0.11 * spread * (idx === 3 ? 1.15 : 1);
      applyChain(CH[k], [a1, a2, a3], AXIS_FLEX, spr, AXIS_PALM, D0);
    });
    const tc = curl[4];
    applyChain(CH.thumb, [mix(0.05, 0.9, tc), mix(0.02, 0.8, tc)], THUMB_AX, -clamp(spread - 0.3, 0, 1.4) * 0.6, new V(0, 0, 1), D0);
  }

  function layout() {
    const w = canvas.clientWidth || canvas.width, h = canvas.clientHeight || canvas.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    renderer.setPixelRatio(dpr); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    const a = w / h; fit.s = a < 1.25 ? 1.85 : 1; fit.x = a < 1.25 ? -0.02 : 0; fit.y = a < 1.25 ? 0.03 : 0;
  }

  function setSky(o) {
    if (!o) return;
    const key = o.ph.toFixed(2) + o.sunDir.map((x) => x.toFixed(2)).join(",");
    if (key === skyLight.key) return; skyLight.key = key;
    skyLight.dir.set(o.sunDir[0], o.sunDir[1], o.sunDir[2]).normalize();
    sun.color.setRGB(o.sun[0], o.sun[1], o.sun[2]); sun.position.copy(skyLight.dir).multiplyScalar(2);
    sun.intensity = mix(3.4, 2.6, clamp(o.ph, 0, 1));
    setEnv(o.ph);
  }

  function frame(dt) {
    st.t += dt; const t = st.t;
    const broken = t >= T_BREAK, since = t - T_BREAK, amp = clamp((t - 0.5) / 1.2, 0, 1) * (broken ? 0 : 1);
    const nz = (i, s) => wob(t * s + i * 3.1, 1.7, 2.9, 5.3);
    for (let i = 0; i < 5; i++) {
      const delay = i === 4 ? 0.14 : 0.03 * (3 - i), go = broken && since > delay;
      const idle = 0.10 + 0.06 * nz(i, 0.55) + (i === 4 ? 0.05 : 0);
      sp.curl[i].t = go ? idle : 1.0 + amp * 0.012 * Math.sin(t * 46 + i * 1.3) + amp * 0.02 * nz(i, 3);
      sp.curl[i].k = go ? 95 - i * 6 : 200; sp.curl[i].d = go ? 0.5 + i * 0.03 : 0.9;
    }
    sp.spread.t = broken && since > 0.05 ? 1.0 + 0.10 * nz(9, 0.45) : 0.3;
    sp.wrist.t = broken && since > 0.05 ? 0.16 + 0.05 * nz(7, 0.4) : -0.16;
    const rise = broken && since > 0.25 ? 1 : 0;
    sp.rx.t = (rise ? 0.10 : 0.32) + 0.03 * nz(1, 0.3) * rise; sp.ry.t = (rise ? -0.25 : 0.30) + 0.04 * nz(2, 0.27) * rise; sp.rz.t = (rise ? 0.52 : 0.12) + 0.03 * nz(4, 0.23) * rise;
    sp.px.t = rise ? 0.075 : 0.09; sp.py.t = (rise ? -0.10 : -0.16) + 0.004 * nz(5, 0.5) * rise; sp.scale.t = rise ? 0.86 : 0.78;
    sp.lookX.t = st.mx; sp.lookY.t = st.my;
    if (broken && !st.snapped) { st.snapped = true; sp.kx.v = -0.35; sp.ky.v = 0.30; }
    for (const k in sp) { const s = sp[k]; const arr = Array.isArray(s) ? s : [s]; arr.forEach((q) => { if (reduce) q.snap(q.t); else q.step(dt); }); }

    pose(sp.curl.map((s) => s.x), sp.spread.x, sp.wrist.x);
    updateSkinUniforms();

    const trem = amp * 0.0012;
    eul.set(0, Math.PI / 2, Math.PI, "XYZ"); qBase.setFromEuler(eul);
    eul.set(sp.rx.x + sp.lookY.x * 0.10, sp.ry.x + sp.lookX.x * 0.16, sp.rz.x - sp.lookX.x * 0.08, "XYZ"); qExtra.setFromEuler(eul);
    root.quaternion.copy(qExtra).multiply(qBase);
    root.scale.setScalar(sp.scale.x * fit.s);
    root.position.set(sp.px.x + sp.kx.x + trem * Math.sin(t * 53) + sp.lookX.x * 0.02 + fit.x, sp.py.x + sp.ky.x + trem * Math.sin(t * 61 + 1) - sp.lookY.x * 0.01 + fit.y, 0);
    if (P.rot) { eul.set(P.rot[0], P.rot[1], P.rot[2], 'XYZ'); root.quaternion.setFromEuler(eul); root.position.set(P.rot[3] || 0, P.rot[4] || 0, 0); }

    if (S.ready) {
      S.links.forEach((L) => {
        if (!st.broke) {
          const a = L.i / S.links.length * Math.PI * 2;
          L.m.position.set(0.0372 + Math.cos(a) * 0.0312, 0.0475 + 0.030 + (L.i % 2 ? 0.003 : -0.003), 0.0122 + Math.sin(a) * 0.0398);
          L.m.rotation.order = "YXZ"; L.m.rotation.set(0, -a + Math.PI / 2, L.i % 2 ? Math.PI / 2 : 0);
          L.m.visible = true;
        }
      });
      if (!st.broke && broken) {
        st.broke = true; st.flare = 1;
        root.updateMatrixWorld(true);
        const c = root.localToWorld(new V(0.0372, 0.0475 + 0.03, 0.0122));
        S.links.forEach((L) => {
          L.broken = true;
          const wp = new V(); L.m.getWorldPosition(wp);
          scene.attach(L.m);
          L.v.copy(wp).sub(c).normalize().multiplyScalar(0.10 + Math.random() * 0.08); L.v.y += 0.05 + Math.random() * 0.05;
          L.w.set((Math.random() - 0.5) * 7, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 7);
        });
        if (reduce) S.links.forEach((L) => { L.m.visible = false; });
        if (opts.onBreak) opts.onBreak();
      }
      if (st.broke) S.links.forEach((L) => {
        if (!L.m.visible) return;
        L.v.y -= 0.9 * dt; L.m.position.addScaledVector(L.v, dt);
        L.w.multiplyScalar(Math.exp(-dt * 0.5));
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
  setEnv(0);
  const api = {
    S, st, P, root, camera, scene, layout, setSky, render, sp,
    frame: (t) => { st.t = t; frame(0); render(); },
    reset: () => {
      st.t = 0; st.broke = false; st.snapped = false;
      sp.curl.forEach((q) => q.snap(1)); sp.spread.snap(0.3); sp.wrist.snap(-0.16); sp.rx.snap(0.32); sp.ry.snap(0.30); sp.rz.snap(0.12);
      sp.px.snap(0.09); sp.py.snap(-0.16); sp.scale.snap(0.78); sp.kx.snap(0); sp.ky.snap(0);
      S.links.forEach((L) => { L.broken = false; L.m.visible = true; root.add(L.m); });
    },
    step: (dt) => { frame(dt); render(); },
    start: () => { if (loop.on) return; loop.on = true; loop.last = performance.now(); requestAnimationFrame(loop); },
    stop: () => { loop.on = false; },
    pointer: (x, y) => { st.mx = x; st.my = y; }
  };
  return api;
}
