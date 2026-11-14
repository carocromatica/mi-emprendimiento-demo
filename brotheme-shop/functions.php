<?php
/**
 * functions.php — configuración del tema Brotheme Shop.
 *
 * Contenido: soporte del tema, menús, estilos y scripts, y pequeñas funciones
 * de ayuda que usan las plantillas (tiempo de lectura, paginación, formulario
 * del newsletter, redes sociales y menús de respaldo).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'BROTE_VERSION', '1.0.0' );

/* ----------------------------------------------------------
   1. Configuración básica
   ---------------------------------------------------------- */
function brote_configuracion() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'responsive-embeds' );

	add_image_size( 'brote-blog', 1200, 675, true ); // 16:9, como las fotos del blog.

	register_nav_menus( array(
		'principal' => 'Menú principal',
		'pie'       => 'Pie de página: columna 1',
		'pie-info'  => 'Pie de página: columna 2',
	) );
}
add_action( 'after_setup_theme', 'brote_configuracion' );

/* ----------------------------------------------------------
   2. Estilos y scripts
   ---------------------------------------------------------- */
function brote_assets() {
	$dir = get_template_directory();
	$uri = get_template_directory_uri();

	wp_enqueue_style(
		'brote-fuentes',
		'https://fonts.googleapis.com/css2?family=Bree+Serif&family=Source+Sans+3:wght@400;500;600;700&display=swap',
		array(),
		null
	);
	wp_enqueue_style( 'brote-estilo', get_stylesheet_uri(), array( 'brote-fuentes' ), filemtime( $dir . '/style.css' ) );

	wp_enqueue_script( 'brote-main', $uri . '/assets/js/main.js', array(), filemtime( $dir . '/assets/js/main.js' ), true );

	if ( is_front_page() ) {
		wp_enqueue_script( 'brote-home', $uri . '/assets/js/home.js', array(), filemtime( $dir . '/assets/js/home.js' ), true );
		wp_localize_script( 'brote-home', 'broteTheme', array( 'img' => $uri . '/assets/img/' ) );
	}

	if ( is_page_template( 'page-preguntas-frecuentes.php' ) || is_page( 'preguntas-frecuentes' ) ) {
		wp_enqueue_script( 'brote-faq', $uri . '/assets/js/faq.js', array(), filemtime( $dir . '/assets/js/faq.js' ), true );
	}
}
add_action( 'wp_enqueue_scripts', 'brote_assets' );

// Preconexión a Google Fonts para que la tipografía cargue más rápido.
function brote_preconnect( $urls, $relation ) {
	if ( 'preconnect' === $relation ) {
		$urls[] = 'https://fonts.googleapis.com';
		$urls[] = array( 'href' => 'https://fonts.gstatic.com', 'crossorigin' => 'anonymous' );
	}
	return $urls;
}
add_filter( 'wp_resource_hints', 'brote_preconnect', 10, 2 );

/* ----------------------------------------------------------
   3. Clases del body y menú
   ---------------------------------------------------------- */
// La portada del home usa la cabecera verde sobre el collage (clases has-hero e is-home del diseño).
function brote_body_class( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'has-hero';
		$classes[] = 'is-home';
	}
	return $classes;
}
add_filter( 'body_class', 'brote_body_class' );

// El diseño marca la página actual con aria-current="page" (no con clases).
function brote_menu_actual( $atts, $item ) {
	if ( in_array( 'current-menu-item', (array) $item->classes, true ) || in_array( 'current_page_item', (array) $item->classes, true ) ) {
		$atts['aria-current'] = 'page';
	}
	return $atts;
}
add_filter( 'nav_menu_link_attributes', 'brote_menu_actual', 10, 2 );

// Dirección del blog: la página de entradas si existe, o /blog/.
function brote_url_blog() {
	$id = (int) get_option( 'page_for_posts' );
	return $id ? get_permalink( $id ) : home_url( '/blog/' );
}

// Menú de respaldo: se ve mientras no se cree el menú en Apariencia > Menús.
function brote_menu_respaldo( $items, $clase ) {
	echo '<ul class="' . esc_attr( $clase ) . '">';
	foreach ( $items as $item ) {
		$actual = ! empty( $item['actual'] ) ? ' aria-current="page"' : '';
		echo '<li><a href="' . esc_url( $item['url'] ) . '"' . $actual . '>' . esc_html( $item['texto'] ) . '</a></li>'; // phpcs:ignore WordPress.Security.EscapeOutput
	}
	echo '</ul>';
}

