// Buscador del menú: el ícono de la lupa abre un panel bajo la navbar con el campo grande y la lista de categorías.
(function () {
  var btn = document.querySelector('.navbar-search');
  var drawer = document.getElementById('search-drawer');
  if (!btn || !drawer) return;
  var input = drawer.querySelector('input[type="search"]');

  function open() {
    drawer.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('search-open');
    input.focus();
  }
  function close(returnFocus) {
    drawer.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('search-open');
    if (returnFocus) btn.focus();
  }

  btn.addEventListener('click', function () { drawer.hidden ? open() : close(true); });
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('[data-search-close]')) close(true);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !drawer.hidden) close(true);
  });
})();

// Demo de sesión iniciada: con ?sesion=1 el bloque "Crea tu cuenta" pasa a "Hola, Camila" en fucsia (?sesion=0 lo desactiva).
// En el sitio real esto lo decide WordPress según el usuario conectado.
(function () {
  var q = /[?&]sesion=([01])/.exec(location.search), on = false;
  try {
    if (q) sessionStorage.setItem('brote-sesion', q[1]);
    on = sessionStorage.getItem('brote-sesion') === '1';
  } catch (e) { on = !!q && q[1] === '1'; }
  var acc = document.querySelector('.navbar-account');
  if (!on || !acc) return;
  acc.classList.add('is-logged');
  var desk = acc.querySelector('.account-label-desktop'), svg = desk && desk.querySelector('svg');
  if (desk) {
    desk.innerHTML = '<span class="account-hi">Hola, Camila</span><span class="account-sub">Mi cuenta</span>';
    if (svg) desk.appendChild(svg);
  }
})();

// El menú parte verde lima y pasa a blanco al hacer scroll (en todas las páginas)
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function update() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Carrito de prototipo: los productos y cantidades se guardan en la sesión y la chapita del carrito los suma en todas las páginas
(function () {
  var KEY = 'brote-cart';
  var SEED = [{ id: 'sustrato-para-plantas-de-interior-10-l', q: 1 }, { id: 'fertilizante-liquido-para-plantas-de-interior-500-ml', q: 1 }]; // el carrito parte con 2 productos
  function read() {
    try { var v = sessionStorage.getItem(KEY); if (v !== null) return JSON.parse(v); } catch (e) {}
    return SEED.map(function (x) { return { id: x.id, q: x.q }; });
  }
  function write(list) { try { sessionStorage.setItem(KEY, JSON.stringify(list)); } catch (e) {} paint(); document.dispatchEvent(new CustomEvent('brote-cart')); }
  function count() { return read().reduce(function (n, x) { return n + x.q; }, 0); }
  function paint() {
    var n = count();
    document.querySelectorAll('.cart-count').forEach(function (el) { el.textContent = n; el.hidden = n === 0; });
    document.querySelectorAll('.navbar-cart').forEach(function (a) { a.setAttribute('aria-label', 'Carrito, ' + n + (n === 1 ? ' producto' : ' productos')); });
  }
  window.broteCart = {
    get: read, count: count,
    add: function (id, q) { var l = read(), it = l.filter(function (x) { return x.id === id; })[0]; if (it) it.q = Math.min(20, it.q + q); else l.push({ id: id, q: q }); write(l); },
    set: function (id, q) { write(read().map(function (x) { return x.id === id ? { id: id, q: Math.max(1, Math.min(20, q)) } : x; })); },
    remove: function (id) { write(read().filter(function (x) { return x.id !== id; })); }
  };
  paint();
})();
