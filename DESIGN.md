---
version: alpha
name: Brote
description: Design system de Brote, tienda de jardinería para personas que están empezando con plantas.
colors:
  primary: "#3F5E4A"
  primary-hover: "#34503F"
  primary-active: "#2A4033"
  on-primary: "#FFFFFF"
  secondary: "#EDE4D3"
  on-secondary: "#2B2B28"
  tertiary: "#C0643A"
  tertiary-strong: "#A9552F"
  on-tertiary: "#FFFFFF"
  neutral: "#FBF8F2"
  surface: "#FFFFFF"
  on-surface: "#2B2B28"
  on-surface-variant: "#6B675E"
  outline: "#E2D9C6"
  disabled: "#CFCAC0"
  on-disabled: "#4F4B44"
  success: "#2F7A4A"
  error: "#B23A2E"
typography:
  headline-display:
    fontFamily: Fraunces
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline-display-mobile:
    fontFamily: Fraunces
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.1
  headline-lg:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
  headline-lg-mobile:
    fontFamily: Fraunces
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
  headline-md:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
  headline-md-mobile:
    fontFamily: Fraunces
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
  title-md:
    fontFamily: Fraunces
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.2
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.06em
rounded:
  md: 8px
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
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
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
  card-product:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
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
    backgroundColor: "{colors.tertiary-strong}"
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
    padding: 12px 14px
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: "{spacing.2xl}"
---

# Brote — Design system

## Overview

Brote es una tienda online de jardinería para personas que están empezando con plantas: sustratos, fertilizantes, productos contra plagas, herramientas y maceteros. Su usuaria principal es Camila, 29 años, que vive en un departamento con balcón, compra desde el celular de noche, quiere una casa bonita con plantas y necesita que la guíen para que no se le mueran.

El estilo es **natural, fresco, cálido, simple y vivo**: un rincón verde y tranquilo, con mucha luz natural, hojas, maceteros de greda, tierra y madera. La interfaz es espaciosa, con mucho espacio en blanco y fotos reales de plantas sanas en departamentos. Nada técnico ni frío: el tono visual transmite que cuidar plantas no es complicado.

## Colors

La paleta sale del moodboard: hojas, greda, tierra y madera.