function brote_menu_principal_respaldo() {
	$blog_activo = is_home() || is_singular( 'post' ) || is_category();
	brote_menu_respaldo( array(
		array( 'texto' => 'Inicio', 'url' => home_url( '/' ), 'actual' => is_front_page() ),
		array( 'texto' => 'Nosotros', 'url' => home_url( '/nosotros/' ), 'actual' => is_page( 'nosotros' ) ),
		array( 'texto' => 'Blog', 'url' => brote_url_blog(), 'actual' => $blog_activo ),
		array( 'texto' => 'Contacto', 'url' => home_url( '/contacto/' ), 'actual' => is_page( 'contacto' ) ),
	), 'navbar-links' );
}

function brote_menu_pie_respaldo() {
	brote_menu_respaldo( array(
		array( 'texto' => 'Inicio', 'url' => home_url( '/' ) ),
		array( 'texto' => 'Nosotros', 'url' => home_url( '/nosotros/' ) ),
		array( 'texto' => 'Blog', 'url' => brote_url_blog() ),
	), 'footer-links' );
}

function brote_menu_pie_info_respaldo() {
	brote_menu_respaldo( array(
		array( 'texto' => 'Contacto', 'url' => home_url( '/contacto/' ) ),
		array( 'texto' => 'Preguntas frecuentes', 'url' => home_url( '/preguntas-frecuentes/' ) ),
	), 'footer-links' );
}

/* ----------------------------------------------------------
   4. Ayudas para las plantillas
   ---------------------------------------------------------- */
function brote_img( $ruta ) {
	return esc_url( get_template_directory_uri() . '/assets/img/' . ltrim( $ruta, '/' ) );
}

// "4 min de lectura" calculado con ~200 palabras por minuto.
function brote_tiempo_lectura( $post_id = null ) {
	$texto = wp_strip_all_tags( get_post_field( 'post_content', $post_id ) );
	$min   = max( 1, (int) ceil( str_word_count( $texto ) / 200 ) );
	return $min . ' min de lectura';
}

// Primera categoría del artículo (nombre) para la etiqueta de las tarjetas.
function brote_categoria( $post_id = null ) {
	$cats = get_the_category( $post_id );
	return $cats ? $cats[0]->name : '';
}

// Color de fondo de la miniatura (se reparte entre las tarjetas).
function brote_tinte( $indice ) {
	$clases = array( 't-lima', 't-celadon', 't-pink', 't-mint' );
	return $clases[ $indice % count( $clases ) ];
}

// Paginación con el marcado del diseño (flechas y números).
function brote_paginacion() {
	global $wp_query;
	$total  = (int) $wp_query->max_num_pages;
	$actual = max( 1, (int) get_query_var( 'paged' ) );
	if ( $total < 2 ) {
		return;
	}
	$flecha = function ( $d ) {
		return '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' . $d . '"/></svg>';
	};
	echo '<nav class="pagination" aria-label="Páginas del blog">';
	if ( $actual > 1 ) {
		echo '<a class="page-arrow" href="' . esc_url( get_pagenum_link( $actual - 1 ) ) . '" aria-label="Página anterior">' . $flecha( 'M15 6l-6 6 6 6' ) . '</a>'; // phpcs:ignore WordPress.Security.EscapeOutput
	} else {
		echo '<a class="page-arrow" aria-disabled="true" aria-label="Página anterior">' . $flecha( 'M15 6l-6 6 6 6' ) . '</a>'; // phpcs:ignore WordPress.Security.EscapeOutput
	}
	for ( $i = 1; $i <= $total; $i++ ) {
		$activa = ( $i === $actual ) ? ' is-active" aria-current="page' : '';
		echo '<a class="page-num' . $activa . '" href="' . esc_url( get_pagenum_link( $i ) ) . '" aria-label="Página ' . (int) $i . '">' . (int) $i . '</a>'; // phpcs:ignore WordPress.Security.EscapeOutput
	}
	if ( $actual < $total ) {
		echo '<a class="page-arrow" href="' . esc_url( get_pagenum_link( $actual + 1 ) ) . '" aria-label="Página siguiente">' . $flecha( 'M9 6l6 6-6 6' ) . '</a>'; // phpcs:ignore WordPress.Security.EscapeOutput
	} else {
		echo '<a class="page-arrow" aria-disabled="true" aria-label="Página siguiente">' . $flecha( 'M9 6l6 6-6 6' ) . '</a>'; // phpcs:ignore WordPress.Security.EscapeOutput
	}
	echo '</nav>';
}

