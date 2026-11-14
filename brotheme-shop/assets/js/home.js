/* home.js — formas y collage de la portada del home.
   Las formas (blob, ola) y las plantas del collage cambian en cada carga.
   La ruta de las imágenes llega desde functions.php en broteTheme.img. */
    (function () {
      var rnd = function (a, b) { return a + Math.random() * (b - a); };
      var f = function (n) { return Math.round(n * 10) / 10; };
      // Curva suave que pasa por los puntos (Catmull-Rom convertida a bezier)
      function curve(pts, closed) {
        var n = pts.length, d = '';
        for (var i = 0; i < (closed ? n : n - 1); i++) {
          var p0 = pts[closed ? (i - 1 + n) % n : Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[closed ? (i + 2) % n : Math.min(i + 2, n - 1)];
          d += 'C' + f(p1[0] + (p2[0] - p0[0]) / 6) + ' ' + f(p1[1] + (p2[1] - p0[1]) / 6) + ' ' + f(p2[0] - (p3[0] - p1[0]) / 6) + ' ' + f(p2[1] - (p3[1] - p1[1]) / 6) + ' ' + f(p2[0]) + ' ' + f(p2[1]);
        }
        return d;
      }
      function mask(w, h, path) {
        return "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 " + w + ' ' + h + "' preserveAspectRatio='none'%3E%3Cpath d='" + path + "'/%3E%3C/svg%3E\")";
      }
      function setMask(el, value) { el.style.webkitMaskImage = value; el.style.maskImage = value; }
      // Blob: radio base redondo + 4 ondulaciones suaves con fase y fuerza al azar (siempre redondeado, nunca puntiagudo)
      function blob() {
        document.querySelector('.blob-lime').classList.toggle('right', Math.random() < 0.5); // el blob lima asoma arriba, a la izquierda o a la derecha al azar
        ['.blob-lime', '.blob-mint'].forEach(function (sel) {
          var el = document.querySelector(sel), N = 36, pts = [], h = [];
          if (!el) return;
          for (var k = 2; k <= 5; k++) h.push([k, rnd(0.03, 0.13 - k * 0.01), rnd(0, Math.PI * 2)]);
          for (var i = 0; i < N; i++) {
            var a = i / N * Math.PI * 2, r = 0.8;
            h.forEach(function (c) { r += c[1] * Math.cos(c[0] * a + c[2]); });
            r = Math.max(0.55, Math.min(1, r));
            pts.push([200 + Math.cos(a) * 190 * r, 210 + Math.sin(a) * 200 * r]);
          }
          setMask(el, mask(400, 420, 'M' + f(pts[0][0]) + ' ' + f(pts[0][1]) + curve(pts, true) + 'Z'));
        });
      }
      // Base blanca del hero: una ola blanca que sube hacia la derecha por detrás de los blobs y se une con la sección de abajo (siempre sinuosa y distinta)
      function cut() {
        var el = document.querySelector('.hero-white'), yL = rnd(335, 380), yR = rnd(70, 120), amp = rnd(22, 40), freq = rnd(1.3, 2.2), ph = rnd(0, Math.PI * 2), N = 14, pts = [];
        if (!el) return;
        for (var i = 0; i <= N; i++) {
          var t = i / N, y = yL + (yR - yL) * t + amp * Math.sin(Math.PI * t) * Math.sin(Math.PI * 2 * freq * t + ph);
          pts.push([1000 * t, Math.max(40, Math.min(396, y))]);
        }
        setMask(el, mask(1000, 400, 'M0 400V' + f(pts[0][1]) + curve(pts, false) + 'V400Z'));
      }
      // Ola: baja de izquierda a derecha manteniendo las alturas fijas (15% y 50% en desktop) y serpentea dentro de ese rango
      function wave() {
        var el = document.querySelector('.wave-front'), desktop = window.matchMedia('(min-width: 1024px)').matches;
        var yR = desktop ? 690 : 430, yL = desktop ? 210 : 620, lo = Math.min(yL, yR), hi = Math.max(yL, yR);
        var amp = rnd(45, 85), freq = rnd(1.3, 2.2), ph = rnd(0, Math.PI * 2), N = 16, pts = [];
        for (var i = 0; i <= N; i++) {
          var t = i / N, env = Math.sin(Math.PI * t), y = yR + (yL - yR) * t + amp * env * Math.sin(Math.PI * 2 * freq * t + ph);
          pts.push([1440 * (1 - t), Math.max(lo, Math.min(hi, y))]);
        }
        setMask(el, mask(1440, 700, 'M0 0H1440V' + yR + curve(pts, false) + 'Z'));
      }
      // Collage: cada carga elige 3 plantas en maceta y 5 rosetas al azar y las acomoda con pequeñas variaciones.
      // Tamaños (ancho respecto del collage): s 22%, m 30%, l 40%, xl 52%
      var POTS = ['aeonium-haworthii', 'aeonium-arboreum', 'echeveria-agavoides', 'sedum-burrito', 'sedum-adolphi', 'echeveria-elegans', 'graptopetalum-paraguayense', 'echeveria-laui', 'graptopetalum-amethystinum', 'sedum-dasyphyllum', 'aeonium-arboreum-alto', 'aeonium-rosetas'];
      var ROUND = ['aeonium-canariense', 'echeveria-laui', 'echeveria-lilacina', 'echeveria-elegans', 'echeveria-agavoides', 'graptopetalum-bellum', 'echeveria-pulidonis'];
      var OTHERS = ['planta-fantasma', 'graptopetalum-amethystinum', 'graptopetalum-pentandrum', 'sedum-palmeri-azul', 'sedum-adolphi'];
      // Rosetas que solo usa el collage del newsletter (no entran al hero)
      var NEWS_EXTRA = ['aeonium-haworthii', 'aeonium-arboreum', 'aeonium-decorum', 'graptopetalum-mendozae', 'sedum-dasyphyllum', 'sedum-burrito', 'sedum-morganianum'];
      var DISCS = ['var(--color-pink)', 'var(--color-celadon)']; // Rosa pálido y Celadón: uno para cada círculo, sorteados
      function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
      function collage() {
        var pots = shuffle(POTS), big = shuffle(ROUND), rest = shuffle(ROUND.slice(1).concat(OTHERS)).filter(function (n) { return n !== big[0]; });
        if (Math.random() < 0.5) rest[0] = 'sedum-adolphi'; // acento cálido la mitad de las veces
        var rest2 = rest.filter(function (n, i) { return rest.indexOf(n) === i; });
        var pick = { rL: big[0], rM1: rest2[0], rM2: rest2[1], rS1: rest2[2], rS2: rest2[3], pM: pots[0], pS1: pots[1], pS2: pots[2] };
        // x, y (% del collage) de cada pieza
        var slots = { rL: [8, 20], rM1: [64, 8], rM2: [4, 60], rS1: [6, 2], rS2: [68, 62], pM: [44, 10], pS1: [56, 46], pS2: [34, 58] };
        var discs = shuffle(DISCS);
        Object.keys(slots).forEach(function (k) {
          var el = document.querySelector('.collage .' + k);
          if (!el) return;
          var pot = k.charAt(0) === 'p', img = el.querySelector('img'), y = slots[k][1] + rnd(-1.5, 1.5);
          var name = (pot ? 'maceta-' : '') + pick[k];
          img.src = broteTheme.img + 'portada/' + name + '.webp';
          el.style.setProperty('--x', f(slots[k][0] + rnd(-1.5, 1.5)) + '%');
          el.style.setProperty('--y', f(y) + '%');
          img.style.setProperty('--d', f(rnd(8, 12)) + 's');
          img.style.setProperty('--delay', f(-rnd(0, 10)) + 's');
          img.style.zIndex = pot ? Math.round(y) + 10 : 1; // los círculos (z 0) quedan siempre por debajo de todas las plantas
          if (el.classList.contains('circled')) el.style.setProperty('--disc', discs.pop());
        });
      }
      // Collage de la sección del newsletter: 10 rosetas (sin macetas) al azar, bien pegadas unas con otras, en los bordes izquierdo y derecho
      function newsCollage() {
        var ros = shuffle(ROUND.concat(OTHERS, NEWS_EXTRA)), keys = ['nl1', 'nl2', 'nl3', 'nl4', 'nl5', 'nr1', 'nr2', 'nr3', 'nr4', 'nr5'];
        var slots = { nl1: [-34, 0], nl2: [30, 8], nl3: [-16, 34], nl4: [38, 36], nl5: [4, 64], nr1: [30, 0], nr2: [-10, 8], nr3: [50, 34], nr4: [6, 36], nr5: [30, 64] };
        keys.forEach(function (k, n) {
          var el = document.querySelector('.news-collage .' + k);
          if (!el) return;
          var img = el.querySelector('img'), name = ros[n];
          img.src = broteTheme.img + 'portada/' + name + '.webp';
          el.style.setProperty('--x', f(slots[k][0] + rnd(-1.5, 1.5)) + '%');
          el.style.setProperty('--y', f(slots[k][1] + rnd(-1.5, 1.5)) + '%');
          img.style.setProperty('--d', f(rnd(8, 12)) + 's');
          img.style.setProperty('--delay', f(-rnd(0, 10)) + 's');
        });
      }
      // Circulitos de la paleta alrededor de los collages: posiciones sorteadas entre varios puntos de anclaje, siempre detrás de las plantas
      function dots(box, anchors, colors, n, min, max) {
        shuffle(anchors).slice(0, n).forEach(function (a, i) {
          var d = document.createElement('span');
          d.className = 'dot';
          d.style.setProperty('--x', f(a[0] + rnd(-2, 2)) + '%');
          d.style.setProperty('--y', f(a[1] + rnd(-2, 2)) + '%');
          d.style.setProperty('--s', f(rnd(min, max)) + '%');
          d.style.setProperty('--c', colors[(i + Math.floor(rnd(0, colors.length))) % colors.length]);
          d.style.setProperty('--d', f(rnd(8, 12)) + 's');
          d.style.setProperty('--delay', f(-rnd(0, 10)) + 's');
          box.insertBefore(d, box.firstChild);
        });
      }
      // Contorno de blob con línea segmentada (sin relleno): misma forma redondeada y aleatoria que los blobs, dibujada en SVG
      function outline(box, css, color, dash) {
        var N = 36, pts = [], h = [], NS = 'http://www.w3.org/2000/svg';
        for (var k = 2; k <= 5; k++) h.push([k, rnd(0.03, 0.13 - k * 0.01), rnd(0, Math.PI * 2)]);
        for (var i = 0; i < N; i++) {
          var a = i / N * Math.PI * 2, r = 0.8;
          h.forEach(function (c) { r += c[1] * Math.cos(c[0] * a + c[2]); });
          r = Math.max(0.55, Math.min(1, r));
          pts.push([200 + Math.cos(a) * 190 * r, 210 + Math.sin(a) * 200 * r]);
        }
        var svg = document.createElementNS(NS, 'svg'), path = document.createElementNS(NS, 'path');
        svg.setAttribute('viewBox', '0 0 400 420'); svg.setAttribute('class', 'outline'); svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('preserveAspectRatio', 'none'); svg.style.cssText = css;
        path.setAttribute('d', 'M' + f(pts[0][0]) + ' ' + f(pts[0][1]) + curve(pts, true) + 'Z');
        path.setAttribute('fill', 'none'); path.setAttribute('stroke', color); path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-dasharray', dash); path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('vector-effect', 'non-scaling-stroke');
        svg.appendChild(path);
        box.insertBefore(svg, box.firstChild);
      }
      function allDots() {
        var hero = document.querySelector('.collage');
        if (hero) dots(hero, [[-7, 10], [3, -5], [30, -7], [58, -6], [88, -3], [104, 18], [101, 46], [106, 76], [90, 101], [60, 103], [28, 99], [-5, 86], [-9, 50], [18, 44], [48, 30], [80, 30]], ['var(--color-primary)', 'var(--color-celadon)', 'var(--color-lime-bright)', 'var(--color-pink)'], 9, 2.6, 5.6);
        if (hero) {
          outline(hero, 'left:-14%;top:-12%;width:52%;height:54%;', 'var(--color-primary)', '0 6');
          outline(hero, 'right:-16%;bottom:-12%;width:54%;height:52%;', 'var(--color-primary)', '0 6');
        }
        outline(document.querySelector('.news-left'), 'left:-18%;top:2%;width:80%;height:72%;', 'var(--color-primary)', '0 6');
        outline(document.querySelector('.news-right'), 'right:-18%;top:20%;width:80%;height:72%;', 'var(--color-primary)', '0 6');
        var left = [[6, 28], [58, 3], [90, 30], [2, 58], [52, 60], [90, 62], [28, 97], [76, 95], [40, 22]];
        var cols = ['var(--color-pink)', '#FFFFFF', 'var(--color-primary)', 'var(--color-olive)', 'var(--color-celadon)'];
        dots(document.querySelector('.news-left'), left, cols, 5, 5, 10);
        dots(document.querySelector('.news-right'), left.map(function (a) { return [100 - a[0], a[1]]; }), cols, 5, 5, 10);
      }
      blob(); wave(); cut(); collage(); newsCollage(); allDots();
      window.matchMedia('(min-width: 1024px)').addEventListener('change', wave);
    })();