- **Primary (#3F5E4A):** Verde salvia oscuro, el color de la marca. Botones principales, enlaces, logo y footer.
- **Secondary (#EDE4D3):** Arena. Fondos de secciones, product cards, kits y cajas destacadas.
- **Tertiary (#C0643A):** Terracota, el color de la greda. Solo para acentos: contador del carrito, íconos y detalles. Tiene contraste 3.9:1 sobre el fondo, así que nunca se usa en párrafos.
- **Tertiary-strong (#A9552F):** Terracota oscuro para fondos de etiquetas con texto blanco (ofertas, ahorro de los kits): alcanza 5.2:1.
- **Neutral (#FBF8F2):** Crema. Fondo general del sitio; evita el blanco frío.
- **On-surface (#2B2B28):** Carbón, para textos y títulos. Contraste 13.4:1 sobre el fondo.
- **On-surface-variant (#6B675E):** Gris cálido para bajadas y textos secundarios. Contraste 5.3:1.
- **Outline (#E2D9C6):** Bordes de tarjetas y separadores. Los chips e inputs usan un borde un poco más marcado, #D9CFBB.
- **Success (#2F7A4A)** y **Error (#B23A2E):** Mensajes de confirmación y errores de formulario.

Proporción de uso por pantalla: 60 % neutros (fondo y texto), 30 % secundario, 10 % principal y terciario.

## Typography

Dos familias de Google Fonts:

- **Fraunces** (serif cálida, con toque artesanal) para títulos, nombres de productos y títulos de artículos.
- **Inter** (sans serif muy legible en pantallas pequeñas) para textos, botones, etiquetas y formularios.

Escala: `headline-display` para el h1 (48px en desktop, 36px en mobile), `headline-lg` para h2 (32px / 28px), `headline-md` para h3 (24px / 20px), `title-md` para nombres de productos y títulos de cards, `body-md` para párrafos, `label-md` para botones y `label-sm` en mayúsculas para categorías y etiquetas. Cada pantalla tiene un solo h1.

## Layout

- **Grilla:** contenido centrado con ancho máximo de 1200px y márgenes laterales de 32px (16px en mobile).
- **Espaciado:** escala fija de 4, 8, 16, 24, 32, 48 y 64px. Entre secciones, 64px en desktop y 48px en mobile. Padding interno de tarjetas, 16px. Separación entre tarjetas de una grilla, 24px (16px en mobile).
- **Breakpoints (mobile first):** mobile hasta 767px, tablet de 768 a 1023px, desktop desde 1024px.
- **Columnas:** las grillas de productos, kits y artículos usan 1 columna en mobile, 2 en tablet y 3 en desktop.
- **Mobile:** la navbar muestra logo, carrito y menú hamburguesa; los filtros de la tienda se abren desde un botón "Filtrar"; en el hero y en la ficha de producto, la imagen va arriba y el texto abajo; en el carrito, el resumen va debajo de la lista. Nunca hay scroll horizontal en la página.

## Elevation & Depth

Diseño plano. La jerarquía se logra con **capas de color** (fondo crema, tarjetas arena o blancas) y bordes de 1px color outline, no con sombras. La única sombra es la de hover en tarjetas: `0 4px 12px rgba(0,0,0,.08)`.

## Shapes

Formas suaves y amables: radio de **8px** (`rounded.md`) en tarjetas, cajas, inputs e imágenes, y **píldora** (`rounded.full`) en botones, chips y etiquetas. No se mezclan esquinas rectas con redondeadas en una misma vista.

## Components

### Navbar

Logo a la izquierda; enlaces Tienda, Blog, Nosotros y Contacto; buscador; ícono de carrito con contador en círculo terracota. Es igual en todas las páginas; el enlace de la sección actual va subrayado. Borde inferior de 1px.

### Botones

- **button-primary:** verde salvia con texto blanco, píldora. Un solo botón principal por sección. Hover 10 % más oscuro, active 20 % más oscuro, disabled en gris (`disabled`) sin cursor de mano.
- **button-secondary:** blanco con borde de 2px y texto verde salvia; hover con fondo arena.
- El texto de los botones siempre es un verbo: "Ver productos", "Agregar al carrito", "Quiero la guía", "Calcular".

### Product card (`card-product`)

Imagen cuadrada con radio de 8px, etiqueta de tipo de planta (`tag-plant`, por ejemplo "Interior"), nombre del producto en `title-md`, precio en Inter 700 y botón secundario "Ver producto".

- El precio siempre es visible.
- El nombre ocupa máximo 2 líneas; si es más largo, termina en "…".
- Agotado: imagen en escala de grises y botón deshabilitado con el texto "Agotado".
- Hover: sombra y la imagen se agranda al 103 %.

### Kit por tipo de planta (`card-kit`)

Tarjeta horizontal: imagen, nombre ("Kit plantas de interior"), lista de lo que incluye (sustrato, fertilizante y macetero), precio, etiqueta de ahorro en terracota oscuro (`tag-offer`, "Ahorra $2.500") y botón principal "Agregar kit".

### Chips de categoría y filtros

- **chip:** blanco con borde de 1.5px #D9CFBB; **chip-active:** verde salvia con texto blanco. Solo una categoría seleccionada a la vez.
- **Filtros de tienda:** columna de 240px con casillas "Tipo de planta" (Interior, Exterior, Suculentas y cactus, Huerto) y rango de precio. Las casillas marcadas usan el color primario.

### Campo de texto (`input-field`)

Blanco, borde de 1.5px #D9CFBB, radio 8px. Focus: borde primario y halo de 3px del primario al 20 %. Error: borde rojo y mensaje debajo (`message-error`) que dice qué pasó y cómo corregirlo ("Revisa el correo: falta el .cl o .com"). Todos los campos tienen etiqueta visible.

### Formulario de leads (`box-lead-form`)

Caja arena con la oferta como título ("Guía gratis de cuidados + 10 % en tu primera compra"), un solo campo de correo, botón principal "Quiero la guía" y texto de privacidad con enlace a la política. Al enviar, mensaje de éxito en verde (`message-success`).

### Card de artículo (`card-article`)

Blanca con borde de 1px: imagen, categoría en `label-sm` mayúsculas color gris cálido, título en `title-md` (máximo 3 líneas) y tiempo de lectura. Toda la card es clicable; hover con sombra.

### Diagnóstico por síntoma

Caja arena con el título "¿Qué le pasa a tu planta?" y tres botones secundarios con ícono: Hojas amarillas, Manchas en las hojas, Plagas.

### Guía de uso (`box-usage-guide`)

Tres columnas con ícono verde: "Para qué plantas", "Cómo usarlo", "Cada cuánto". Lenguaje simple; si aparece un término técnico, se explica entre paréntesis.

### Resumen del carrito (`box-cart-summary`)

Caja arena con subtotal, campo de comuna y botón "Calcular", costo de despacho, total en Inter 700 20px y botón principal "Ir a pagar". Mientras no se calcula el despacho, en vez del total dice "Calcula el despacho para ver el total".

### Footer

Fondo verde salvia con texto blanco: logo, enlaces a Preguntas frecuentes, Términos y condiciones, Política de privacidad y Contacto, y redes sociales.

## Do's and Don'ts

- Do usar fotos reales de plantas sanas en interiores con luz natural.
- Do usar el terracota solo en acentos, y el terracota oscuro para etiquetas con texto blanco.
- Do mantener contraste AA (4.5:1) en todo el texto normal.
- Do escribir en español de Chile, en lenguaje simple y sin términos técnicos.
- Don't usar más de dos familias tipográficas.
- Don't usar sombras fuera del hover de las tarjetas.
- Don't esconder el precio ni el costo de despacho.
- Don't poner más de un botón principal por sección.
