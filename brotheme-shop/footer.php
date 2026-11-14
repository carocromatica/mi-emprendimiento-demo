</main>

<footer class="site-footer footer-home">
	<div class="container footer-grid">
		<div>
			<a class="footer-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo brote_img( 'marca/logo-claro.png' ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>, ir al inicio" width="119" height="40"></a>
			<p>Plantas bonitas para gente ocupada. En Brote encontrarás suculentas, accesorios y consejos para llenar de verde tus espacios, sin complicarte.</p>
			<?php brote_redes( 'pie' ); ?>
		</div>
		<nav aria-label="Información">
			<div class="footer-cols">
				<?php
				wp_nav_menu( array(
					'theme_location' => 'pie',
					'menu_class'     => 'footer-links',
					'container'      => false,
					'fallback_cb'    => 'brote_menu_pie_respaldo',
				) );
				wp_nav_menu( array(
					'theme_location' => 'pie-info',
					'menu_class'     => 'footer-links',
					'container'      => false,
					'fallback_cb'    => 'brote_menu_pie_info_respaldo',
				) );
				?>
			</div>
		</nav>
	</div>
</footer>
<div class="footer-copy"><div class="container">&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. Todos los derechos reservados.</div></div>

<?php wp_footer(); ?>
</body>
</html>
