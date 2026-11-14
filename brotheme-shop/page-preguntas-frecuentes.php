<?php
/**
 * Template Name: Preguntas frecuentes
 * Se usa en la página con la dirección /preguntas-frecuentes/ (o eligiéndola como plantilla de página).
 * Para cambiar las preguntas, edita los <details> de abajo. El buscador y los temas están en assets/js/faq.js.
 */
get_header();
?>
    <section class="faq-hero" aria-labelledby="faq-titulo">
      <img class="gh-rosette fh-r1" src="<?php echo brote_img( 'portada/graptopetalum-bellum.webp' ); ?>" alt="" width="380" height="380" aria-hidden="true">
      <img class="gh-rosette fh-r2" src="<?php echo brote_img( 'portada/sedum-adolphi.webp' ); ?>" alt="" width="380" height="380" aria-hidden="true">
      <div class="container contact-hero-inner">
        <span class="guias-chip">Resolvemos tus dudas</span>
        <h1 id="faq-titulo">Preguntas <span>frecuentes</span></h1>
        <p>Envíos, pagos, cambios y cuidado de tus plantas. Si no está tu pregunta, escríbenos.</p>
      </div>
    </section>

    <div class="container faq-page">
      <div class="faq-tools">
        <form class="search-form faq-search" role="search" onsubmit="return false">
          <label for="faq-q" class="visually-hidden">Buscar en las preguntas frecuentes</label>
          <input type="search" id="faq-q" placeholder="Busca tu pregunta…" autocomplete="off">
        </form>
        <div class="faq-chips" role="group" aria-label="Temas"><button type="button" class="shop-chip faq-chip" data-faq="envios" aria-pressed="false">Envíos y retiro</button><button type="button" class="shop-chip faq-chip" data-faq="pedidos" aria-pressed="false">Pedidos y pagos</button><button type="button" class="shop-chip faq-chip" data-faq="plantas" aria-pressed="false">Plantas y guías</button></div>
      </div>

      <div class="faq-list" id="faq-list">
        <section class="faq-group" data-cat="envios" aria-labelledby="faq-envios">
          <h2 id="faq-envios">Envíos y retiro</h2>
            <details class="faq-item"><summary>¿Hacen despacho a todo Chile?</summary><p>Sí. Puedes elegir entre retirar gratis en nuestra tienda de Villa Alemana o recibir tu pedido a domicilio por $3.490. Lo eliges en el carrito antes de pagar.</p></details>
            <details class="faq-item"><summary>¿Cuánto demora el despacho?</summary><p>Entre 1 y 3 días hábiles en la V Región, y entre 4 y 8 días hábiles en el resto de Chile.</p></details>
            <details class="faq-item"><summary>¿Puedo retirar mi pedido en tienda?</summary><p>Sí, es gratis. Retira en nuestra tienda de Villa Alemana, V Región, en horario de atención: de lunes a viernes, de 10:00 a 18:00.</p></details>
        </section>
        <section class="faq-group" data-cat="pedidos" aria-labelledby="faq-pedidos">
          <h2 id="faq-pedidos">Pedidos y pagos</h2>
            <details class="faq-item"><summary>¿Qué medios de pago aceptan?</summary><p>Pagas con Mercado Pago, con tarjeta de débito o crédito, o con los otros medios que ofrece Mercado Pago.</p></details>
            <details class="faq-item"><summary>¿Puedo cambiar un producto?</summary><p>Sí, dentro de 10 días si el producto está cerrado y sin uso.</p></details>
            <details class="faq-item"><summary>¿Qué hago si mi pedido llega con un problema?</summary><p>Escríbenos desde la página de contacto con tu nombre y qué pasó, y te ayudamos a resolverlo.</p></details>
        </section>
        <section class="faq-group" data-cat="plantas" aria-labelledby="faq-plantas">
          <h2 id="faq-plantas">Plantas y guías</h2>
            <details class="faq-item"><summary>¿Cómo recibo las guías gratis?</summary><p>Déjanos tu correo en el formulario de suscripción del inicio o del blog y te enviamos la guía de cuidados en PDF.</p></details>
            <details class="faq-item"><summary>¿Cada cuánto debo regar mis suculentas?</summary><p>Riega solo cuando el sustrato esté completamente seco, y evita mojar las hojas. El exceso de agua es la causa más común de problemas.</p></details>
            <details class="faq-item"><summary>Mi planta no se ve bien, ¿qué hago?</summary><p>Revisa los artículos de nuestro blog. Si sigues con dudas, escríbenos y te ayudamos.</p></details>
        </section>
      </div>
      <p class="shop-empty" id="faq-empty" hidden>No encontramos esa pregunta. Prueba con otra palabra o escríbenos.</p>

      <aside class="faq-help" aria-labelledby="faq-help-titulo">
        <h2 id="faq-help-titulo">¿No encontraste tu respuesta?</h2>
        <p>Escríbenos y te respondemos de lunes a viernes, de 10:00 a 18:00.</p>
        <a class="btn-primary" href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>">Ir a contacto</a>
      </aside>
    </div>
  

<?php get_footer(); ?>
