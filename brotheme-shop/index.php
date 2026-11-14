<?php
/**
 * index.php — plantilla de respaldo de WordPress.
 * Muestra el blog (página de entradas), las categorías, las etiquetas y la búsqueda.
 */
get_header();
get_template_part( 'template-parts/blog' );
get_footer();
