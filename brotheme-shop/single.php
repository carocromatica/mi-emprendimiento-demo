<?php
/**
 * single.php — un artículo del blog, con compartir, comentarios, notas relacionadas y newsletter.
 */
get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>
	<?php
	$url    = get_permalink();
	$titulo = get_the_title();
	?>
	<div class="container section">
		<article <?php post_class( 'article' ); ?>>
			<header class="article-header">
				<span class="label-caps"><?php echo esc_html( brote_categoria() ); ?> · <?php echo esc_html( brote_tiempo_lectura() ); ?></span>
				<h1><?php the_title(); ?></h1>
				<?php if ( has_post_thumbnail() ) : ?>
					<?php the_post_thumbnail( 'brote-blog' ); ?>
				<?php endif; ?>
			</header>

			<div class="article-body">
				<?php the_content(); ?>
			</div>

			<section class="share" aria-label="Compartir">
				<span class="label-caps">Compartir</span>
				<a class="chip" href="<?php echo esc_url( 'https://wa.me/?text=' . rawurlencode( $titulo . ' ' . $url ) ); ?>" target="_blank" rel="noopener">WhatsApp</a>
				<a class="chip" href="<?php echo esc_url( 'https://www.facebook.com/sharer/sharer.php?u=' . rawurlencode( $url ) ); ?>" target="_blank" rel="noopener">Facebook</a>
				<a class="chip" href="<?php echo esc_url( $url ); ?>" data-copiar-link="<?php echo esc_url( $url ); ?>">Copiar link</a>
			</section>

			<?php
			if ( comments_open() || get_comments_number() ) {
				comments_template();
			}
			?>
		</article>

		<?php
		$relacionadas = new WP_Query( array(
			'posts_per_page'      => 3,
			'post__not_in'        => array( get_the_ID() ),
			'ignore_sticky_posts' => true,
		) );
		?>
		<?php if ( $relacionadas->have_posts() ) : ?>
			<section class="related" id="relacionadas" aria-labelledby="titulo-relacionadas">
				<h2 id="titulo-relacionadas">Más notas del blog</h2>
				<div class="related-grid">
					<?php while ( $relacionadas->have_posts() ) : $relacionadas->the_post(); ?>
						<article class="related-card">
							<a class="post-thumb" href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true">
								<?php if ( has_post_thumbnail() ) { the_post_thumbnail( 'brote-blog', array( 'alt' => '', 'loading' => 'lazy' ) ); } ?>
							</a>
							<span class="post-label"><?php echo esc_html( brote_categoria() ); ?> · <?php echo esc_html( brote_tiempo_lectura() ); ?></span>
							<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
							<p><?php echo esc_html( get_the_excerpt() ); ?></p>
						</article>
					<?php endwhile; wp_reset_postdata(); ?>
				</div>
			</section>
		<?php endif; ?>
	</div>

	<section class="lead-band" aria-labelledby="titulo-guia">
		<img class="lead-rosette lead-rosette-l" src="<?php echo brote_img( 'portada/graptopetalum-bellum.webp' ); ?>" alt="" width="380" height="380" loading="lazy">
		<img class="lead-rosette lead-rosette-r" src="<?php echo brote_img( 'portada/echeveria-lilacina.webp' ); ?>" alt="" width="380" height="380" loading="lazy">
		<div class="container lead-band-inner">
			<h2 id="titulo-guia">Recibe guías de cuidados directo a tu correo</h2>
			<?php brote_formulario_newsletter(); ?>
		</div>
	</section>
<?php endwhile; ?>

<?php get_footer(); ?>
