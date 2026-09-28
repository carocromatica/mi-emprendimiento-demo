# Spec de desarrollo — Brote

> Guía: [Spec de desarrollo](../evaluacion/guias/fase-2-specs/07-spec-de-desarrollo.md)

## Insumos

Esta spec se entrega a un asistente de código (Claude Code o Antigravity) junto con:

- **[`DESIGN.md`](../DESIGN.md):** de ahí salen todos los valores de color, tipografía, espaciado y radios.
- **El código exportado de Stitch** de cada pantalla: se usa como referencia visual y de estructura, pero el resultado final debe cumplir esta spec (HTML + CSS propio, sin Tailwind ni otras librerías).

### Prompt para el asistente

```text
Lee DESIGN.md, docs/09-spec-diseno.md y docs/10-spec-desarrollo.md.
En la carpeta stitch/ está el código exportado de Stitch de cada pantalla.
Construye el sitio siguiendo exactamente docs/10-spec-desarrollo.md:
solo HTML y CSS, la estructura de archivos y la navegación definidas,
las variables de :root con los valores de DESIGN.md y la estructura
semántica de cada página. Usa el código de Stitch solo como referencia
visual. Empieza por css/styles.css y index.html, y después sigue el
orden del flujo de compra. Al terminar, revisa cada criterio de
aceptación y dime cuáles se cumplen y cuáles no.
```

## 1. Estructura de archivos

```text
mi-emprendimiento-demo/
├── index.html                  ← landing
├── tienda.html
├── producto.html
├── carrito.html
├── blog.html
├── articulo.html
├── nosotros.html
├── contacto.html
├── preguntas-frecuentes.html
├── terminos.html
├── privacidad.html
├── 404.html
├── css/
│   └── styles.css
├── img/
│   ├── productos/
│   ├── blog/
│   └── marca/                  ← logo e imágenes del hero
├── stitch/                     ← código exportado de Stitch (solo referencia)
├── DESIGN.md
├── docs/
└── evaluacion/
```

- Nombres de archivos en minúsculas, con guiones, sin espacios ni tildes.
- Imágenes en `.jpg` (fotos) o `.svg` (logo e íconos), de máximo 300 KB cada una.

## 2. Páginas y navegación

- **Navbar en todas las páginas:** logo (lleva a `index.html`), Tienda, Blog, Nosotros, Contacto, buscador y carrito (lleva a `carrito.html`).
- **Footer en todas las páginas:** Preguntas frecuentes, Términos y condiciones, Política de privacidad, Contacto e Instagram.

| Desde | Elemento | Lleva a |
|---|---|---|
| index.html | Botón "Ver productos" del hero | tienda.html |
| index.html | Botón "Leer guías" del hero | blog.html |
| index.html | Card de "Plantas fáciles para empezar" | tienda.html |
| index.html | Card de artículo | articulo.html |
| tienda.html | Botón "Ver producto" de cada card | producto.html |
| producto.html | Botón "Agregar al carrito" | carrito.html |
| producto.html | Botón "Consultar por WhatsApp" | https://wa.me/56900000000 |
| producto.html | Enlace "Tienda" de la ruta de navegación | tienda.html |
| carrito.html | Enlace "Seguir comprando" | tienda.html |
| blog.html | Card de artículo | articulo.html |
| blog.html | Botón de síntoma (por ejemplo, "Hojas amarillas") | articulo.html |
| tienda.html | Botón "Agregar kit" | carrito.html |
| articulo.html | Producto recomendado | producto.html |
| articulo.html | Botón "Compartir por WhatsApp" | https://wa.me/?text= + título del artículo |
| 404.html | Botones "Ir al inicio" y "Ver la tienda" | index.html y tienda.html |

Las categorías de la tienda y del blog no son páginas aparte: son chips dentro de `tienda.html` y `blog.html`. Como el sitio es solo HTML y CSS, en esta versión los chips se ven pero no filtran (prototipo visual, según `04-tecnologias.md`).

## 3. Estructura semántica

Todas las páginas comparten:

```html
<header>  → navbar (con <nav>)
<main>    → contenido de la página
<footer>  → footer
```

Cada página tiene un solo `<h1>`.

### index.html

```html
<main>
  <section class="hero">            h1 + bajada + botones + imagen
  <section class="easy-plants">     h2 "Plantas fáciles para empezar" + 3 cards
  <section class="lead-form">       h2 con la oferta + <form>
  <section class="latest-posts">    h2 "Del blog" + 3 <article> (cards)
</main>
```

### tienda.html

```html
<main>
  <section class="shop-header">    h1 "Tienda" + buscador (<form role="search">) + chips
  <section class="kits">           h2 "Kits para empezar" + 3 <article>
  <aside class="filters">          h2 "Filtrar" + casillas + precio
  <section class="product-grid">   cada product card es un <article>
</main>
```

### producto.html

