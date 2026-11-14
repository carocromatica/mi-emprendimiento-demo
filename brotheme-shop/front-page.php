<?php
/**
 * front-page.php — el HOME del sitio (portada, blog y newsletter).
 * Se muestra si en Ajustes > Lectura eliges "Una página estática" como página de inicio.
 * Las formas y el collage de la portada se animan con assets/js/home.js.
 */
get_header();

// Rosetas de ejemplo: home.js las reemplaza por unas al azar en cada carga.
$rosetas_izq = array( 'echeveria-lilacina', 'graptopetalum-pentandrum', 'aeonium-canariense', 'graptopetalum-bellum', 'aeonium-haworthii' );
$rosetas_der = array( 'echeveria-elegans', 'sedum-adolphi', 'echeveria-agavoides', 'sedum-palmeri-azul', 'sedum-dasyphyllum' );
?>

<div class="hero-band">
	<div class="hero-shapes" aria-hidden="true">
		<span class="wave wave-front"></span>
		<span class="hero-white"></span>
	</div>
	<div class="container">
		<section class="hero-home">
			<div>
				<h1>Plantas que encantan y <span class="wavy-word">poco demandan</span></h1>
				<p class="lead"><strong>Suculentas resistentes y fáciles de cuidar,</strong> lindas y perfectas para darle vida a tu escritorio, dormitorio o rincón favorito.</p>
				<div class="hero-actions">
					<a class="btn-primary" href="<?php echo esc_url( brote_url_blog() ); ?>"><span class="chapita"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6.500c3-1.200 6-1 9 1V20c-3-2-6-2.200-9-1z"/><path d="M21 6.500c-3-1.200-6-1-9 1V20c3-2 6-2.200 9-1z"/></svg></span>Leer el blog</a>
					<a class="btn-secondary" href="#newsletter"><span class="chapita"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 15h7l-.9 6H9.4z"/><path d="M12 15V9.5"/><path d="M12 11.5c0-3 2-5 5.500-5 0 3.200-2.200 5-5.500 5z"/><path d="M12 13c0-2.500-1.600-4-4.500-4 0 2.700 1.700 4 4.500 4z"/></svg></span>Guía gratis</a>
				</div>
				<p class="pickup">Tienda en Villa Alemana, V Región. Pronto, <strong>envíos a todo Chile</strong></p>
			</div>
			<div class="hero-media">
				<div class="collage" role="img" aria-label="Collage de suculentas en macetas de terracota y rosetas vistas desde arriba">
					<span class="blob-lime" aria-hidden="true"></span>
					<span class="blob-mint" aria-hidden="true"></span>
					<div class="item rosette xl rL"><span class="disc"></span><img class="plant" src="<?php echo brote_img( 'portada/echeveria-lilacina.webp' ); ?>" alt=""></div>
					<div class="item rosette s rS1"><span class="disc"></span><img class="plant" src="<?php echo brote_img( 'portada/aeonium-canariense.webp' ); ?>" alt=""></div>
					<div class="item rosette m rM1 circled"><span class="disc"></span><img class="plant" src="<?php echo brote_img( 'portada/sedum-adolphi.webp' ); ?>" alt=""></div>
					<div class="item rosette m rM2"><span class="disc"></span><img class="plant" src="<?php echo brote_img( 'portada/graptopetalum-bellum.webp' ); ?>" alt=""></div>
					<div class="item rosette s rS2"><span class="disc"></span><img class="plant" src="<?php echo brote_img( 'portada/echeveria-agavoides.webp' ); ?>" alt=""></div>
					<div class="item pot m pM"><span class="disc"></span><img class="plant" src="<?php echo brote_img( 'portada/maceta-aeonium-arboreum.webp' ); ?>" alt=""></div>
					<div class="item pot s pS1 circled"><span class="disc"></span><img class="plant" src="<?php echo brote_img( 'portada/maceta-graptopetalum-amethystinum.webp' ); ?>" alt=""></div>
					<div class="item pot s pS2"><span class="disc"></span><img class="plant" src="<?php echo brote_img( 'portada/maceta-echeveria-laui.webp' ); ?>" alt=""></div>
				</div>
			</div>
		</section>
	</div>
</div>

<section class="section blog">
	<div class="container">
		<h2 class="section-title wavy">Blog</h2>
		<?php
		$ultimas = new WP_Query( array(
			'posts_per_page'      => 3,
			'ignore_sticky_posts' => true,
		) );
		?>
		<?php if ( $ultimas->have_posts() ) : ?>
			<div class="grid-3">
				<?php while ( $ultimas->have_posts() ) : $ultimas->the_post(); ?>
					<article class="blog-card">
						<?php if ( has_post_thumbnail() ) : ?>
							<a href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true"><?php the_post_thumbnail( 'brote-blog', array( 'loading' => 'lazy', 'alt' => '' ) ); ?></a>
						<?php endif; ?>
						<span class="label-caps"><?php echo esc_html( brote_categoria() ); ?></span>
						<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
						<p><?php echo esc_html( get_the_excerpt() ); ?></p>
						<a class="more" href="<?php the_permalink(); ?>">Leer más &gt;&gt;</a>
					</article>
				<?php endwhile; wp_reset_postdata(); ?>
			</div>
		<?php else : ?>
			<p>Pronto publicaremos las primeras notas de cuidados.</p>
		<?php endif; ?>
	</div>
</section>

<section class="newsletter" id="newsletter">
	<div class="news-collage news-left" aria-hidden="true">
		<?php foreach ( $rosetas_izq as $i => $r ) : ?>
			<div class="item rosette nl<?php echo (int) $i + 1; ?>"><img class="plant" src="<?php echo brote_img( 'portada/' . $r . '.webp' ); ?>" alt="" loading="lazy"></div>
		<?php endforeach; ?>
	</div>
	<div class="news-collage news-right" aria-hidden="true">
		<?php foreach ( $rosetas_der as $i => $r ) : ?>
			<div class="item rosette nr<?php echo (int) $i + 1; ?>"><img class="plant" src="<?php echo brote_img( 'portada/' . $r . '.webp' ); ?>" alt="" loading="lazy"></div>
		<?php endforeach; ?>
	</div>
	<div class="container newsletter-inner">
		<div class="newsletter-text">
			<h2>Un poquito de verde en tu correo</h2>
			<p class="newsletter-lead">Suscríbete a Brote y recibe guías para cuidar tus plantas sin complicarte y ofertas para hacer crecer tu rincón verde.</p>
			<?php brote_formulario_newsletter(); ?>
		</div>
	</div>
</section>

<?php get_footer(); ?>
