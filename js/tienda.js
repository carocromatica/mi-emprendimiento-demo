// Tienda: grilla de productos con filtros y orden en drawers (prototipo, datos de ejemplo)
(function () {
  var CATS = [
    { id: 'suculentas', label: 'Suculentas', img: 'img/home/cat-suculentas.png', tint: 't-pink' },
    { id: 'cactus', label: 'Cactus', img: 'img/home/cat-cactus.png', tint: 't-lima' },
    { id: 'maceteros', label: 'Maceteros', img: 'img/home/cat-maceteros.png', tint: 't-celadon' },
    { id: 'sustratos', label: 'Sustratos', img: 'img/home/cat-sustratos.png', tint: 't-pink' },
    { id: 'fertilizantes', label: 'Fertilizantes', img: 'img/home/cat-fertilizantes.png', tint: 't-lima' },
    { id: 'herramientas', label: 'Herramientas', img: 'img/home/cat-herramientas.png', tint: 't-celadon' }
  ];
  var TIPOS = [
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'suculentas', label: 'Suculentas y cactus' },
    { id: 'huerto', label: 'Huerto' }
  ];
  var ORDEN = [
    { id: 'recomendado', label: 'Recomendado' },
    { id: 'vendidos', label: 'Más vendidos' },
    { id: 'menor', label: 'Menor precio' },
    { id: 'mayor', label: 'Mayor precio' },
    { id: 'nombre', label: 'Nombre del producto' },
    { id: 'nuevo', label: 'Nuevo' }
  ];
  var P = function (name, cats, tipos, price, img, ventas, nuevo) { return { name: name, cats: [].concat(cats), tipos: tipos, price: price, img: img, ventas: ventas, nuevo: !!nuevo }; };
  var M = 'img/portada/maceta-', S = 'img/productos/';
  var PRODUCTS = [
    P('Echeveria agavoides en maceta', 'suculentas', ['suculentas', 'interior'], 8990, M + 'echeveria-agavoides.webp', 95, 1),
    P('Echeveria elegans en maceta', 'suculentas', ['suculentas', 'interior'], 6990, M + 'echeveria-elegans.webp', 98),
    P('Echeveria laui en maceta', 'suculentas', ['suculentas', 'interior'], 9990, M + 'echeveria-laui.webp', 70, 1),
    P('Aeonium arboreum en maceta', 'suculentas', ['suculentas', 'exterior'], 7490, M + 'aeonium-arboreum.webp', 80),
    P('Aeonium arboreum alto en maceta', 'suculentas', ['suculentas', 'exterior'], 8490, M + 'aeonium-arboreum-alto.webp', 60),
    P('Aeonium haworthii en maceta', 'suculentas', ['suculentas', 'interior'], 6990, M + 'aeonium-haworthii.webp', 75),
    P('Aeonium rosetas en maceta', 'suculentas', ['suculentas', 'interior'], 7990, M + 'aeonium-rosetas.webp', 55),
    P('Graptopetalum amethystinum en maceta', 'suculentas', ['suculentas', 'interior'], 8490, M + 'graptopetalum-amethystinum.webp', 65),
    P('Graptopetalum paraguayense en maceta', 'suculentas', ['suculentas', 'interior'], 6490, M + 'graptopetalum-paraguayense.webp', 85),
    P('Sedum adolphi en maceta', 'suculentas', ['suculentas', 'interior'], 5990, M + 'sedum-adolphi.webp', 50, 1),
    P('Sedum burrito en maceta', 'suculentas', ['suculentas', 'interior'], 6990, M + 'sedum-burrito.webp', 90),
    P('Cactus de barril en maceta blanca', 'cactus', ['suculentas', 'interior'], 7490, 'img/home/cat-cactus.png', 66),
    P('Set de 3 maceteros de cerámica', 'maceteros', ['interior'], 12990, 'img/home/cat-maceteros.png', 74, 1),
    P('Set de herramientas de jardinería', 'herramientas', ['interior', 'huerto'], 14990, 'img/home/cat-herramientas.png', 57),
    P('Sedum dasyphyllum en maceta', 'suculentas', ['suculentas', 'exterior'], 4990, M + 'sedum-dasyphyllum.webp', 45),
    P('Sustrato para plantas de interior 10 L', 'sustratos', ['interior'], 7990, S + 'sustrato-interior.svg', 100),
    P('Tierra de hoja 20 L', 'sustratos', ['interior', 'exterior'], 5490, S + 'tierra-de-hoja.svg', 72),
    P('Sustrato para suculentas y cactus con arena de río 5 L', 'sustratos', ['suculentas'], 6490, S + 'sustrato-suculentas.svg', 92),
    P('Perlita 5 L', 'sustratos', ['suculentas', 'interior'], 4990, S + 'perlita.svg', 58),
    P('Sustrato para huerto 20 L', 'sustratos', ['huerto'], 8490, S + 'sustrato-huerto.svg', 52),
    P('Humus de lombriz 5 L', 'fertilizantes', ['huerto', 'exterior'], 6990, S + 'humus.svg', 62),
    P('Fertilizante líquido para plantas de interior 500 ml', 'fertilizantes', ['interior'], 5990, S + 'fertilizante-liquido.svg', 88, 1),
    P('Aceite de neem 250 ml', 'fertilizantes', ['interior', 'exterior'], 6490, S + 'aceite-de-neem.svg', 68),
    P('Kit plantas de interior', ['maceteros', 'sustratos', 'fertilizantes'], ['interior'], 17490, S + 'kit-interior.svg', 78),
    P('Kit suculentas', ['suculentas', 'maceteros', 'sustratos', 'fertilizantes'], ['suculentas'], 12990, S + 'kit-suculentas.svg', 82),
    P('Kit huerto', ['sustratos', 'fertilizantes', 'herramientas'], ['huerto'], 19990, S + 'kit-huerto.svg', 48)
  ];
  PRODUCTS.forEach(function (p, i) { p.i = i; p.tint = ['t-lima', 't-pink', 't-celadon', 't-mint'][i % 4]; });

  var PER = 12, MAXP = 20000;
  var params = new URLSearchParams(location.search);
  var state = { cats: [], tipos: [], max: MAXP, orden: 'recomendado', q: (params.get('q') || '').trim(), page: 1 };
  var pre = params.get('cat');
  if (pre && CATS.some(function (c) { return c.id === pre; })) state.cats = [pre];

  var $ = function (id) { return document.getElementById(id); };
  var money = function (n) { return '$' + n.toLocaleString('es-CL'); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var norm = function (s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
  var catLabel = function (id) { return CATS.filter(function (c) { return c.id === id; })[0].label; };
  var tipoLabel = function (id) { return TIPOS.filter(function (t) { return t.id === id; })[0].label; };
  var has = function (a, v) { return a.indexOf(v) !== -1; };

  function filtered() {
    var q = norm(state.q);
    var list = PRODUCTS.filter(function (p) {
      return (!state.cats.length || p.cats.some(function (c) { return has(state.cats, c); })) &&
        (!state.tipos.length || p.tipos.some(function (t) { return has(state.tipos, t); })) &&
        p.price <= state.max && (!q || norm(p.name).indexOf(q) !== -1);
    });
    var sorts = {
      recomendado: function (a, b) { return a.i - b.i; },
      vendidos: function (a, b) { return b.ventas - a.ventas; },
      menor: function (a, b) { return a.price - b.price; },
      mayor: function (a, b) { return b.price - a.price; },
      nombre: function (a, b) { return a.name.localeCompare(b.name, 'es'); },
      nuevo: function (a, b) { return (b.nuevo - a.nuevo) || (a.i - b.i); }
    };
    return list.sort(sorts[state.orden]);
  }

  function activeCount() { return state.cats.length + state.tipos.length + (state.max < MAXP ? 1 : 0); }

  function renderTiles() {
    var all = !state.cats.length;
    $('shop-tiles').innerHTML = '<button type="button" class="shop-tile shop-tile-all' + (all ? ' is-active' : '') + '" data-cat="" aria-pressed="' + all + '"><span class="all-circle">Todos los productos</span></button>' + CATS.map(function (c) {
      var on = state.cats.length === 1 && state.cats[0] === c.id;
      return '<button type="button" class="shop-tile ' + c.tint + (on ? ' is-active' : '') + '" data-cat="' + c.id + '" aria-pressed="' + on + '">' +
        '<img src="' + c.img + '" alt="" width="160" height="160"><span>' + esc(c.label) + '</span></button>';
    }).join('');
  }

  function renderActive() {
    var chips = [];
    if (state.q) chips.push(['q', 'Búsqueda: ' + state.q]);
    state.cats.forEach(function (c) { chips.push(['cat:' + c, catLabel(c)]); });
    state.tipos.forEach(function (t) { chips.push(['tipo:' + t, tipoLabel(t)]); });
    if (state.max < MAXP) chips.push(['max', 'Hasta ' + money(state.max)]);
    $('shop-active').innerHTML = chips.map(function (c) {
      return '<button type="button" class="shop-chip" data-rm="' + esc(c[0]) + '">' + esc(c[1]) + '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg><span class="visually-hidden"> (quitar filtro)</span></button>';
    }).join('') + (chips.length > 1 ? '<button type="button" class="shop-clear" data-rm="all">Borrar todo</button>' : '');
    var n = activeCount();
    $('filtros-n').hidden = !n; $('filtros-n').textContent = n;
  }

  function renderCrumbs() {
    var one = state.cats.length === 1 ? catLabel(state.cats[0]) : '';
    $('shop-h1').textContent = one || 'Tienda';
    $('shop-crumbs').innerHTML = '<li><a href="index.html">Inicio</a></li>' +
      (one ? '<li><a href="tienda.html" data-crumb="tienda">Tienda</a></li><li aria-current="page">' + esc(one) + '</li>' : '<li aria-current="page">Tienda</li>');
    document.title = (one ? one + ' · ' : '') + 'Tienda · Brote';
  }

  function renderGrid() {
    var list = filtered();
    var pages = Math.max(1, Math.ceil(list.length / PER));
    state.page = Math.min(state.page, pages);
    var slice = list.slice((state.page - 1) * PER, state.page * PER);
    $('shop-count').textContent = list.length + (list.length === 1 ? ' producto' : ' productos');
    $('shop-grid').innerHTML = slice.map(function (p) {
      return '<a class="shop-card" href="producto.html"><span class="shop-media ' + p.tint + '">' + (p.nuevo ? '<span class="shop-new">Nuevo</span>' : '') +
        '<img src="' + p.img + '" alt="" width="400" height="400" loading="lazy"></span>' +
        '<span class="shop-name">' + esc(p.name) + '</span><span class="shop-price">' + money(p.price) + '</span></a>';
    }).join('');
    $('shop-empty').hidden = list.length > 0;
    var nav = $('shop-pag');
    nav.hidden = pages < 2;
    var chev = function (d) { return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + d + '"/></svg>'; };
    var html = '<a href="#" class="page-arrow" data-page="' + (state.page - 1) + '" aria-label="Página anterior"' + (state.page === 1 ? ' aria-disabled="true"' : '') + '>' + chev('M15 6l-6 6 6 6') + '</a>';
    for (var i = 1; i <= pages; i++) html += '<a href="#" class="page-num' + (i === state.page ? ' is-active' : '') + '" data-page="' + i + '" aria-label="Página ' + i + '"' + (i === state.page ? ' aria-current="page"' : '') + '>' + i + '</a>';
    html += '<a href="#" class="page-arrow" data-page="' + (state.page + 1) + '" aria-label="Página siguiente"' + (state.page === pages ? ' aria-disabled="true"' : '') + '>' + chev('M9 6l6 6-6 6') + '</a>';
    nav.innerHTML = html;
  }

  function render() { renderTiles(); renderCrumbs(); renderActive(); renderGrid(); }

  // Drawers
  var dF = $('drawer-filtros'), dO = $('drawer-orden');
  function openDrawer(d) { d.showModal(); }
  [dF, dO].forEach(function (d) {
    d.addEventListener('click', function (e) { if (e.target === d || e.target.closest('[data-drawer-close]')) d.close(); });
  });

  function buildFilterDrawer() {
    $('df-cats').innerHTML = CATS.map(function (c) { return '<label><input type="checkbox" name="cat" value="' + c.id + '"> ' + esc(c.label) + '</label>'; }).join('');
    $('df-tipos').innerHTML = TIPOS.map(function (t) { return '<label><input type="checkbox" name="tipo" value="' + t.id + '"> ' + esc(t.label) + '</label>'; }).join('');
  }
  function syncDrawer() {
    dF.querySelectorAll('input[name="cat"]').forEach(function (i) { i.checked = has(state.cats, i.value); });
    dF.querySelectorAll('input[name="tipo"]').forEach(function (i) { i.checked = has(state.tipos, i.value); });
    $('df-precio').value = state.max; $('df-precio-txt').textContent = 'Hasta ' + money(+$('df-precio').value);
  }
  $('btn-filtrar').addEventListener('click', function () { syncDrawer(); openDrawer(dF); });
  $('df-precio').addEventListener('input', function () { $('df-precio-txt').textContent = 'Hasta ' + money(+this.value); });
  $('df-aplicar').addEventListener('click', function () {
    state.cats = Array.prototype.map.call(dF.querySelectorAll('input[name="cat"]:checked'), function (i) { return i.value; });
    state.tipos = Array.prototype.map.call(dF.querySelectorAll('input[name="tipo"]:checked'), function (i) { return i.value; });
    state.max = +$('df-precio').value; state.page = 1; dF.close(); render();
  });
  $('df-borrar').addEventListener('click', function () {
    dF.querySelectorAll('input[type="checkbox"]').forEach(function (i) { i.checked = false; });
    $('df-precio').value = MAXP; $('df-precio-txt').textContent = 'Hasta ' + money(MAXP);
  });

  function renderOrder() {
    $('order-list').innerHTML = ORDEN.map(function (o) {
      return '<li><button type="button" class="order-opt' + (o.id === state.orden ? ' is-active' : '') + '" data-orden="' + o.id + '" aria-pressed="' + (o.id === state.orden) + '">' + esc(o.label) + '</button></li>';
    }).join('');
  }
  $('btn-ordenar').addEventListener('click', function () { renderOrder(); openDrawer(dO); });
  $('order-list').addEventListener('click', function (e) {
    var b = e.target.closest('[data-orden]'); if (!b) return;
    state.orden = b.getAttribute('data-orden'); state.page = 1; dO.close(); render();
  });

  // Categorías, chips y paginación
  $('shop-tiles').addEventListener('click', function (e) {
    var b = e.target.closest('[data-cat]'); if (!b) return;
    var id = b.getAttribute('data-cat');
    state.cats = (!id || (state.cats.length === 1 && state.cats[0] === id)) ? [] : [id]; state.page = 1; render();
  });
  $('shop-crumbs').addEventListener('click', function (e) {
    if (!e.target.closest('[data-crumb]')) return;
    e.preventDefault(); state.cats = []; state.page = 1; render();
  });
  $('shop-active').addEventListener('click', function (e) {
    var b = e.target.closest('[data-rm]'); if (!b) return;
    var k = b.getAttribute('data-rm');
    if (k === 'all') { state.cats = []; state.tipos = []; state.max = MAXP; state.q = ''; }
    else if (k === 'q') state.q = '';
    else if (k === 'max') state.max = MAXP;
    else if (k.indexOf('cat:') === 0) state.cats = state.cats.filter(function (c) { return c !== k.slice(4); });
    else if (k.indexOf('tipo:') === 0) state.tipos = state.tipos.filter(function (t) { return t !== k.slice(5); });
    state.page = 1; render();
  });
  $('shop-pag').addEventListener('click', function (e) {
    var a = e.target.closest('a[data-page]'); if (!a) return;
    e.preventDefault();
    if (a.getAttribute('aria-disabled') === 'true') return;
    state.page = +a.getAttribute('data-page'); renderGrid();
    document.querySelector('.shop-title-row').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  buildFilterDrawer();
  render();
})();