```html
<main>
  <nav class="breadcrumb">         ruta de navegación
  <section class="product-detail"> imagen + h1 + precio + <form> (formato) + botones
  <section class="usage-guide">    h2 "Guía de uso" + 3 bloques
  <section class="related">        h2 "Productos relacionados" + 3 <article>
</main>
```

### carrito.html

```html
<main>
  <h1>Tu carrito</h1>
  <section class="cart-items">     lista de productos
  <aside class="cart-summary">     subtotal + <form> de comuna + total + botón
</main>
```

### blog.html

```html
<main>
  <h1>Blog</h1>
  <section class="diagnosis">      h2 "¿Qué le pasa a tu planta?" + 3 enlaces
  chips de categoría
  <section class="post-grid">      cada card es un <article>
</main>
```

### articulo.html

```html
<main>
  <article>
    <header>                        categoría + h1 + tiempo de lectura + imagen
    contenido (<p>, <h2>, <ul>)
    <aside class="recommended">     producto recomendado
    <section class="share">         botones de compartir
    <section class="comments">      h2 "Comentarios" + lista + <form>
  </article>
  <section class="lead-form">       formulario de la guía de cuidados
</main>
```

## 4. Organización del CSS

Un solo archivo, `css/styles.css`, ordenado en este orden: variables, base, componentes, páginas, responsive. Los valores de las variables son los tokens de `DESIGN.md`; si se cambia un valor, se cambia primero en `DESIGN.md`.

```css
:root {
  /* Colores */
  --color-primary: #3F5E4A;
  --color-primary-hover: #34503F;
  --color-primary-active: #2A4033;
  --color-secondary: #EDE4D3;
  --color-accent: #C0643A;
  --color-accent-strong: #A9552F;
  --color-bg: #FBF8F2;
  --color-text: #2B2B28;
  --color-text-soft: #6B675E;
  --color-border: #E2D9C6;
  --color-border-strong: #D9CFBB;
  --color-disabled: #CFCAC0;
  --color-success: #2F7A4A;
  --color-error: #B23A2E;

  /* Tipografía */
  --font-title: 'Fraunces', serif;
  --font-body: 'Inter', sans-serif;

  /* Espaciados */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Radios y sombras */
  --radius-card: 8px;
  --radius-pill: 999px;
  --shadow-hover: 0 4px 12px rgba(0, 0, 0, .08);
}
```

- **Clases:** en inglés, en minúsculas y con guiones: `.navbar`, `.hero`, `.btn-primary`, `.btn-secondary`, `.product-card`, `.article-card`, `.chip`, `.chip.is-active`, `.lead-form`, `.usage-guide`, `.kit-card`, `.diagnosis`, `.cart-summary`, `.footer`.
- **Mobile first:** los estilos base son para celular; desde 768 px (tablet) y desde 1024 px (desktop) se agregan media queries.
- **Fuentes:** Fraunces e Inter se cargan desde Google Fonts con un `<link>` en el `<head>` de cada página.

## 5. Criterios de aceptación

**Navegación**
- [ ] La navbar y el footer son iguales en todas las páginas.
- [ ] Se puede completar el flujo de compra: landing → tienda → ficha de producto → carrito.
- [ ] Se puede completar el flujo de contenido: blog → artículo → ficha de producto.
- [ ] Todas las páginas del mapa de sitio existen, incluidas las obligatorias.
- [ ] No hay enlaces rotos.

**Funcionalidades**
- [ ] La landing tiene la sección "Plantas fáciles para empezar" y el formulario de correo con la oferta.
- [ ] La tienda tiene buscador, chips de categoría, filtros por tipo de planta y precio, y la fila de kits.
- [ ] El blog tiene el bloque "¿Qué le pasa a tu planta?" y cada síntoma lleva a un artículo.
- [ ] La ficha de producto muestra la guía de uso, el selector de formato y los botones "Agregar al carrito" y "Consultar por WhatsApp".
- [ ] El botón de WhatsApp abre wa.me.
- [ ] El carrito muestra el campo de comuna para calcular el despacho.
- [ ] El artículo tiene producto recomendado, botones para compartir, comentarios y formulario de correo.

**Diseño**
- [ ] Todos los colores del CSS salen de las variables de `:root`, y sus valores coinciden con `DESIGN.md`.
- [ ] El sitio no usa Tailwind ni el CSS exportado de Stitch.
- [ ] Los títulos usan Fraunces y los textos Inter.
- [ ] El precio es visible en todas las product cards.
- [ ] El nombre de los productos ocupa máximo 2 líneas.
- [ ] Los botones y las cards tienen estado hover.

**Responsive**
- [ ] En mobile, la tienda y el blog muestran 1 elemento por fila; en tablet, 2; en desktop, 3.
- [ ] En mobile la navbar muestra el menú hamburguesa y el carrito.
- [ ] No hay scroll horizontal en 375 px de ancho.

**Accesibilidad y publicación**
- [ ] Todas las imágenes tienen `alt` descriptivo.
- [ ] Cada página tiene un solo `h1`.
- [ ] Los campos de los formularios tienen `<label>`.
- [ ] El sitio está publicado en GitHub Pages.
