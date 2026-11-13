---
version: alpha
name: Brote
description: Design system de Brote, tienda de jardinería para personas que están empezando con plantas.
colors:
  primary: "#305941"
  primary-hover: "#284A36"
  primary-active: "#203B2B"
  on-primary: "#FFFFFF"
  secondary: "#E6ECB7"
  on-secondary: "#1C2B22"
  secondary-soft: "#E7E9CD"
  tertiary: "#A93B6A"
  tertiary-hover: "#92315A"
  on-tertiary: "#FFFFFF"
  accent-green: "#4C8D62"
  accent-olive: "#ACB84A"
  accent-pink: "#FFEFF7"
  accent-mint: "#E8F3EC"
  celadon: "#BBDDC6"
  hero-cream: "#F9F6EC"
  lime-bright: "#D3E37A"
  neutral: "#FEFDF9"
  surface: "#FFFFFF"
  on-surface: "#1C2B22"
  on-surface-variant: "#5E6B63"
  footer: "#3A5745"
  footer-strip: "#27744A"
  outline: "#D5DBBE"
  disabled: "#CFD3CB"
  on-disabled: "#4B544E"
  success: "#2F7A4A"
  error: "#B23A2E"
typography:
  headline-display:
    fontFamily: Bree Serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline-display-mobile:
    fontFamily: Bree Serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.1
  headline-lg:
    fontFamily: Bree Serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
  headline-lg-mobile:
    fontFamily: Bree Serif
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
  headline-md:
    fontFamily: Bree Serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
  headline-md-mobile:
    fontFamily: Bree Serif
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.25
  title-md:
    fontFamily: Bree Serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.2
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
  label-sm:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.06em
rounded:
  md: 8px
  lg: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  gutter-mobile: 16px
  margin: 32px
  margin-mobile: 16px
  max-width: 1200px
components:
  navbar:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    height: 72px
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "{colors.tertiary-hover}"
    textColor: "{colors.on-tertiary}"
  button-primary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.disabled}"
    textColor: "{colors.on-disabled}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary-hover:
    backgroundColor: "{colors.accent-mint}"
    textColor: "{colors.primary}"
  card-product:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  tag-plant:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  tag-offer:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 8px 16px
  chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 18px
    height: 56px
  message-success:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.success}"
    typography: "{typography.body-sm}"
  message-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
  card-article:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.title-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  card-kit:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  category-circle:
    backgroundColor: "{colors.accent-pink}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
  button-hero-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 0 32px 0 14px
    height: 64px
  button-hero-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 0 32px 0 14px
    height: 64px
  button-hero-secondary-hover:
    backgroundColor: "{colors.lime-bright}"
    textColor: "{colors.primary}"
  navbar-account:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    width: 156px
    height: 168px
  footer-strip:
    backgroundColor: "{colors.footer-strip}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    padding: "{spacing.md}"
  band-section:
    backgroundColor: "{colors.secondary-soft}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
  box-lead-form:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  box-usage-guide:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  box-cart-summary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.footer}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xl}"
---

# Brote — Design system

## Overview

Brote es una tienda online de jardinería para personas que están empezando con plantas: suculentas, cactus, maceteros, sustratos, fertilizantes y herramientas. Su usuaria principal es Camila, 29 años, que vive en un departamento con balcón, compra desde el celular de noche, quiere una casa bonita con plantas y necesita que la guíen para que no se le mueran.

El estilo es **fresco, vivo, amable y juguetón**: fondo casi blanco, verdes profundos, toques de rosa fucsia y bandas verde lima suaves. Mucho espacio en blanco, fotos de plantas sanas recortadas sobre círculos de colores y pequeñas ilustraciones (hojas, líneas onduladas) que dan un aire hecho a mano. Nada técnico ni frío: cuidar plantas no es complicado.

## Colors

La paleta se armó en Canva (proyecto "Proyecto brote") y se ajustó con los colores reales del diseño.

