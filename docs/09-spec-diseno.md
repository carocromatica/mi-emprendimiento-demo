# Spec de diseño — Brote

> Guía: [Spec de diseño](../evaluacion/guias/fase-2-specs/06-spec-de-diseno.md)

**Wireframes en Whimsical:** [pendiente: pegar aquí el link público del tablero de wireframes]

> Guía de wireframes: [Wireframes](../evaluacion/guias/fase-2-specs/04-wireframes.md)

![Wireframes de Brote](img/wireframes.png)

## 1. Foundations

### Colores y tipografía

Ver [08-color-tipografia.md](08-color-tipografia.md).

### Espaciados

Escala fija: 4 · 8 · 16 · 24 · 32 · 48 · 64 px. No se usan otros valores.

| Uso | Valor |
|---|---|
| Separación entre secciones | 64 px (desktop) · 48 px (mobile) |
| Padding interno de tarjetas y cajas | 16 px |
| Separación entre tarjetas de una grilla | 24 px (desktop) · 16 px (mobile) |
| Separación entre un título y su contenido | 16 px |
| Margen lateral de la página | 32 px (desktop) · 16 px (mobile) |
| Ancho máximo del contenido | 1200 px, centrado |

### Bordes, radios y sombras

- **Borde:** 1 px, color #E2D9C6.
- **Radios:** 8 px en tarjetas, cajas, inputs e imágenes; 999 px (píldora) en botones, chips y etiquetas.
- **Sombra:** solo en tarjetas al hacer hover, `0 4px 12px rgba(0,0,0,.08)`.

## 2. Componentes

![Componentes de Brote con estilo y estados](img/componentes-con-estilo.png)

### Navbar

- **Contenido:** logo a la izquierda; enlaces Tienda, Blog, Nosotros, Contacto; buscador; ícono de carrito con contador de productos.
- **Reglas:** es igual en todas las páginas. El enlace de la sección actual va subrayado. El contador del carrito solo aparece si hay productos.
- **Estilo:** fondo #FBF8F2, borde inferior de 1 px, alto 72 px. Enlaces en Inter 500, 1rem, color texto. Contador del carrito: círculo terracota #C0643A con número blanco en negrita.
- **Estados:** enlaces en hover con color principal #3F5E4A.

### Botón principal

- **Contenido:** texto en verbo ("Agregar al carrito", "Ver productos", "Quiero la guía").
- **Reglas:** un solo botón principal por sección.
- **Estilo:** fondo principal #3F5E4A, texto blanco, Inter 600 1rem, padding 12 × 24 px, radio píldora.
- **Estados:**
  - Hover: fondo #34503F (10 % más oscuro).
  - Active: fondo #2A4033 (20 % más oscuro).
  - Disabled: fondo #CFCAC0, texto #6B675E, sin cursor de mano.

### Botón secundario

- **Estilo:** fondo blanco, borde de 2 px y texto en color principal #3F5E4A, mismo tamaño y radio que el principal.
- **Estados:** hover con fondo secundario #EDE4D3; disabled igual que el principal.

### Hero (landing)

- **Contenido:** título h1, bajada de máximo 2 líneas, botón principal "Ver productos", botón secundario "Leer guías", imagen de un balcón con plantas.
- **Reglas:** el botón principal se ve sin hacer scroll, tanto en desktop como en mobile.
- **Estilo:** fondo crema; título en Fraunces 600 3rem; imagen con radio de 8 px.

### Product card

- **Contenido:** imagen cuadrada, etiqueta de tipo de planta, nombre, precio, botón secundario "Ver producto".
- **Reglas:**
  - El precio siempre es visible.
  - El nombre ocupa máximo 2 líneas; si es más largo, termina en "…".
  - Si el producto está agotado, la imagen va en gris y el botón queda disabled con el texto "Agotado".
- **Estilo:** fondo secundario #EDE4D3, radio 8 px, padding 16 px. Nombre en Fraunces 600 1.125rem. Etiqueta con fondo #FBF8F2 y texto principal, radio píldora.
- **Estados:** hover con sombra y la imagen se agranda al 103 %.

### Chips de categoría

- **Contenido:** nombre de la categoría.
- **Reglas:** la categoría seleccionada siempre se distingue de las demás; solo una puede estar seleccionada.
- **Estilo:** fondo blanco, borde de 1.5 px #D9CFBB, Inter 500 0.875rem, padding 8 × 16 px, radio píldora.
- **Estados:** hover con borde principal; active (seleccionado) con fondo principal y texto blanco.

### Filtros de tienda

- **Contenido:** título "Tipo de planta" con casillas (Interior, Exterior, Suculentas y cactus, Huerto) y rango de precio.
- **Reglas:** se pueden marcar varios tipos de planta a la vez. En mobile se abren desde el botón "Filtrar", que muestra cuántos filtros hay activos.
- **Estilo:** columna de 240 px en desktop; casillas con el color principal al marcarse.

### Campo de texto

- **Contenido:** etiqueta, campo y, si corresponde, mensaje de error.
- **Reglas:** el mensaje de error dice qué pasó y cómo corregirlo.
- **Estilo:** fondo blanco, borde de 1.5 px #D9CFBB, radio 8 px, padding 12 × 14 px, Inter 1rem.
- **Estados:** focus con borde principal y halo `0 0 0 3px` del principal al 20 %; error con borde #B23A2E y mensaje en rojo debajo.

### Formulario de leads

