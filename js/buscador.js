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
