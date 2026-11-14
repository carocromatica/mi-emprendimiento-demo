<?php
/**
 * Template Name: Contacto
 * Se usa solo en la página con la dirección /contacto/ (o eligiéndola como plantilla de página).
 * El formulario es de Contact Form 7: pega su shortcode en el contenido de la página.
 */
get_header();
?>

<section class="contact-hero" aria-labelledby="contacto-titulo">
	<img class="gh-rosette ch-r1" src="<?php echo brote_img( 'portada/echeveria-lilacina.webp' ); ?>" alt="" width="380" height="380" aria-hidden="true">
	<img class="gh-rosette ch-r2" src="<?php echo brote_img( 'portada/sedum-burrito.webp' ); ?>" alt="" width="380" height="380" aria-hidden="true">
	<div class="container contact-hero-inner">
		<span class="guias-chip">Respondemos de lunes a viernes</span>
		<h1 id="contacto-titulo">Hablemos de <span>tus plantas</span></h1>
		<p>¿Una duda sobre un producto, tu pedido o una planta que no se ve bien? Escríbenos y te ayudamos.</p>
	</div>
</section>

<div class="container contact-layout">
	<section class="contact-card" aria-labelledby="contacto-form-titulo">
		<h2 id="contacto-form-titulo">Escríbenos</h2>
		<?php while ( have_posts() ) : the_post(); ?>
			<?php if ( '' !== trim( get_the_content() ) ) : ?>
				<?php the_content(); ?>
			<?php elseif ( current_user_can( 'edit_pages' ) ) : ?>
				<p class="privacy"><strong>Solo lo ves tú:</strong> pega en el contenido de esta página el shortcode de Contact Form 7, por ejemplo <code>[contact-form-7 id="123" title="Contacto"]</code>.</p>
			<?php endif; ?>
		<?php endwhile; ?>
		<p class="privacy">Al escribirnos aceptas el uso de tus datos solo para responderte.</p>
	</section>

	<aside class="contact-side" aria-label="Otras formas de contacto">
		<article class="contact-info">
			<span class="contact-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.7 7.1L4 20l1-4.7A8 8 0 1 1 21 12Z"/></svg></span>
			<div><h3>WhatsApp</h3><p>Para una respuesta más rápida.</p><a class="btn-secondary" href="https://wa.me/56900000000" target="_blank" rel="noopener">Escribir por WhatsApp</a></div>
		</article>
		<article class="contact-info">
			<span class="contact-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>
			<div><h3>Horario de atención</h3><p>Lunes a viernes, de 10:00 a 18:00.</p></div>
		</article>
		<article class="contact-info">
			<span class="contact-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg></span>
			<div><h3>Nuestra tienda</h3><p>Villa Alemana, V Región. Puedes retirar tus compras en tienda.</p></div>
		</article>
		<article class="contact-social">
			<h3>Síguenos</h3>
			<p>Tips de cuidado y novedades de Brote.</p>
			<?php brote_redes( 'contacto' ); ?>
		</article>
	</aside>
</div>

<p class="contact-faq container">¿Buscas una respuesta rápida? Revisa las <a href="<?php echo esc_url( home_url( '/preguntas-frecuentes/' ) ); ?>">preguntas frecuentes</a>.</p>

<?php get_footer(); ?>
