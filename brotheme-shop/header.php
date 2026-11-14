<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
	<div class="container navbar">
		<a class="navbar-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo brote_img( 'marca/logo-oscuro.png' ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>, ir al inicio" width="107" height="36"></a>
		<span class="navbar-spacer"></span>
		<button type="button" class="cart-link navbar-cart navbar-search" aria-label="Buscar" aria-expanded="false" aria-controls="search-drawer"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg></button>
		<input type="checkbox" id="menu-toggle" class="menu-toggle">
		<label for="menu-toggle" class="menu-button" aria-label="Abrir menú"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></label>
		<div class="navbar-menu">
			<nav aria-label="Principal">
				<?php
				wp_nav_menu( array(
					'theme_location' => 'principal',
					'menu_class'     => 'navbar-links',
					'container'      => false,
					'fallback_cb'    => 'brote_menu_principal_respaldo',
				) );
				?>
			</nav>
			<a class="navbar-account" href="<?php echo esc_url( home_url( '/contacto/' ) ); ?>"><span class="account-label-mobile">Contacto</span><span class="account-label-desktop">Escríbenos<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
		</div>
	</div>

	<div class="search-drawer" id="search-drawer" hidden>
		<div class="search-panel">
			<div class="container">
				<form class="nav-search search-big" role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
					<label for="buscar-nav" class="visually-hidden">Buscar en el blog</label>
					<input type="search" id="buscar-nav" name="s" placeholder="¿Qué quieres saber de tus plantas?" autocomplete="off" value="<?php echo esc_attr( get_search_query() ); ?>">
					<button type="submit" class="nav-search-btn" aria-label="Buscar"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg></button>
				</form>
				<button type="button" class="search-close" data-search-close aria-label="Cerrar buscador"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
				<?php $cats = get_categories( array( 'hide_empty' => true ) ); ?>
				<?php if ( $cats ) : ?>
					<p class="search-title">Temas del blog</p>
					<ul class="search-cats">
						<?php foreach ( $cats as $cat ) : ?>
							<li><a href="<?php echo esc_url( get_category_link( $cat ) ); ?>"><?php echo esc_html( $cat->name ); ?></a></li>
						<?php endforeach; ?>
					</ul>
				<?php endif; ?>
			</div>
		</div>
		<div class="search-scrim" data-search-close></div>
	</div>
</header>

<main id="contenido">
