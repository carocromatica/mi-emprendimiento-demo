<?php
/**
 * 404.php — página no encontrada.
 */
get_header();
?>

<div class="container error-page">
	<h1>Esta página se secó 🍂</h1>
	<p class="lead">No encontramos lo que buscabas, pero tus plantas te siguen esperando.</p>
	<div class="btn-row">
		<a class="btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>">Ir al inicio</a>
		<a class="btn-secondary" href="<?php echo esc_url( brote_url_blog() ); ?>">Ver el blog</a>
	</div>
</div>

<?php get_footer(); ?>
