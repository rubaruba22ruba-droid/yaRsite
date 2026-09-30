/* YarVpn — живое небо (WebGL): объёмные облака, солнце, смена времени суток от прокрутки страницы.
   Один полноэкранный слой позади страницы; картинок нет — всё считает шейдер, поэтому файл маленький, а небо не «замирает».
   Управление снаружи: window.YVSky.phase (0 день → 1 золотой час → 2 закат → 3 ночь), .sun [x,y] (0..1), .flare (вспышка), .scroll.
   Если WebGL нет — остаётся CSS-градиент (класс .no-gl на <html>). */
(function () {
  "use strict";
  var cv = document.getElementById("sky");
  if (!cv) return;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var gl = null;
  try { gl = cv.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" }); } catch (e) { gl = null; }
  if (!gl) { document.documentElement.classList.add("no-gl"); return; }

  var VS = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
  var FS = [
    "precision highp float;",
    "uniform vec2 uRes;uniform float uT;uniform float uPhase;uniform vec2 uSun;uniform float uFlare;uniform float uScroll;uniform float uLand;uniform vec2 uMouse;",
    "float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}",
    "float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);",
    " return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}",
    "const mat2 M=mat2(1.62,1.18,-1.18,1.62);",
    "float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*noise(p);p=M*p;a*=.5;}return s;}",
    "float fbm3(vec2 p){float a=.5,s=0.;for(int i=0;i<3;i++){s+=a*noise(p);p=M*p;a*=.5;}return s;}",
    // облачная плотность: домен-варп даёт «кучевые» валы вместо ваты
    "float dens(vec2 p,float cover,float t){",
    " vec2 w=vec2(fbm3(p*.45+vec2(3.1,t*.02)),fbm3(p*.45+vec2(7.7,-t*.015)));",
    " float d=fbm(p+w*1.9);",
    " return smoothstep(cover,cover+.36,d);}",
    // палитры: 0 день, 1 золотой час, 2 закат, 3 ночь: верх, середина, горизонт, свет облака, тень облака, солнце
    "vec3 K(int k,int i){",
    " if(k==0){ if(i==0)return vec3(.05,.24,.62); if(i==1)return vec3(.24,.55,.93); if(i==2)return vec3(.70,.86,.99); if(i==3)return vec3(1.,.99,.97); if(i==4)return vec3(.60,.70,.90); return vec3(1.,.95,.82);}",
    " if(k==1){ if(i==0)return vec3(.10,.30,.52); if(i==1)return vec3(.42,.58,.74); if(i==2)return vec3(1.,.70,.34); if(i==3)return vec3(1.,.80,.50); if(i==4)return vec3(.74,.48,.42); return vec3(1.,.82,.46);}",
    " if(k==2){ if(i==0)return vec3(.10,.10,.34); if(i==1)return vec3(.50,.26,.50); if(i==2)return vec3(1.,.48,.38); if(i==3)return vec3(1.,.64,.54); if(i==4)return vec3(.26,.16,.36); return vec3(1.,.62,.42);}",
    " if(i==0)return vec3(.008,.016,.06); if(i==1)return vec3(.04,.07,.20); if(i==2)return vec3(.14,.18,.38); if(i==3)return vec3(.50,.58,.80); if(i==4)return vec3(.05,.07,.17); return vec3(.78,.84,1.);}",
    "vec3 pal(float ph,int i){int a=int(floor(ph));int b=a+1;if(b>3)b=3;if(a>3)a=3;float f=smoothstep(0.,1.,fract(ph));if(ph>=3.)f=0.;return mix(K(a,i),K(b,i),f);}",
    // земля: цвета травы по времени суток (свет, тень, дымка)
    "vec3 T(int k,int i){",
    " if(k==0){ if(i==0)return vec3(.66,.74,.30); if(i==1)return vec3(.20,.34,.16); return vec3(.66,.80,.95);}",
    " if(k==1){ if(i==0)return vec3(1.,.70,.28); if(i==1)return vec3(.42,.20,.10); return vec3(1.,.72,.42);}",
    " if(k==2){ if(i==0)return vec3(.94,.46,.42); if(i==1)return vec3(.20,.12,.28); return vec3(.90,.46,.46);}",
    " if(i==0)return vec3(.16,.22,.42); if(i==1)return vec3(.02,.03,.09); return vec3(.08,.11,.26);}",
    "vec3 tpal(float ph,int i){int a=int(floor(ph));int b=a+1;if(b>3)b=3;if(a>3)a=3;float f=smoothstep(0.,1.,fract(ph));if(ph>=3.)f=0.;return mix(T(a,i),T(b,i),f);}",
    "float fbm4(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*noise(p);p=M*p;a*=.5;}return s;}",
    "float H(vec2 p){float n=fbm3(p*.05);float r=1.-abs(2.*noise(p*.085+7.)-1.);return 15.*n*n+4.5*r*n;}",
    "void main(){",
    " vec2 fc=gl_FragCoord.xy;vec2 uv=fc/uRes;float asp=uRes.x/uRes.y;",
    " vec3 top=pal(uPhase,0),mid=pal(uPhase,1),hor=pal(uPhase,2),cl=pal(uPhase,3),cs=pal(uPhase,4),sc=pal(uPhase,5);",
    " float y=uv.y;",
    " vec3 sky=mix(hor,mid,smoothstep(0.,.5,y));sky=mix(sky,top,smoothstep(.28,1.,y));",
    " vec2 sd=(uv-uSun)*vec2(asp,1.);float sr=length(sd);",
    " float glow=exp(-sr*2.6)*.50+exp(-sr*9.)*.55+exp(-sr*34.)*.9;",
    " sky+=sc*glow*(1.+uFlare*2.);",
    // два облачных слоя с перспективой: дальний медленный и ближний крупный; прокрутка «летит» сквозь облака
    " vec3 col=sky;",
    " for(int L=0;L<2;L++){",
    "  float fl=float(L);",
    "  float sp=mix(.8,1.25,fl);float cover=mix(.40,.36,fl);",
    "  float h=max(y+mix(.30,.22,fl),.10);",
    "  vec2 q=vec2((uv.x-.5)*asp*(1.-.15*fl),.85)/h;",
    "  q=q*sp*2.1+vec2(uT*mix(.014,.028,fl),uT*.006+uScroll*mix(.30,.62,fl));",
    "  float d0=dens(q,cover,uT);",
    "  vec2 ld=normalize(vec2(uSun.x-uv.x,uSun.y-uv.y)*vec2(asp,1.)+.0001)*vec2(1.,-1.);",
    "  float d1=dens(q+ld*.10,cover,uT),d2=dens(q+ld*.24,cover,uT);",
    "  float shade=exp(-(d1*1.5+d2*1.1));",
    "  float lit=mix(.12,1.,shade);",
    "  lit=mix(lit,1.,exp(-sr*2.4)*.55);",
    "  vec3 cc=mix(cs,cl,lit);",
    "  float edge=d0*(1.-d0);",
    "  cc+=sc*edge*exp(-sr*3.2)*1.9;",
    "  cc+=sc*exp(-sr*5.)*.50*d0;",
    "  float fade=smoothstep(.0,.20,y+.02);",
    "  float a=d0*mix(.85,.96,fl)*fade;",
    "  col=mix(col,cc,a);",
    " }",
    // земля: настоящий рельеф (лучевой поиск по карте высот); камера медленно летит над холмами, ветер гонит волны по траве
    " vec3 tl=tpal(uPhase,0),ts=tpal(uPhase,1),tf=tpal(uPhase,2);",
    " float h0=.40-(1.-uLand)*.36;",
    " if(uv.y<h0+.26&&uLand>.02){",
    "  vec3 rd=normalize(vec3((uv.x-.5)*asp*1.1,(uv.y-h0)*1.1,1.));",
    "  vec3 ro=vec3(uMouse.x*2.,0.,uT*1.6+uScroll*26.);",
    "  ro.y=H(ro.xz)+4.2;",
    "  float t=2.,hit=0.;",
    "  float tp=2.;for(int i=0;i<48;i++){vec3 pp=ro+rd*t;float hh=pp.y-H(pp.xz);if(hh<.006*t){hit=1.;break;}tp=t;t+=max(hh*.62,.028*t);if(t>150.)break;}",
    "  if(hit>.5){float lo=tp,hi=t;for(int j=0;j<5;j++){float m=(lo+hi)*.5;vec3 pm=ro+rd*m;if(pm.y-H(pm.xz)<0.)hi=m;else lo=m;}t=hi;}",
    "  if(hit>.5){",
    "   vec3 pp=ro+rd*t;float e=.35;",
    "   vec3 n=normalize(vec3(H(pp.xz-vec2(e,0.))-H(pp.xz+vec2(e,0.)),2.*e,H(pp.xz-vec2(0.,e))-H(pp.xz+vec2(0.,e))));",
    "   vec3 sdir=normalize(vec3((uSun.x-.5)*asp*1.1,(uSun.y-h0)*1.1+.25,1.));",
    "   float dif=clamp(dot(n,sdir)*1.25+.12,0.,1.);",
    "   float wave=noise(pp.xz*.9+vec2(uT*.8,uT*.35));float wv=noise(pp.xz*.33-vec2(uT*.5,0.));",
    "   float gr=noise(pp.xz*3.2)*.5+noise(pp.xz*9.)*.5;",
    "   vec3 gc=mix(ts,tl,clamp(dif+.22*(wave-.5)+.15*(wv-.5),0.,1.));",
    "   gc*=.84+.3*gr;",
    "   gc=mix(gc,ts*.75,smoothstep(.55,1.,n.y)*0.0+ (1.-n.y)*.6);",
    "   float fog=1.-exp(-t*.014);fog=pow(fog,1.15);",
    "   vec3 fc=mix(tf,hor,.5);",
    "   gc=mix(gc,fc,fog);",
    "   gc+=sc*pow(clamp(dot(normalize(rd),sdir),0.,1.),8.)*.28*fog;",
    "   float edge=smoothstep(0.,.012,t);",
    "   col=gc;",
    "  }",
    " }",
    " float ns=smoothstep(2.2,3.,uPhase);",
    " if(ns>0.){vec2 g=floor(fc/2.4);float r=hash(g);float st=step(.9975,r)*ns*smoothstep(.22,.7,y);col+=vec3(.8,.85,1.)*st*(.55+.45*sin(uT*2.+r*40.));}",
    " col+=vec3(1.,.96,.88)*exp(-sr*2.0)*uFlare*.9;",
    " vec2 vq=uv-.5;col*=1.-dot(vq,vq)*.5;",
    " col=pow(col,vec3(.96));",
    " col+=(hash(fc+uT)-.5)*.02;",
    " gl_FragColor=vec4(col,1.);",
    "}"
  ].join("\n");

  function sh(t, s) { var o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); if (!gl.getShaderParameter(o, gl.COMPILE_STATUS)) { if (window.console) console.warn(gl.getShaderInfoLog(o)); return null; } return o; }
  var vs = sh(gl.VERTEX_SHADER, VS), fs = sh(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) { document.documentElement.classList.add("no-gl"); return; }
  var pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { document.documentElement.classList.add("no-gl"); return; }
  gl.useProgram(pr);
  var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  var loc = gl.getAttribLocation(pr, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  var U = {}; ["uRes", "uT", "uPhase", "uSun", "uFlare", "uScroll", "uLand", "uMouse"].forEach(function (n) { U[n] = gl.getUniformLocation(pr, n); });

  var sky = window.YVSky = { phase: 0, sun: [0.3, 0.62], flare: 0, scroll: 0, land: 1, mouse: [0, 0], t: 12, draw: null };
  var scale = 0.5, running = true, last = 0, W = 0, H = 0, frameGap = 0;
  var small = Math.min(innerWidth, innerHeight) < 700;
  function size() {
    scale = small ? 0.40 : 0.5;
    W = Math.max(2, Math.round(innerWidth * scale)); H = Math.max(2, Math.round(innerHeight * scale));
    cv.width = W; cv.height = H; gl.viewport(0, 0, W, H);
  }
  function draw() {
    gl.uniform2f(U.uRes, W, H); gl.uniform1f(U.uT, sky.t); gl.uniform1f(U.uPhase, sky.phase);
    gl.uniform2f(U.uSun, sky.sun[0], sky.sun[1]); gl.uniform1f(U.uFlare, sky.flare); gl.uniform1f(U.uScroll, sky.scroll); gl.uniform1f(U.uLand, sky.land); gl.uniform2f(U.uMouse, sky.mouse[0], sky.mouse[1]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  sky.draw = draw;
  var slow = 0, fast = 0, frames = 0;
  function adapt(dtms) {
    // если кадр тяжёлый — небо само уменьшает разрешение (картинка остаётся плавной, просто чуть мягче)
    frames++; if (frames < 20) return;
    if (dtms > 34) { slow++; fast = 0; } else if (dtms < 20) { fast++; slow = 0; } else { slow = 0; fast = 0; }
    if (slow > 12 && scale > 0.26) { scale *= 0.82; slow = 0; resizeTo(); }
    else if (fast > 240 && scale < (small ? 0.42 : 0.55)) { scale *= 1.1; fast = 0; resizeTo(); }
  }
  function resizeTo() { W = Math.max(2, Math.round(innerWidth * scale)); H = Math.max(2, Math.round(innerHeight * scale)); cv.width = W; cv.height = H; gl.viewport(0, 0, W, H); }
  function loop(ts) {
    if (!running) return;
    var dt = Math.min((ts - last) / 1000, 0.1);
    if (dt >= frameGap) { adapt(dt * 1000); last = ts; sky.t += dt; draw(); }
    requestAnimationFrame(loop);
  }
  frameGap = small ? 1 / 30 : 1 / 45;
  window.addEventListener("resize", function () { size(); draw(); });
  document.addEventListener("visibilitychange", function () { running = !document.hidden && !reduce; if (running) { last = performance.now(); requestAnimationFrame(loop); } });
  size(); draw();
  document.documentElement.classList.add("has-gl");
  if (!reduce) { last = performance.now(); requestAnimationFrame(loop); }
})();