- **Contenido:** título con la oferta ("Guía gratis de cuidados + 10 % en tu primera compra"), campo de correo, botón principal "Quiero la guía", texto de privacidad con enlace a la política.
- **Reglas:** pide solo el correo. Al enviar muestra un mensaje de éxito en verde #2F7A4A.
- **Estilo:** caja con fondo secundario, radio 8 px, padding 24 px.

### Card de artículo

- **Contenido:** imagen, categoría, título, tiempo de lectura.
- **Reglas:** el título ocupa máximo 3 líneas. Toda la card es clicable.
- **Estilo:** fondo blanco, borde de 1 px, radio 8 px; categoría en Inter 600 0.75rem en mayúsculas, color texto suave.
- **Estados:** hover con sombra.

### Guía de uso (ficha de producto)

- **Contenido:** tres columnas con ícono: "Para qué plantas", "Cómo usarlo", "Cada cuánto".
- **Reglas:** se escribe sin términos técnicos. Si se usa uno, se explica entre paréntesis.
- **Estilo:** caja con borde de 1 px, radio 8 px, padding 16 px; íconos en color principal.

### Bloque de compartir y comentarios (artículo)

- **Contenido:** botones de WhatsApp, Instagram y "Copiar link"; lista de comentarios con nombre y fecha; campo "Escribe tu duda" y botón "Comentar".
- **Estilo:** botones de compartir como chips; comentarios separados por borde de 1 px.

### Resumen del carrito

- **Contenido:** subtotal, campo de comuna con botón "Calcular", costo de despacho, total y botón principal "Ir a pagar".
- **Reglas:** el total no aparece hasta que se calcula el despacho; mientras tanto dice "Calcula el despacho para ver el total".
- **Estilo:** caja con fondo secundario, radio 8 px, padding 24 px; total en Inter 700 1.25rem.

### Kit por tipo de planta (tienda)

- **Contenido:** imagen del kit, nombre ("Kit plantas de interior"), lista de lo que incluye (sustrato, fertilizante y macetero), precio del kit y ahorro respecto a comprar por separado, botón principal "Agregar kit".
- **Reglas:** el ahorro siempre se muestra en pesos.
- **Estilo:** como la product card, pero horizontal y con la etiqueta de ahorro en terracota.

### Diagnóstico por síntoma (blog)

- **Contenido:** título "¿Qué le pasa a tu planta?" y tres botones con ícono: Hojas amarillas, Manchas en las hojas, Plagas.
- **Reglas:** cada síntoma lleva al artículo que explica sus causas y los productos recomendados.
- **Estilo:** caja con fondo secundario; los síntomas como botones secundarios con ícono.

### Footer

- **Contenido:** logo, enlaces a Preguntas frecuentes, Términos y condiciones, Política de privacidad y Contacto, redes sociales.
- **Estilo:** fondo principal #3F5E4A, texto blanco, padding 48 px arriba y abajo.

## 3. Pantallas

### Landing

1. Navbar
2. Hero
3. Plantas fáciles para empezar (3 cards con la planta y un botón a sus productos)
4. Formulario de leads
5. Últimos artículos del blog (3 cards de artículo)
6. Footer

### Blog

1. Navbar
2. Título "Blog"
3. Diagnóstico por síntoma
4. Chips de categoría (Todos, Cuidados básicos, Plagas y enfermedades, Decoración con plantas)
5. Grilla de cards de artículo
6. Footer

### Artículo

1. Navbar
2. Categoría, título h1 y tiempo de lectura
3. Imagen principal
4. Texto del artículo
5. Producto recomendado (product card horizontal)
6. Bloque de compartir y comentarios
7. Formulario de leads ("¿Te sirvió? Recibe la guía de cuidados gratis")
8. Footer

### Tienda

1. Navbar
2. Título "Tienda" y buscador
3. Chips de categoría (Todos, Sustratos, Fertilizantes, Plagas y enfermedades, Herramientas, Insumos)
4. Fila de kits por tipo de planta (Kit plantas de interior, Kit suculentas, Kit huerto)
5. Columna de filtros + grilla de product cards
6. Footer

### Ficha de producto

1. Navbar
2. Ruta de navegación (Tienda › Categoría › Producto)
3. Imagen del producto + etiqueta, nombre, precio, selector de formato, botón principal "Agregar al carrito" y botón secundario "Consultar por WhatsApp"
4. Guía de uso
5. Productos relacionados (3 product cards)
6. Footer

### Carrito

1. Navbar
2. Título "Tu carrito"
3. Lista de productos (imagen, nombre, formato, cantidad, precio) + resumen del carrito
4. Enlace "Seguir comprando"
5. Footer

## 4. Responsive

| Elemento | Desktop (desde 1024 px) | Mobile (hasta 767 px) |
|---|---|---|
| Navbar | Enlaces visibles y buscador | Menú hamburguesa; carrito siempre visible |
| Hero | Texto e imagen lado a lado | Imagen arriba, texto abajo |
| Grilla de productos | 3 columnas | 1 columna |
| Grilla de artículos | 3 columnas | 1 columna |
| Filtros | Columna a la izquierda | Botón "Filtrar" que abre un panel |
| Chips de categoría | Todos visibles | Fila que se desliza hacia el lado dentro de su bloque, sin generar scroll horizontal en la página |
| Ficha de producto | Imagen y datos lado a lado | Imagen arriba, datos abajo |
| Carrito | Lista y resumen lado a lado | Resumen debajo de la lista |
| Títulos | Tamaños desktop de la escala | Tamaños mobile de la escala |

Entre 768 y 1023 px (tablet), las grillas de productos y artículos usan 2 columnas y el resto se comporta como en desktop.
