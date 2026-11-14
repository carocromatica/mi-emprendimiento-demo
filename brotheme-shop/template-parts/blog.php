<?php
/**
 * template-parts/blog.php — listado del blog: entrada destacada, lista, paginación y barra lateral.
 * Lo usa index.php para el blog, las categorías, etiquetas y la búsqueda.
 */

if ( is_search() ) {
	$titulo = 'Resultados para “' . get_search_query() . '”';
} elseif ( is_category() ) {
	$titulo = single_cat_title( '', false );
} elseif ( is_archive() ) {
	$titulo = get_the_archive_title();
} else {
	$titulo = 'Blog';
}

$categorias  = get_categories( array( 'hide_empty' => true ) );
$cat_actual  = is_category() ? get_queried_object_id() : 0;
$total_posts = (int) wp_count_posts()->publish;
$destacar    = ! is_paged() && ! is_search();
$n           = 0;
?>
<div class="container section blog-page">
	<h1 class="blog-title"><?php echo esc_html( $titulo ); ?></h1>
	<div class="blog-layout">
		<div class="blog-feed">
			<?php if ( have_posts() ) : ?>

				<?php if ( $destacar ) : the_post(); ?>
					<article class="post-featured">
						<a class="post-thumb t-lima" href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true">
							<?php if ( has_post_thumbnail() ) { the_post_thumbnail( 'brote-blog', array( 'alt' => '' ) ); } ?>
						</a>
						<div class="post-body">
							<span class="post-label">Destacado · <?php echo esc_html( brote_categoria() ); ?></span>
							<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
							<p><?php echo esc_html( get_the_excerpt() ); ?></p>
							<span class="post-meta"><?php echo esc_html( brote_tiempo_lectura() ); ?></span>
						</div>
					</article>
				<?php endif; ?>

				<div class="post-list" aria-label="Artículos">
					<?php while ( have_posts() ) : the_post(); ?>
						<article class="post-row">
							<a class="post-thumb <?php echo esc_attr( brote_tinte( $n++ ) ); ?>" href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true">
								<?php if ( has_post_thumbnail() ) { the_post_thumbnail( 'brote-blog', array( 'alt' => '', 'loading' => 'lazy' ) ); } ?>
							</a>
							<div class="post-body">
								<span class="post-label"><?php echo esc_html( brote_categoria() ); ?></span>
								<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
								<p><?php echo esc_html( get_the_excerpt() ); ?></p>
								<span class="post-meta"><?php echo esc_html( brote_tiempo_lectura() ); ?></span>
							</div>
						</article>
					<?php endwhile; ?>
				</div>

				<?php brote_paginacion(); ?>

			<?php else : ?>
				<p class="lead">No encontramos artículos por aquí. Prueba con otra palabra o <a href="<?php echo esc_url( brote_url_blog() ); ?>">vuelve al blog</a>.</p>
			<?php endif; ?>
		</div>

		<aside class="blog-aside">
			<nav class="blog-cats" aria-label="Categorías del blog">
				<h2>Categorías</h2>
				<ul>
					<li><a href="<?php echo esc_url( brote_url_blog() ); ?>"<?php echo ( is_home() && ! $cat_actual ) ? ' class="is-active" aria-current="true"' : ''; ?>><span>Todos</span><span class="count"><?php echo (int) $total_posts; ?></span></a></li>
					<?php foreach ( $categorias as $cat ) : ?>
						<li><a href="<?php echo esc_url( get_category_link( $cat ) ); ?>"<?php echo ( $cat_actual === (int) $cat->term_id ) ? ' class="is-active" aria-current="true"' : ''; ?>><span><?php echo esc_html( $cat->name ); ?></span><span class="count"><?php echo (int) $cat->count; ?></span></a></li>
					<?php endforeach; ?>
				</ul>
			</nav>
			<section class="diagnosis blog-diagnosis blog-news" aria-labelledby="titulo-news">
				<h2 id="titulo-news">Suscríbete a nuestro newsletter</h2>
				<p>Guías de cuidados y novedades directo en tu correo</p>
				<?php brote_formulario_newsletter(); ?>
				<img class="blog-news-img" src="<?php echo brote_img( 'portada/echeveria-laui.webp' ); ?>" alt="" width="380" height="380" loading="lazy">
			</section>
		</aside>
	</div>
</div>
