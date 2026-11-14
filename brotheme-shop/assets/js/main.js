/* main.js — comportamiento común a todo el sitio. */

// Buscador del menú: la lupa abre un panel bajo la navbar con el campo grande.
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

// El menú parte verde lima y pasa a blanco al hacer scroll.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function update() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// Botón "Copiar link" de los artículos.
(function () {
  var btn = document.querySelector('[data-copiar-link]');
  if (!btn) return;
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var url = btn.getAttribute('data-copiar-link');
    var listo = function () { btn.textContent = '¡Copiado!'; setTimeout(function () { btn.textContent = 'Copiar link'; }, 2000); };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(listo);
    else { window.prompt('Copia este link:', url); }
  });
})();
