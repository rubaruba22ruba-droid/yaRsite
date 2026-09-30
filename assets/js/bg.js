/* YarVpn — живой фон: шёлковые оранжевые волны, плывущие световые пятна и искры.
   Один canvas на весь экран, отрисовка ставится на паузу, когда вкладка скрыта; при reduce-motion рисуется один кадр. */
(function () {
  "use strict";
  var cv = document.getElementById("bg");
  if (!cv || !cv.getContext) return;
  var cx = cv.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var W = 0, H = 0, dpr = 1, running = false, raf = 0, t0 = performance.now(), scrollY = 0;
  var LINES = 26, sparks = [];
  var TAU = Math.PI * 2;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.min(46, Math.max(18, W * H / 26000)));
    sparks = [];
    for (var i = 0; i < n; i++) sparks.push(spark(true));
    if (!running) draw(performance.now());
  }
  function spark(init) {
    return { x: Math.random() * W, y: init ? Math.random() * H : H + 10, r: .6 + Math.random() * 1.7, v: 6 + Math.random() * 18, ph: Math.random() * TAU, dx: (Math.random() - .5) * 8 };
  }

  function orb(x, y, r, a) {
    var g = cx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(255,90,0," + a + ")");
    g.addColorStop(.45, "rgba(255,70,0," + (a * .35) + ")");
    g.addColorStop(1, "rgba(255,60,0,0)");
    cx.fillStyle = g; cx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  function draw(now) {
    var t = (now - t0) / 1000;
    var par = scrollY * .18;
    cx.clearRect(0, 0, W, H);
    cx.globalCompositeOperation = "lighter";

    /* световые пятна */
    var R = Math.max(W, H);
    orb(W * (.78 + .06 * Math.sin(t * .23)), H * (.28 + .05 * Math.cos(t * .19)) - par * .4, R * .55, .30);
    orb(W * (.12 + .08 * Math.cos(t * .17)), H * (.78 + .05 * Math.sin(t * .21)) - par * .2, R * .5, .2);
    orb(W * (.5 + .12 * Math.sin(t * .13 + 1)), H * (.55 + .08 * Math.cos(t * .15)), R * .36, .1);

    /* волны-ленты */
    cx.lineWidth = 1;
    var step = W < 600 ? 14 : 10;
    for (var i = 0; i < LINES; i++) {
      var k = i / (LINES - 1);
      var base = H * (.3 + .62 * k) - par * (.4 + k * .5);
      var amp = (34 + 70 * Math.sin(k * Math.PI)) * (W < 700 ? .55 : 1);
      var f1 = 1.4 + k * .9, f2 = 2.6 - k * .7;
      var a = (.12 + .42 * Math.pow(Math.sin(k * Math.PI), 1.4)) * (W < 700 ? .7 : 1);
      cx.strokeStyle = "rgba(255," + Math.round(70 + 60 * k) + "," + Math.round(12 * k) + "," + a.toFixed(3) + ")";
      cx.beginPath();
      for (var x = -10; x <= W + step; x += step) {
        var u = x / W;
        var y = base
          + Math.sin(u * TAU * f1 * .55 + t * .42 + k * 2.6) * amp
          + Math.sin(u * TAU * f2 * .6 - t * .3 + k * 1.3) * amp * .42
          + Math.sin(u * TAU * 3.1 + t * .75 + i) * 5;
        if (x <= -10) cx.moveTo(x, y); else cx.lineTo(x, y);
      }
      cx.stroke();
    }

    /* искры */
    for (var j = 0; j < sparks.length; j++) {
      var s = sparks[j];
      s.y -= s.v * (1 / 60); s.x += s.dx * (1 / 60);
      if (s.y < -10) { sparks[j] = s = spark(false); }
      var al = .25 + .55 * (.5 + .5 * Math.sin(t * 1.6 + s.ph));
      cx.fillStyle = "rgba(255,140,60," + (al * .65).toFixed(3) + ")";
      cx.beginPath(); cx.arc(s.x, s.y - par * .3, s.r, 0, TAU); cx.fill();
    }
    cx.globalCompositeOperation = "source-over";
  }

  function loop(now) { if (!running) return; draw(now); raf = requestAnimationFrame(loop); }
  function start() { if (running || reduce) return; running = true; raf = requestAnimationFrame(loop); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  window.addEventListener("resize", resize);
  window.addEventListener("scroll", function () { scrollY = window.pageYOffset; }, { passive: true });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
  resize(); draw(performance.now()); start();
})();
