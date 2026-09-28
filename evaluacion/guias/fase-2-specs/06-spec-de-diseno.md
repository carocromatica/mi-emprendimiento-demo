# Spec de diseño

**Archivo:** `docs/09-spec-diseno.md` · **Fase 2** · **9 pts**

## Qué es y para qué sirve

Una **spec** (especificación) describe qué hay que construir y cuáles son sus reglas, con tanta claridad que otra persona (o una IA) podría construirlo sin preguntarte nada.

La **spec de diseño** describe **cómo se ve y cómo se comporta** tu sitio. Aquí construyes tu **mini design system**: las reglas compartidas que hacen que todas las pantallas se vean como parte del mismo sitio. En la Fase 3 se la vas a entregar a Stitch, así que mientras más clara, mejor resultado.

No queremos esto:

> Haz una tienda online moderna, bonita y profesional.

Queremos esto:

> La tienda tiene navbar, buscador, filtro de categorías y una grilla de product cards. Cada card muestra imagen, nombre, precio y el botón "Ver producto". En desktop hay 3 cards por fila; en mobile, 1.

## Qué entregas

Un documento con 4 partes:

1. **Foundations**: colores, tipografías, espaciados, bordes, radios y sombras.
2. **Componentes**: contenido, reglas y estados.
3. **Pantallas**: qué componentes lleva cada una (según tus wireframes), con el link de Whimsical.
4. **Responsive**: qué cambia entre desktop y mobile.

## Paso a paso

### 1. Foundations

Las foundations son las decisiones base que se repiten en todo el sitio. Los colores y tipografías ya los tienes; ahora suma:

- **Espaciados**: una escala fija (por ejemplo, 4, 8, 16, 24, 32, 48, 64 px). Usar siempre los mismos valores es lo que hace que un sitio se vea ordenado.
- **Bordes**: grosor y color.
- **Radios**: qué tan redondeadas son las esquinas de botones, tarjetas e inputs.
- **Sombras**: si usas, cuáles y dónde.

### 2. Componentes

Toma los componentes que calcaste en Whimsical y define para cada uno:

- **Contenido**: qué elementos tiene, en qué orden.
- **Reglas**: lo que siempre se cumple ("el precio siempre es visible", "el nombre ocupa máximo 2 líneas").
- **Estilo**: qué foundations usa (color, tipografía, radio, espaciado).
- **Estados**: cómo se ve en cada situación.

| Estado | Cuándo ocurre |
|---|---|
| Normal | Estado por defecto |
| Hover | El mouse pasa por encima |
| Active | Se está presionando, o es la opción seleccionada |
| Disabled | No se puede usar (por ejemplo, producto agotado) |

No todos los componentes tienen los 4 estados; los botones, enlaces, inputs y filtros sí.

### 3. Pantallas

Para cada una de las 6 pantallas, lista los componentes en orden, de arriba hacia abajo. Pega el link de tus wireframes.

### 4. Responsive

Describe qué cambia en **mobile** y en **tablet** respecto de desktop: cuántas columnas, qué se oculta, qué se transforma (por ejemplo, el menú pasa a ser un botón de hamburguesa, los filtros se abren en un panel). Usa los mismos anchos que vas a definir como breakpoints en la spec de desarrollo: mobile hasta 767 px, tablet desde 768 px y desktop desde 1024 px.

## Ejemplo (fragmento)

```markdown
# Spec de diseño — Brote

**Wireframes:** https://whimsical.com/... (link de ejemplo)

## 1. Foundations

### Colores y tipografía
Ver `08-color-tipografia.md`.

### Espaciados
Escala: 4 · 8 · 16 · 24 · 32 · 48 · 64 px.
- Separación entre secciones: 64 px (desktop), 48 px (mobile).
- Padding interno de tarjetas: 16 px.

### Bordes, radios y sombras
- Borde: 1 px, color #E2D9C6.
- Radio: 8 px en tarjetas e inputs; 999 px (píldora) en botones y chips.
- Sombra: solo en tarjetas al hacer hover, `0 4px 12px rgba(0,0,0,.08)`.

## 2. Componentes

### Botón principal
- **Contenido:** texto en verbo ("Agregar al carrito", "Ver productos").
- **Estilo:** fondo principal #3F5E4A, texto blanco, Inter 600 1rem,
  padding 12 × 24 px, radio píldora.
- **Estados:**
  - Hover: fondo 10 % más oscuro.
  - Active: fondo 20 % más oscuro.
  - Disabled: fondo #CFCAC0, texto #6B675E, sin cursor de mano.

### Product card
- **Contenido:** imagen cuadrada, etiqueta de tipo de planta, nombre,
  precio, botón secundario "Ver producto".
- **Reglas:**
  - El precio siempre es visible.
  - El nombre ocupa máximo 2 líneas; si es más largo, termina en "…".
  - Si el producto está agotado, la imagen va en gris y el botón queda
    disabled con el texto "Agotado".
- **Estilo:** fondo secundario #EDE4D3, radio 8 px, padding 16 px.
- **Estados:** hover con sombra y la imagen se agranda 3 %.

## 3. Pantallas

### Tienda
1. Navbar
2. Título "Tienda" + buscador
3. Chips de categoría (Todos, Sustratos, Fertilizantes, Plagas y enfermedades, Herramientas, Insumos)
4. Fila de kits por tipo de planta (Kit interior, Kit suculentas, Kit huerto)
5. Columna de filtros (tipo de planta, precio) + grilla de product cards
6. Footer

## 4. Responsive

| Elemento | Desktop (desde 1024 px) | Tablet (768 a 1023 px) | Mobile (hasta 767 px) |
|---|---|---|---|
| Navbar | Enlaces visibles | Enlaces visibles | Menú hamburguesa; carrito siempre visible |
| Grilla de productos | 3 columnas | 2 columnas | 1 columna |
| Filtros | Columna a la izquierda | Botón "Filtrar" que abre un panel | Botón "Filtrar" que abre un panel |
| Hero | Texto e imagen lado a lado | Texto e imagen lado a lado | Imagen arriba, texto abajo |
```

Así se ven la product card, los botones, los chips y los campos de texto de Brote con sus foundations y estados. Fíjate en la regla del nombre: si ocupa más de 2 líneas, termina en "…".

![Componentes de Brote con estilo y estados: product card, botones, chips y campo de texto](../img/brote-componentes-con-estilo.png)

## Cómo usar la IA

```text
Te comparto mis componentes calcados [tabla], mis wireframes [captura],
mi paleta y tipografía [pega]. Ayúdame a escribir una spec de diseño con:
foundations (espaciados, bordes, radios, sombras), cada componente con
contenido, reglas, estilo y estados (normal, hover, active, disabled),
los componentes de cada pantalla y el comportamiento responsive.
Usa solo mis colores y tipografías. Escribe reglas concretas y
verificables, nada de "moderno" o "limpio".
```

Revisa todo lo que proponga: tú decides las reglas.

## Errores comunes

- **Reglas vagas**: "que se vea moderno", "botones bonitos". Una regla tiene que poder verificarse.
- **Inventar colores o tipografías** que no están en tu paleta.
- **Componentes sin estados.**
- **Olvidar el responsive.**
- **Que sea solo un prompt**: la spec es un documento con reglas, no una instrucción de una línea.

## Checklist

- [ ] Foundations: colores, tipografías, espaciados, bordes, radios, sombras
- [ ] Cada componente con contenido, reglas, estilo y estados
- [ ] Componentes de las 6 pantallas, con link a los wireframes
- [ ] Tabla de comportamiento responsive para desktop, tablet y mobile
- [ ] Todas las reglas son concretas y verificables