// Formulario de suscripción: usa el plugin Newsletter si está activo.
function brote_formulario_newsletter() {
	if ( shortcode_exists( 'newsletter_form' ) ) {
		echo do_shortcode( '[newsletter_form]' ); // phpcs:ignore WordPress.Security.EscapeOutput
		return;
	}
	if ( current_user_can( 'manage_options' ) ) {
		echo '<p class="privacy"><strong>Solo lo ves tú:</strong> instala y activa el plugin Newsletter para mostrar aquí el formulario de suscripción.</p>';
	} else {
		echo '<p><a class="btn-primary" href="' . esc_url( home_url( '/contacto/' ) ) . '">Escríbenos para recibir la guía</a></p>';
	}
}

// Íconos de redes sociales (el id de cada máscara SVG se vuelve único si el bloque aparece dos veces).
function brote_redes( $uid = 'a' ) {
	$redes = array(
		'ig' => array( 'Instagram', 'https://www.instagram.com/', '<g fill="none" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="13" y="13" width="22" height="22" rx="6.500"/><circle cx="24" cy="24" r="5.200"/></g><circle cx="30.600" cy="17.400" r="1.800" fill="#000"/>' ),
		'tt' => array( 'TikTok', 'https://www.tiktok.com/', '<g fill="none" stroke="#000" stroke-width="3.400" stroke-linecap="round" stroke-linejoin="round"><path d="M26.500 12.500v15.800a5.200 5.200 0 1 1-5.200-5.200"/><path d="M26.500 12.500c.5 3.600 2.900 6 6.600 6.500"/></g>' ),
		'fb' => array( 'Facebook', 'https://www.facebook.com/', '<path fill="#000" d="M26.500 37V25.800h4l.8-4.800h-4.800v-3c0-1.500.7-2.500 2.700-2.500H31.500v-4.200c-.6-.1-2-.3-3.500-.3-4 0-6.500 2.400-6.500 6.800V21H17.500v4.800h4V37z"/>' ),
	);
	echo '<nav class="social" aria-label="Redes sociales">';
	foreach ( $redes as $k => $r ) {
		$id = 'm-' . $k . '-' . $uid;
		printf(
			'<a href="%1$s" target="_blank" rel="noopener" aria-label="%2$s"><svg viewBox="0 0 48 48" width="56" height="56" aria-hidden="true"><mask id="%3$s"><rect width="48" height="48" fill="#fff"/>%4$s</mask><circle cx="24" cy="24" r="24" fill="currentColor" mask="url(#%3$s)"/></svg></a>',
			esc_url( $r[1] ),
			esc_attr( 'Brote en ' . $r[0] ),
			esc_attr( $id ),
			$r[2] // phpcs:ignore WordPress.Security.EscapeOutput -- SVG fijo del tema.
		);
	}
	echo '</nav>';
}

// Resumen más corto y con puntos suspensivos.
add_filter( 'excerpt_length', function () { return 28; } );
add_filter( 'excerpt_more', function () { return '…'; } );

// Un comentario con el marcado del diseño (.comment y .comment-meta).
function brote_comentario( $comment, $args, $depth ) {
	?>
	<li <?php comment_class(); ?> id="comment-<?php comment_ID(); ?>">
		<div class="comment">
			<span class="comment-meta"><strong><?php echo esc_html( get_comment_author( $comment ) ); ?></strong> · <?php echo esc_html( human_time_diff( get_comment_time( 'U' ), current_time( 'timestamp' ) ) ); ?></span>
			<?php if ( '0' === $comment->comment_approved ) : ?>
				<p class="comment-meta">Tu comentario está esperando aprobación.</p>
			<?php endif; ?>
			<?php comment_text(); ?>
			<?php comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'reply_text' => 'Responder' ) ) ); ?>
		</div>
	<?php
	// WordPress cierra el <li> solo.
}
