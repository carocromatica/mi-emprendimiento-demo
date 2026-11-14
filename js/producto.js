// Ficha de producto: se arma con los datos de js/productos.js según ?id=… (prototipo)
(function () {
  var B = window.BROTE, $ = function (id) { return document.getElementById(id); };
  var money = function (n) { return '$' + n.toLocaleString('es-CL'); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var catOf = function (id) { return B.CATS.filter(function (c) { return c.id === id; })[0]; };
  var id = new URLSearchParams(location.search).get('id') || 'sustrato-para-plantas-de-interior-10-l'; // sin id: el sustrato de interior, como antes
  var p = B.PRODUCTS.filter(function (x) { return x.id === id; })[0];

  var GUIA = {
    suculentas: ['Repisas, escritorios y ventanas con mucha luz.', 'Riega solo cuando el sustrato esté completamente seco y evita mojar las hojas.', 'Trasplántala cuando las raíces asomen por abajo de la maceta.'],
    cactus: ['Lugares con mucha luz, incluso con algo de sol directo.', 'Riega poco: espera a que el sustrato se seque por completo.', 'Cámbialo de maceta cuando el pie ya no quepa.'],
    maceteros: ['Suculentas, cactus y plantas pequeñas.', 'Revisa que tenga salida de agua o agrega una capa de piedras en el fondo.', 'Cámbialo cuando tu planta ya no tenga espacio para crecer.'],
    sustratos: ['Plantas de interior, suculentas y huerto, según el tipo de sustrato.', 'Llena la maceta hasta la mitad, ubica la planta y completa. Riega apenas trasplantes.', 'Renueva el sustrato una vez al año, idealmente en primavera.'],
    fertilizantes: ['Plantas de interior y huerto.', 'Sigue la dosis de la etiqueta y aplícalo con el riego.', 'Cada 15 días en primavera y verano.'],
    herramientas: ['Trasplantes, poda y riego.', 'Límpialas con un paño y alcohol antes de usarlas en otra planta.', 'Después de cada uso, para evitar que se transmitan plagas.']
  };

  if (!p) {
    $('pd').innerHTML = '<p class="pd-missing">No encontramos ese producto. <a href="tienda.html">Volver a la tienda</a></p>';
    return;
  }
  var cat = catOf(p.cats[0]);
  document.title = p.name + ' · Brote';
  $('pd-crumbs').innerHTML = '<li><a href="index.html">Inicio</a></li><li><a href="tienda.html">Tienda</a></li>' +
    '<li><a href="tienda.html?cat=' + cat.id + '">' + esc(cat.label) + '</a></li><li aria-current="page">' + esc(p.name) + '</li>';

  var kit = p.kit ? '<ul class="pd-includes" aria-label="Incluye">' + p.kit.incluye.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join('') + '</ul>' : '';
  var guia = GUIA[cat.id];
  $('pd').innerHTML =
    '<section class="pd">' +
      '<div class="pd-media"><span class="shop-media ' + p.tint + '">' + (p.nuevo ? '<span class="shop-new">Nuevo</span>' : '') +
        '<img src="' + p.img + '" alt="' + esc(p.name) + '" width="800" height="800"></span></div>' +
      '<div class="pd-info">' +
        '<a class="pd-cat" href="tienda.html?cat=' + cat.id + '">' + esc(cat.label) + '</a>' +
        '<h1>' + esc(p.name) + '</h1>' +
        '<p class="pd-price">' + money(p.price) + (p.kit ? '<span class="tag-offer">Ahorra ' + money(p.kit.ahorro) + '</span>' : '') + '</p>' +
        '<p class="pd-desc">' + esc(p.desc) + '</p>' + kit +
        '<form class="pd-buy" id="pd-form">' +
          '<div class="pd-qty" role="group" aria-label="Cantidad">' +
            '<button type="button" data-q="-1" aria-label="Quitar una unidad">−</button>' +
            '<output id="pd-q" aria-live="polite">1</output>' +
            '<button type="button" data-q="1" aria-label="Agregar una unidad">+</button>' +
          '</div>' +
          '<button class="btn-primary" type="submit">Agregar al carrito</button>' +
        '</form>' +
        '<p class="form-success pd-ok" id="pd-ok" role="status" hidden>¡Listo! Lo agregamos al carrito. <a href="carrito.html">Ver carrito</a></p>' +
        '<ul class="pd-perks"><li>Retiro en tienda Villa Alemana, V Región</li><li>Envíos a todo Chile</li></ul>' +
        '<div class="pd-accs">' +
          '<details class="drawer-sec" open><summary>Cuidados y uso</summary><dl class="pd-guide">' +
            '<dt>Ideal para</dt><dd>' + esc(guia[0]) + '</dd><dt>Cómo usarlo</dt><dd>' + esc(guia[1]) + '</dd><dt>Cada cuánto</dt><dd>' + esc(guia[2]) + '</dd></dl></details>' +
          '<details class="drawer-sec"><summary>Envíos y retiro</summary><div class="pd-sec-body"><p>Retira gratis en nuestra tienda de Villa Alemana o pide tu envío a todo Chile. Te avisamos por correo cuando tu pedido esté listo.</p></div></details>' +
        '</div>' +
      '</div>' +
    '</section>';

  var q = 1, out = $('pd-q');
  $('pd-form').addEventListener('click', function (e) {
    var b = e.target.closest('[data-q]'); if (!b) return;
    q = Math.max(1, Math.min(20, q + parseInt(b.getAttribute('data-q'), 10))); out.textContent = q;
  });
  $('pd-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (window.broteCart) window.broteCart.add(q);
    $('pd-ok').hidden = false;
  });

  // Relacionados: primero los de la misma categoría, luego los más vendidos
  var rel = B.PRODUCTS.filter(function (x) { return x !== p && x.cats.indexOf(cat.id) !== -1; });
  B.PRODUCTS.slice().sort(function (a, b) { return b.ventas - a.ventas; }).forEach(function (x) { if (x !== p && rel.indexOf(x) === -1) rel.push(x); });
  $('pd-rel-grid').innerHTML = rel.slice(0, 4).map(function (x) {
    return '<a class="shop-card" href="producto.html?id=' + x.id + '"><span class="shop-media ' + x.tint + '">' + (x.nuevo ? '<span class="shop-new">Nuevo</span>' : '') +
      '<img src="' + x.img + '" alt="" width="400" height="400" loading="lazy"></span><span class="shop-name">' + esc(x.name) + '</span><span class="shop-price">' + money(x.price) + '</span></a>';
  }).join('');
  $('pd-related').hidden = false;
})();