- **Primary (#305941):** Verde bosque. Títulos, enlaces, logo, íconos y texto de marca. Contraste 7.8:1 sobre el fondo.
- **Footer (#3A5745):** Verde bosque un poco más claro, solo para el fondo del footer.
- **Footer-strip (#27744A):** Verde más vivo de la franja del copyright que cierra la página (texto blanco).
- **Tertiary (#A93B6A):** Fucsia. Es el color de la acción: botones principales ("Comprar plantitas", "Agregar al carrito", "Suscríbete"), precios destacados, nombre científico, categorías y enlaces de guía. Contraste 5.9:1 sobre el fondo y 6.0:1 con texto blanco encima.
- **Secondary (#E6ECB7):** Verde lima suave. Bandas de sección (Destacados del mes, newsletter), caja "Descarga nuestra guía" y botón "Mi cuenta".
- **Secondary-soft (#E7E9CD):** Lima grisáceo para círculos de categoría y fondos secundarios.
- **Accent-green (#4C8D62):** Verde medio. Decorativo (ilustraciones, íconos grandes, subrayados ondulados) y borde de los campos de texto. Contraste 3.9:1: nunca se usa para texto normal ni como fondo de texto blanco.
- **Accent-olive (#ACB84A):** Verde oliva. Solo decorativo (líneas onduladas, círculo del hero).
- **Accent-pink (#FFEFF7):** Rosa pálido. Uno de los círculos del collage del hero, círculos detrás de las secciones y fondos de categorías.
- **Accent-mint (#E8F3EC):** Menta pálido. Círculos de categorías y hover de botones secundarios.
- **Lima vivo (#D3E37A):** Variante más saturada del verde lima (`secondary`). Es el segundo blob del collage del hero, que asoma por arriba, a la izquierda o a la derecha del blob oliva. Solo decorativo.
- **Crema del hero (#F9F6EC):** Crema un poco más oscuro que el `neutral` (#FEFDF9). Es el fondo claro del hero; distingue el hero del blanco de la sección de abajo. Texto casi negro 13.8:1 encima.
- **Celadón (#BBDDC6):** Verde celadón claro. Es uno de los dos círculos de color del collage del hero (el otro es el rosa pálido). Solo decorativo.
- **Neutral (#FEFDF9):** Blanco cálido. Fondo general del sitio.
- **On-surface (#1C2B22):** Verde casi negro con tinte verde para textos. Contraste 14.5:1.
- **On-surface-variant (#5E6B63):** Gris verdoso para textos secundarios. Contraste 5.5:1.
- **Outline (#D5DBBE):** Bordes de cards, inputs y separadores.
- **Success (#2F7A4A)** y **Error (#B23A2E):** Mensajes de confirmación y errores de formulario.

Proporción de uso por pantalla: 60 % neutro y blanco, 25 % verde lima y rosa pálido (bandas y círculos), 15 % verde bosque y fucsia.

## Typography

Dos familias de Google Fonts:

- **Bree Serif** (serif redondeada y amable, la del logo) para títulos, nombres de productos y títulos de artículos.
- **Source Sans 3** (sans serif humanista muy legible en pantallas pequeñas) para textos, botones, etiquetas y formularios.

Escala: `headline-display` para el h1 (68px en desktop, 44px en tablet y 46px en mobile en la portada; la frase final va subrayada con una línea ondulada verde oliva), `headline-lg` para h2 (32px / 28px), `headline-md` para h3 (24px / 20px), `title-md` para nombres de productos y títulos de cards, `body-md` para párrafos, `label-md` para botones y `label-sm` para categorías (en fucsia o verde bosque). Cada pantalla tiene un solo h1.

## Layout

- **Grilla:** contenido centrado con ancho máximo de 1200px y márgenes laterales de 32px (16px en mobile).
- **Espaciado:** escala fija de 4, 8, 16, 24, 32, 48 y 64px. Entre secciones, 64px en desktop y 48px en mobile. Padding interno de tarjetas, 16px. Separación entre tarjetas, 24px (16px en mobile).
- **Breakpoints (mobile first):** mobile hasta 767px, tablet de 768 a 1023px, desktop desde 1024px.
- **Estructura de la home:** hero con plantas sobre blobs y dos botones (comprar y descargar la guía); fila de 6 categorías en círculos (Suculentas, Cactus, Maceteros, Sustratos, Fertilizantes, Herramientas); producto recomendado (foto + ficha); banda lima "Destacados del mes" con 4 cards; blog con 3 artículos; newsletter; footer.
- **Títulos de sección:** centrados, con una línea ondulada verde oliva a cada lado.
- **Columnas:** destacados 4 en desktop, 2 en tablet, 1 en mobile; blog 3 / 2 / 1; categorías 6 / 3 / 2.
- **Mobile:** la navbar muestra logo, carrito y menú hamburguesa; en el hero y en el producto recomendado, la imagen va arriba y el texto abajo. Nunca hay scroll horizontal en la página.

## Elevation & Depth

Diseño sin sombras. La profundidad sale de **capas de color**: bordes ondulados (la misma onda de los títulos de sección) entre las bandas y la página. Los bordes de las cards son de 1px color outline. Las únicas sombras son la de hover en tarjetas (`0 4px 12px rgba(0,0,0,.08)`) y la suave de las plantas del collage. Al pasar el mouse, los enlaces y botones suben 3px (ver Components).

## Shapes

Formas suaves y redondeadas: **píldora** (`rounded.full`) en botones, chips y círculos de categoría (los campos de texto y los botones del hero usan 8px); **8px** (`rounded.md`) en cards, imágenes e inputs de formulario; **24px** (`rounded.lg`) en bandas y cajas grandes como la de la guía gratis. Las líneas onduladas son un detalle decorativo y siempre van en verde oliva.

## Components

### Navbar

**Es la misma navbar en las 12 páginas.** Orden fijo, de izquierda a derecha: logo "brote", enlaces **Inicio, Nosotros, Blog y Tienda**, chapita de búsqueda, chapita del carrito y el bloque de cuenta; en móvil el menú reúne los enlaces y "Mi cuenta". En desktop y tablet parte lima y pasa a blanco al hacer scroll; **en móvil (celular) es blanco desde el inicio**, con las chapitas y el botón de cuenta en lima (`js/buscador.js`) y marca la página actual con negrita y subrayado fucsia (Contacto, que no está en el menú, se alcanza desde el footer y el bloque de cuenta). El bloque de cuenta cuelga 168px solo en la portada; en las demás páginas mide lo mismo que el menú (79px, una sola línea), igual que al hacer scroll en la portada. Detalle: botón "Mi cuenta" en píldora lima; ícono de carrito. El enlace de la sección actual va en negrita y subrayado en fucsia. Fondo neutro; una franja verde oliva fina cierra el borde superior de la página.

En la portada la navbar parte verde lima (`secondary`), igual que el hero, y pasa a blanco con borde `outline` al hacer scroll (transición de .25s). Mientras es lima, "Mi cuenta" y el carrito van en blanco para no fundirse; al pasar a blanco vuelven a lima. En desktop (portada) "Mi cuenta" se reemplaza por **"Crea tu cuenta"**: un bloque verde bosque de 156 × 168px pegado al borde superior de la pantalla (cubre la franja oliva), con las esquinas inferiores de 24px, texto Bree Serif blanco abajo y una flecha. Al pasar el mouse se oscurece (`primary-hover`). Se queda fijo con el menú y, al hacer scroll, baja al alto exacto del menú (79px) y el texto pasa a una sola línea ("Crea tu cuenta →"). En móvil se mantiene el botón "Mi cuenta".

**Sesión iniciada:** el bloque de cuenta cambia de verde bosque a **fucsia** (`accent`, blanco encima: 6:1), saluda por el nombre ("Hola, Camila" en Bree Serif, con "Mi cuenta" y la flecha debajo; el nombre largo se parte en líneas) y al pasar el mouse se oscurece un 15%. Al hacer scroll baja a una sola línea ("Hola, Camila →"). En móvil el botón "Mi cuenta" también va fucsia. Como el sitio es estático, la demo se activa con `?sesion=1` en la URL (`?sesion=0` la apaga; se recuerda durante la visita en `sessionStorage`, lógica en `js/buscador.js`); en WordPress lo decidirá el usuario conectado.

**Buscador:** un ícono de lupa dentro de una **chapita** circular, igual que la del carrito (blanco sobre el lima de la portada; lima sobre blanco al hacer scroll o en las demás páginas), justo antes del carrito. Al presionarlo se abre un **panel bajo la navbar** (`.search-drawer`, en todas las páginas, con `js/buscador.js`): fondo blanco, un campo grande (68px de alto, texto de 22px, esquinas de 8px, borde `accent-green`, lupa a la izquierda; se enfoca solo), un botón de cerrar en chapita lima y debajo el título "Categorías" con la lista de las 6 categorías (Suculentas, Cactus, Maceteros, Sustratos, Fertilizantes y Herramientas), cada una con su ícono redondo de 48px, en 2 columnas en móvil y 3 desde tablet. El resto de la página se cubre con un velo verde oscuro al 45%. Se cierra con la X, Esc o tocando el velo, y devuelve el foco a la chapita (`aria-expanded` y `aria-controls`). El formulario envía a `tienda.html?q=…` y la chapita queda en verde bosque mientras el panel está abierto.

### Botones

- **button-primary:** fucsia con texto blanco, píldora. Un solo botón principal por sección. Hover más oscuro (`tertiary-hover`), active en verde bosque, disabled en gris sin cursor de mano.
- **button-secondary:** fondo blanco, borde de 1.5px y texto verde bosque (o fucsia en las cards de producto); hover con fondo menta.
- **Excepción, botones del hero** (`button-hero-primary` y `button-hero-secondary`): "Comprar plantitas" (fucsia) y "Guías gratis" (lima `secondary` sin borde, texto verde bosque; hover en `lime-bright`). Van uno al lado del otro, del mismo alto (64px), con texto de 19px y esquinas de 8px (`rounded.md`) en vez de píldora. Cada uno lleva a la izquierda una chapita circular de 38px con un ícono de línea de 1.8px, igual que el carrito y la lupa: en el principal, una plantita en maceta fucsia sobre rosa pálido (`accent-pink`); en el secundario, un libro abierto verde bosque sobre blanco. En móvil se apilan a ancho completo.
- El texto de los botones siempre es un verbo: "Comprar plantitas", "Agregar al carrito", "Suscríbete a nuestras novedades".

### Enlaces y botones: movimiento al pasar el mouse

Todos los enlaces y botones **suben 3px** al pasar el mouse (`translate: 0 -3px`, transición de .2s `ease-out`) y vuelven a su lugar al salir; al presionarlos bajan a -1px. Aplica a botones primarios y secundarios, chips, enlaces de la navbar, del footer y de texto, "Leer más", migas de pan, el ícono del carrito y las redes sociales. Se suma al cambio de color que ya tiene cada uno (hover de fondo, subrayado o color).

- Se usa `translate` y no `margin` ni `top`, para que el movimiento no empuje el contenido de alrededor.
- Los enlaces dentro de un párrafo son `inline-block` para poder moverse.
- No se mueven los botones deshabilitados ni "Crea tu cuenta" en desktop, que está pegado al borde superior de la pantalla (en móvil, "Mi cuenta" sí sube).
- Con `prefers-reduced-motion` no hay movimiento: queda solo el cambio de color.

### Hero

Título en `headline-display` verde bosque con la frase final ("poco demandan") subrayada con línea ondulada verde oliva, bajada con negritas en palabras clave, dos botones (comprar y descargar la guía), la línea de retiro en tienda y envíos, y a la derecha un collage de plantas. El fondo claro es el crema `hero-cream` (#F9F6EC); "Conoce nuestros productos" va debajo en blanco (`surface`) y su título asoma sobre el pliegue en desktop. El h1 mide 68px en desktop, 44px en tablet y 46px en mobile.

#### Fondo con movimiento

- El hero va sobre una ola verde lima (`secondary`) a todo el ancho de la pantalla, con un borde inferior orgánico. En desktop es sinuosa: el borde está al 15 % del alto de la pantalla a la izquierda y al 50 % a la derecha, y el resto va sobre blanco; en móvil cubre todo el hero. Deriva lentamente en horizontal.
- Detrás de las plantas va un blob verde oliva (`accent-olive`) de contorno sinuoso que se mece despacio. Vive dentro del collage para coincidir siempre con las plantas.
- Una base blanca (`.hero-white`) sube con una ola hacia la derecha por detrás de los blobs y las plantas, sin recortarlos nunca, para unir el crema del hero con el blanco de la sección de abajo.
- Las formas son aleatorias: el contorno del blob y los bordes de las olas se generan con JavaScript en cada carga, siempre dentro de los rangos indicados. Sin JS se ven las formas fijas del CSS.
- Todo es decorativo (`aria-hidden`), queda detrás del texto y el fucsia no se usa en las formas: está reservado a las acciones.

#### Collage de plantas

Solo en tablet y desktop; en móvil se oculta y el hero queda con texto y botones.

- **Plantas:** 8 suculentas sobre el blob oliva y un segundo blob lima vivo (`lime-bright`) más pequeño, que asoma por arriba, a la izquierda o a la derecha del blob oliva. Tamaños como porcentaje del ancho del collage: S 22 %, M 30 %, L 40 % y XL 52 % (L está definido pero sin uso por ahora).
- **Composición:** 3 plantas en maceta de terracota (2 S y 1 M) y 5 sin maceta (1 XL, 2 M y 2 S). Una maceta S y una roseta M van cada una dentro de un círculo, uno rosa pálido (`accent-pink`) y otro celadón (`celadon`); se sortea cuál va con cuál. Los círculos quedan siempre por debajo de todas las plantas.
- **Acabado:** las rosetas sin maceta que no van en un círculo llevan un borde de 3px en blanco cálido `#FEFDF9` (efecto sticker). Todas las plantas llevan una sombra suave hacia abajo (`0 6px 7px`, verde oscuro al 28 %), la única excepción a la regla de "sin sombras" aparte del hover de las cards.
- **Azar:** cada carga elige 3 de 12 macetas y 5 de 12 rosetas, con pequeñas variaciones de posición y la roseta XL siempre redonda y grande; la mitad de las veces entra el Sedum adolphi dorado como acento cálido.
- **Movimiento:** las plantas nunca se rotan: siempre quedan derechas y solo rebotan suave de arriba abajo (7px, entre 8 y 12 s por ciclo, cada una con su ritmo). Los círculos quedan quietos.
- **Blobs de contorno:** sin relleno, con línea punteada (puntos redondos de 2×2px cada 6px, verde bosque al 55 %). Hay 2 alrededor del collage del hero (arriba a la izquierda y abajo a la derecha) y 1 por lado en el newsletter. Cada uno tiene forma aleatoria, queda detrás de las plantas y oscila lento.
- **Circulitos decorativos:** 9 alrededor del collage del hero (2,6 a 5,6 % del ancho del collage; verde bosque, celadón, lima vivo y rosa pálido) y 5 alrededor de cada collage del newsletter (5 a 10 %; rosa pálido, blanco, verde bosque, oliva y celadón). Cada carga cambia posiciones, tamaños y colores; quedan detrás de las plantas y flotan con el mismo rebote.
- **Archivos:** `img/portada/` (WebP de 640px las rosetas y 560px las macetas). Los PNG originales están en `img/home/Portada/` como respaldo para navegadores sin WebP.
- **Accesibilidad:** las plantas son decorativas (`alt=""`) y el collage tiene un `aria-label`. El movimiento se apaga con `prefers-reduced-motion`.

### Categorías (`category-circle`)

Círculo de 160px con fondo rosa, lima o menta, la foto de producto recortada dentro y el nombre en `label-md` debajo. Un círculo por categoría; toda la pieza es clicable.

### Producto recomendado

Panel lima (`secondary`) de 24px de radio con la foto asomando por arriba del panel (sale 32px) a la izquierda y las esquinas de 8px. Sobre la esquina superior izquierda de la foto va el chip **"Brote recomienda"**: píldora lima con texto casi negro (Source Sans 3 600, 14px). A la derecha, el nombre en `headline-lg` verde bosque, "También se llama Crassula ovata" en fucsia, descripción, tres datos (Cuidado, Riego, Luz), precio en Bree Serif verde bosque de 32px y botón principal "Agregar al carrito" con esquinas de 8px. En móvil el panel se apila: foto arriba y texto abajo.

### Product card (`card-product`)

Card blanca sobre la banda lima: imagen con radio de 8px, nombre en `title-md`, descripción corta en `body-sm`, precio en Source Sans 3 700 y botón secundario "Agregar al carrito".

- El precio siempre es visible.
- El nombre ocupa máximo 2 líneas; si es más largo, termina en "…".
- Agotado: imagen en escala de grises y botón deshabilitado con el texto "Agotado".
- Hover: sombra y la imagen se agranda al 103 %.

### Card de artículo (`card-article`)

Imagen con radio 8px, categoría en `label-sm` verde bosque (por ejemplo "Jardinería en casa"), título en `title-md` (máximo 3 líneas), extracto de 3 líneas y enlace "Leer más >>" en verde bosque. Toda la card es clicable; hover con sombra.

### Newsletter (`box-lead-form`)

Banda lima con el contenido **centrado**: el título "Un poquito de verde en tu correo", una bajada ("Suscríbete a Brote y recibe guías para cuidar tus plantas sin complicarte y ofertas para hacer crecer tu rincón verde."), los campos blancos "Tu nombre" y "Tu correo" apilados con etiqueta visible, el botón principal "Quiero suscribirme" centrado y el aviso de privacidad. A los bordes izquierdo y derecho de la banda va un **collage de plantas** que se corta con el borde de la pantalla: 5 rosetas por lado (10 en total, **sin macetas**), muy pegadas y superpuestas entre sí hasta formar un solo racimo por lado, tomadas de las mismas imágenes de `img/portada/` que el collage del hero, con la misma sombra suave, el borde crema y el rebote lento. Cada carga las elige y las acomoda al azar (10 de 19 rosetas: las 12 del hero más 7 que solo usa este collage — Aeonium haworthii, Aeonium arboreum, Aeonium decorum, Graptopetalum mendozae, Sedum dasyphyllum, Sedum burrito y Sedum morganianum —, que nunca aparecen en el hero). Los collages miden entre 220px y 380px de ancho en desktop (20vw en tablet) y se ocultan en móvil. Al enviar, un brote crece junto al mensaje de éxito.

### Campo de texto (`input-field`)

Blanco, borde visible de 1.5px en verde medio (`accent-green`, 3.9:1: alcanza para el borde de un control), esquinas de 8px (`rounded.md`, las mismas de los botones del hero) y 56px de alto en todos los campos (el buscador de la navbar, 52px). Nunca en píldora. Focus: borde verde bosque y halo de 3px del primario al 20 %. Error: borde rojo y mensaje debajo (`message-error`) que dice qué pasó y cómo corregirlo ("Revisa el correo: falta el .cl o .com"). Todos los campos tienen etiqueta visible.

### Chips y filtros

- **chip:** blanco con borde de 1.5px outline; **chip-active:** verde bosque con texto blanco. Solo una categoría seleccionada a la vez.
- **Filtros de tienda:** columna de 240px con casillas por categoría y rango de precio; las casillas marcadas usan el color primario.

### Resumen del carrito (`box-cart-summary`)

Caja lima con subtotal, campo de comuna y botón "Calcular", costo de despacho, total en Source Sans 3 700 20px y botón principal "Ir a pagar". Mientras no se calcula el despacho, en vez del total dice "Calcula el despacho para ver el total".

### Footer

**Es el mismo footer en las 12 páginas** (el de la portada, `footer-home`): logo claro, descripción, redes en SVG y los enlaces en **2 columnas**: Inicio, Nosotros, Blog y Tienda a la izquierda; Contacto, FAQ, Términos y condiciones y Política de privacidad a la derecha, con el borde superior ondulado lima.

Fondo verde bosque (`footer`) con texto blanco: logo, descripción breve, íconos SVG de Instagram, TikTok y Facebook, sólidos y con calado: un círculo lima de 56px con el logo de cada red recortado (se ve el verde del footer a través); en hover pasa a blanco y sube 3px; son enlaces reales con etiqueta accesible, en el footer de las 12 páginas, y columna de enlaces (Inicio, Nosotros, Blog, Tienda, Contacto, FAQ, Términos y condiciones, Política de privacidad). Debajo, la franja `footer-strip` con "© 2026 Brote. Todos los derechos reservados."

Los enlaces del footer llevan una viñeta: una **florcita** lima de 16px: cinco pétalos en forma de gota que nacen de un mismo punto central y se abren en molinete, como una plumeria a la izquierda del texto, que gira 72° al pasar el mouse. Es un ícono por CSS (máscara), así que se ve nítida a cualquier tamaño y no suma archivos. Con `prefers-reduced-motion` no gira.

## Do's and Don'ts

- Do usar fotos reales de plantas sanas, recortadas sobre círculos de color o con esquinas de 8px.
- Do reservar el fucsia para acciones y datos clave (botones, nombre científico, enlaces de guía).
- Do usar el verde medio (#4C8D62) y el oliva solo como detalle decorativo, nunca para texto.
- Do mantener contraste AA (4.5:1) en todo el texto normal.
- Do escribir en español de Chile, en lenguaje simple y sin términos técnicos.
- Don't usar más de dos familias tipográficas.
- Don't usar sombras fuera del hover de las tarjetas ni capas de color que bajen el contraste del texto.
- Don't esconder el precio ni el costo de despacho.
- Don't poner más de un botón principal por sección.
- Do hacer que todo enlace y botón suba 3px al pasar el mouse.
- Don't mover enlaces o botones con `margin` o `top`: usa `translate`.



### Blog

Diseño tipo revista (referencia: Medium), en `blog.html`:

- **Columna principal:** primero la entrada **destacada** (foto apaisada 16:9, etiqueta "Destacado · categoría", título en Bree Serif de 36px, bajada y tiempo de lectura) y debajo las demás entradas como **bloques horizontales**: foto a la izquierda (220px, 4:3; en móvil 112px cuadrada) y a la derecha categoría, título, texto (2 líneas) y tiempo de lectura, separados por una línea fina. Toda la entrada es clicable. Las fotos son escenas reales de plantas (una por entrada) en WebP de 1200px, guardadas en `img/blog/` y recortadas con `object-fit: cover`, sin sombra ni fondo de color.
- **Paginación numerada:** bajo la lista, chapitas circulares de 44px con borde fino (anterior, 1, 2…, siguiente); la página actual va con fondo menta `mint` y número en negrita, igual que la categoría activa, y la flecha de un extremo se atenúa. Muestra 3 entradas por página y la destacada solo en la página 1; se combina con el filtro de categorías (vuelve a la página 1 y se oculta si cabe todo en una). Al cambiar de página sube al título del blog.
- **Barra lateral derecha** (desde 1024px, pegada al hacer scroll, con línea fina a la izquierda): "Categorías" (Todos, Cuidados básicos, Plagas y enfermedades, Decoración con plantas, con el número de entradas; la activa va con fondo verde menta `mint` y texto verde bosque en negrita; al pasar el mouse, un menta más suave) y debajo el panel lima "Suscríbete a nuestro newsletter": título, una línea de bajada, el campo de correo con etiqueta visible, el botón fucsia "Suscribirme" y, pegada al borde inferior, una roseta fija (`img/portada/echeveria-laui.webp`, no aleatoria, con la sombra suave) que solo se ve a la mitad porque el panel la recorta (en el prototipo solo muestra la confirmación, no envía datos). En móvil las categorías pasan arriba como chips con scroll horizontal y el newsletter va al final.
- **Filtro:** al elegir una categoría se muestran solo sus entradas (JS en la propia página, sin recargar).
- Las 7 entradas son de ejemplo y todas enlazan a `articulo.html`.


### Artículo del blog

- **Portada:** foto 16:9 (`object-fit: cover`, esquinas redondeadas) bajo el título, en un texto de 720px de ancho. Las fotos de las entradas viven en `img/blog/`.
- **Orden:** cabecera, texto, producto recomendado, compartir, comentarios y, después, las **notas relacionadas**, todo antes de la banda de la guía.
- **Notas relacionadas ("Más notas del blog"):** 3 cards en fila desde 768px (una columna en móvil), con foto 16:9, categoría y tiempo de lectura, título en Bree Serif y bajada de 2 líneas; toda la card es clicable.
- **Banda de la guía gratis:** ocupa todo el ancho de la página, fondo lima `secondary`, con título centrado, campos de nombre y correo con etiqueta visible (apilados, uno bajo el otro, en todos los tamaños), el botón fucsia "Quiero suscribirme" debajo y centrado, con su ancho natural, y el aviso de privacidad. La decoran 2 rosetas transparentes fijas (`graptopetalum-bellum` abajo a la izquierda y `echeveria-lilacina` arriba a la derecha), inclinadas y cortadas por los bordes de la banda, con la sombra suave del collage. Se ocultan en móvil. En el prototipo solo muestra la confirmación, no envía datos.
- **Márgenes:** `.container.section` repone el padding lateral que `.section` le quitaba.
