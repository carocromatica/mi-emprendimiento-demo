<?php
/**
 * page.php — una página con contenido del editor (por ejemplo Nosotros).
 */
get_header();
?>

<div class="container">
	<?php while ( have_posts() ) : the_post(); ?>
		<article <?php post_class( 'page-narrow' ); ?>>
			<h1><?php the_title(); ?></h1>
			<?php the_content(); ?>
		</article>
	<?php endwhile; ?>
</div>

<?php get_footer(); ?>
