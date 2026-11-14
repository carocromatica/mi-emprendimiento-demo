// Carrito: muestra los productos guardados en la sesión (prototipo, el pago no existe)
(function () {
  var B = window.BROTE, cart = window.broteCart, $ = function (id) { return document.getElementById(id); };
  var money = function (n) { return '$' + n.toLocaleString('es-CL'); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var find = function (id) { return B.PRODUCTS.filter(function (p) { return p.id === id; })[0]; };
  var catLabel = function (p) { return B.CATS.filter(function (c) { return c.id === p.cats[0]; })[0].label; };
  var DESPACHO = 3490;

  function render() {
    var items = cart.get().map(function (x) { return { p: find(x.id), q: x.q }; }).filter(function (x) { return x.p; });
    var n = items.reduce(function (s, x) { return s + x.q; }, 0);
    $('cart-count').textContent = n ? n + (n === 1 ? ' producto' : ' productos') : '';
    $('cart-full').hidden = !items.length;
    $('cart-empty').hidden = !!items.length;

    $('cart-lines').innerHTML = items.map(function (x) {
      var p = x.p;
      return '<li class="cart-line" data-id="' + p.id + '">' +
        '<a class="cart-thumb shop-media ' + p.tint + '" href="producto.html?id=' + p.id + '" tabindex="-1" aria-hidden="true"><img src="' + p.img + '" alt="" width="120" height="120"></a>' +
        '<div class="cart-line-info">' +
          '<span class="pd-cat">' + esc(catLabel(p)) + '</span>' +
          '<h2><a href="producto.html?id=' + p.id + '">' + esc(p.name) + '</a></h2>' +
          '<span class="cart-unit">' + money(p.price) + ' c/u</span>' +
          '<div class="cart-line-actions">' +
            '<div class="pd-qty" role="group" aria-label="Cantidad de ' + esc(p.name) + '">' +
              '<button type="button" data-act="minus" aria-label="Quitar una unidad">−</button><output>' + x.q + '</output><button type="button" data-act="plus" aria-label="Agregar una unidad">+</button>' +
            '</div>' +
            '<button type="button" class="cart-remove" data-act="remove">Quitar</button>' +
          '</div>' +
        '</div>' +
        '<strong class="cart-line-total">' + money(p.price * x.q) + '</strong>' +
      '</li>';
    }).join('');

    var sub = items.reduce(function (s, x) { return s + x.p.price * x.q; }, 0);
    var envio = document.querySelector('input[name="envio"]:checked');
    var total = sub + (envio && envio.value === 'despacho' ? DESPACHO : 0);
    $('sum-sub').textContent = money(sub);
    $('sum-total').textContent = money(total);

    // Sugerencias: los más vendidos que no están en el carrito
    var inCart = items.map(function (x) { return x.p.id; });
    var rel = B.PRODUCTS.filter(function (p) { return inCart.indexOf(p.id) === -1; }).sort(function (a, b) { return b.ventas - a.ventas; }).slice(0, 4);
    $('cart-rel-grid').innerHTML = rel.map(function (x) {
      return '<a class="shop-card" href="producto.html?id=' + x.id + '"><span class="shop-media ' + x.tint + '">' + (x.nuevo ? '<span class="shop-new">Nuevo</span>' : '') +
        '<img src="' + x.img + '" alt="" width="400" height="400" loading="lazy"></span><span class="shop-name">' + esc(x.name) + '</span><span class="shop-price">' + money(x.price) + '</span></a>';
    }).join('');
    $('cart-rel').hidden = !rel.length;
  }

  $('cart-lines').addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var li = b.closest('.cart-line'), id = li.getAttribute('data-id'), q = parseInt(li.querySelector('output').textContent, 10);
    var act = b.getAttribute('data-act');
    if (act === 'remove') cart.remove(id);
    else cart.set(id, q + (act === 'plus' ? 1 : -1));
    var again = document.querySelector('.cart-line[data-id="' + id + '"] [data-act="' + act + '"]'); if (again) again.focus();
  });
  document.querySelectorAll('input[name="envio"]').forEach(function (i) { i.addEventListener('change', render); });
  $('btn-pagar').addEventListener('click', function () { $('pay-note').hidden = false; });
  document.addEventListener('brote-cart', render);
  render();
})();
