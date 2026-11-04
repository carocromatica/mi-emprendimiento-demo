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
  on-secondary: "#202924"
  secondary-soft: "#E7E9CD"
  tertiary: "#A93B6A"
  tertiary-hover: "#92315A"
  on-tertiary: "#FFFFFF"
  accent-green: "#4C8D62"
  accent-olive: "#ACB84A"
  accent-pink: "#F8E8F0"
  accent-mint: "#E8F3EC"
  neutral: "#FEFDF9"
  surface: "#FFFFFF"
  on-surface: "#202924"
  on-surface-variant: "#5E6B63"
  footer: "#3A5745"
  outline: "#D5DBBE"
  disabled: "#CFD3CB"
  on-disabled: "#4B544E"
  success: "#2F7A4A"
  error: "#B23A2E"
typography:
  headline-display:
    fontFamily: Bree Serif
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.01em
  headline-display-mobile:
    fontFamily: Bree Serif
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.1
  headline-lg:
    fontFamily: Bree Serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
  headline-lg-mobile:
    fontFamily: Bree Serif
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
  headline-md:
    fontFamily: Bree Serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
  headline-md-mobile:
    fontFamily: Bree Serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
  title-md:
    fontFamily: Bree Serif
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
  category-circle:
    backgroundColor: "{colors.accent-pink}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
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
- **Footer (#3A5745):** Verde bosque un poco más claro, solo para el fondo del footer (una franja verde #2F8F5B más viva cierra la página con el copyright).
- **Tertiary (#A93B6A):** Fucsia. Es el color de la acción: botones principales ("Comprar plantitas", "Agregar al carrito", "Suscríbete"), precios destacados, nombre científico, categorías y enlaces de guía. Contraste 5.9:1 sobre el fondo y 6.0:1 con texto blanco encima.
- **Secondary (#E6ECB7):** Verde lima suave. Bandas de sección (Destacados del mes, newsletter), caja "Descarga nuestra guía" y botón "Mi cuenta".
- **Secondary-soft (#E7E9CD):** Lima grisáceo para círculos de categoría y fondos secundarios.
- **Accent-green (#4C8D62):** Verde medio. Solo decorativo (ilustraciones, íconos grandes, subrayados ondulados). Contraste 3.9:1: nunca se usa para texto normal ni como fondo de texto blanco.
- **Accent-olive (#ACB84A):** Verde oliva. Solo decorativo (líneas onduladas, círculo del hero).
- **Accent-pink (#F8E8F0):** Rosa pálido. Círculos detrás de las plantas y fondos de categorías.
- **Accent-mint (#E8F3EC):** Menta pálido. Círculos de categorías y hover de botones secundarios.
- **Neutral (#FEFDF9):** Blanco cálido. Fondo general del sitio.
- **On-surface (#202924):** Verde casi negro para textos. Contraste 14.7:1.
- **On-surface-variant (#5E6B63):** Gris verdoso para textos secundarios. Contraste 5.5:1.
- **Outline (#D5DBBE):** Bordes de cards, inputs y separadores.
- **Success (#2F7A4A)** y **Error (#B23A2E):** Mensajes de confirmación y errores de formulario.

Proporción de uso por pantalla: 60 % neutro y blanco, 25 % verde lima y rosa pálido (bandas y círculos), 15 % verde bosque y fucsia.

## Typography

Dos familias de Google Fonts:

- **Bree Serif** (serif redondeada y amable, la del logo) para títulos, nombres de productos y títulos de artículos.
- **Inter** (sans serif muy legible en pantallas pequeñas) para textos, botones, etiquetas y formularios.

Escala: `headline-display` para el h1 (48px en desktop, 36px en mobile; la frase final va subrayada con una línea ondulada verde oliva), `headline-lg` para h2 (32px / 28px), `headline-md` para h3 (24px / 20px), `title-md` para nombres de productos y títulos de cards, `body-md` para párrafos, `label-md` para botones y `label-sm` para categorías (en fucsia o verde bosque). Cada pantalla tiene un solo h1.

## Layout

- **Grilla:** contenido centrado con ancho máximo de 1200px y márgenes laterales de 32px (16px en mobile).
- **Espaciado:** escala fija de 4, 8, 16, 24, 32, 48 y 64px. Entre secciones, 64px en desktop y 48px en mobile. Padding interno de tarjetas, 16px. Separación entre tarjetas, 24px (16px en mobile).
- **Breakpoints (mobile first):** mobile hasta 767px, tablet de 768 a 1023px, desktop desde 1024px.
- **Estructura de la home:** hero con plantas sobre círculos y caja de guía gratis; fila de 6 categorías en círculos (Suculentas, Cactus, Maceteros, Sustratos, Fertilizantes, Herramientas); producto recomendado (foto + ficha); banda lima "Destacados del mes" con 4 cards; blog con 3 artículos; newsletter; footer.
- **Títulos de sección:** centrados, con una línea ondulada verde oliva a cada lado.
- **Columnas:** destacados 4 en desktop, 2 en tablet, 1 en mobile; blog 3 / 2 / 1; categorías 6 / 3 / 2.
- **Mobile:** la navbar muestra logo, carrito y menú hamburguesa; en el hero y en el producto recomendado, la imagen va arriba y el texto abajo. Nunca hay scroll horizontal en la página.

## Elevation & Depth

Diseño plano. La jerarquía se logra con **bandas y círculos de color** y bordes de 1px color outline, no con sombras. La única sombra es la de hover en tarjetas: `0 4px 12px rgba(0,0,0,.08)`.

## Shapes

Formas suaves y redondeadas: **píldora** (`rounded.full`) en botones, chips, campos de correo y círculos de categoría; **8px** (`rounded.md`) en cards, imágenes e inputs de formulario; **24px** (`rounded.lg`) en bandas y cajas grandes como la de la guía gratis. Las líneas onduladas son un detalle decorativo y siempre van en verde oliva.

## Components

### Navbar

Logo "brote" con ícono de hojas a la izquierda; enlaces Inicio, Blog, Nosotros y Tienda; botón "Mi cuenta" en píldora lima; ícono de carrito. El enlace de la sección actual va en negrita y subrayado en fucsia. Fondo neutro; una franja verde oliva fina cierra el borde superior de la página.

### Botones

- **button-primary:** fucsia con texto blanco, píldora. Un solo botón principal por sección. Hover más oscuro (`tertiary-hover`), active en verde bosque, disabled en gris sin cursor de mano.
- **button-secondary:** fondo blanco, borde de 1.5px y texto verde bosque (o fucsia en las cards de producto); hover con fondo menta.
- El texto de los botones siempre es un verbo: "Comprar plantitas", "Agregar al carrito", "Suscríbete a nuestras novedades".

### Hero

Título en `headline-display` verde bosque con la frase final ("poco demandan") subrayada con línea ondulada verde oliva, bajada con negritas en palabras clave, botón principal, línea de retiro en tienda y envíos, y a la derecha un collage de plantas sobre círculos rosa pálido y lima. Debajo, la caja de guía gratis (`band-section`): foto pequeña, pregunta y enlace subrayado en fucsia "Descarga nuestra guía gratis".

### Categorías (`category-circle`)

Círculo de 160px con fondo rosa, lima o menta, la foto de producto recortada dentro y el nombre en `label-md` debajo. Un círculo por categoría; toda la pieza es clicable.

### Producto recomendado

Foto grande con radio 8px a la izquierda; a la derecha, "Brote recomienda", nombre en `headline-lg`, nombre científico en fucsia, descripción, tres datos con ícono (Cuidado, Riego, Luz con su nivel), precio en Inter 700 grande y botón principal "Agregar al carrito".

### Product card (`card-product`)

Card blanca sobre la banda lima: imagen con radio de 8px, nombre en `title-md`, descripción corta en `body-sm`, precio en Inter 700 y botón secundario "Agregar al carrito".

- El precio siempre es visible.
- El nombre ocupa máximo 2 líneas; si es más largo, termina en "…".
- Agotado: imagen en escala de grises y botón deshabilitado con el texto "Agotado".
- Hover: sombra y la imagen se agranda al 103 %.

### Card de artículo (`card-article`)

Imagen con radio 8px, categoría en `label-sm` verde bosque (por ejemplo "Jardinería en casa"), título en `title-md` (máximo 3 líneas), extracto de 3 líneas y enlace "Leer más >>" en verde bosque. Toda la card es clicable; hover con sombra.

### Newsletter (`box-lead-form`)

Banda lima con el título "Tu próximo rincón verde empieza aquí", campo de correo en píldora blanca con etiqueta visible, botón principal "Suscríbete a nuestras novedades" y fotografía de suculentas en maceteros de cemento a la derecha. Al enviar, mensaje de éxito en verde (`message-success`).

### Campo de texto (`input-field`)

Blanco, borde de 1.5px color outline, radio 8px (píldora en el campo de newsletter). Focus: borde verde bosque y halo de 3px del primario al 20 %. Error: borde rojo y mensaje debajo (`message-error`) que dice qué pasó y cómo corregirlo ("Revisa el correo: falta el .cl o .com"). Todos los campos tienen etiqueta visible.

### Chips y filtros

- **chip:** blanco con borde de 1.5px outline; **chip-active:** verde bosque con texto blanco. Solo una categoría seleccionada a la vez.
- **Filtros de tienda:** columna de 240px con casillas por categoría y rango de precio; las casillas marcadas usan el color primario.

### Resumen del carrito (`box-cart-summary`)

Caja lima con subtotal, campo de comuna y botón "Calcular", costo de despacho, total en Inter 700 20px y botón principal "Ir a pagar". Mientras no se calcula el despacho, en vez del total dice "Calcula el despacho para ver el total".

### Footer

Fondo verde bosque (`footer`) con texto blanco: logo, descripción breve, íconos de Instagram, TikTok y Facebook, y columna de enlaces (Inicio, Blog, Nosotros, Tiendas, FAQ, Términos y condiciones, Política de privacidad). Debajo, franja verde con "© 2026 Brote. Todos los derechos reservados."

## Do's and Don'ts

- Do usar fotos reales de plantas sanas, recortadas sobre círculos de color o con esquinas de 8px.
- Do reservar el fucsia para acciones y datos clave (botones, nombre científico, enlaces de guía).
- Do usar el verde medio (#4C8D62) y el oliva solo como detalle decorativo, nunca para texto.
- Do mantener contraste AA (4.5:1) en todo el texto normal.
- Do escribir en español de Chile, en lenguaje simple y sin términos técnicos.
- Don't usar más de dos familias tipográficas.
- Don't usar sombras fuera del hover de las tarjetas.
- Don't esconder el precio ni el costo de despacho.
- Don't poner más de un botón principal por sección.
