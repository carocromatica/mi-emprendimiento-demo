# Prototipo en Stitch

**Archivo:** link y capturas en `docs/11-qa.md` · **Fase 3** · **5 pts**

## Qué es y para qué sirve

[Google Stitch](https://stitch.withgoogle.com) es una herramienta de IA que genera pantallas de alta fidelidad (con colores, tipografías e imágenes) a partir de instrucciones de texto o imágenes.

En este proyecto, Stitch es una **herramienta de ejecución**: las decisiones ya las tomaste tú en tus specs. Si tu spec de diseño está bien hecha, este paso es casi mecánico:

- **`DESIGN.md`** → lo importas en Stitch y todas las pantallas siguen tu design system.
- **`docs/09-spec-diseno.md`** → pegas un prompt por pantalla.

> La IA no debería tomar todas las decisiones por nosotros.

## Qué entregas

- Las 6 pantallas generadas en Stitch: **landing, tienda, ficha de producto, carrito, blog y artículo**, en desktop y mobile.
- En `docs/11-qa.md`: el link del proyecto de Stitch y una captura de cada pantalla (en `docs/img/`).
- En la carpeta `stitch/` de tu repositorio: el código que exportes de cada pantalla, como referencia para la implementación.

## Paso a paso

### 1. Crea el proyecto e importa tu DESIGN.md

1. Entra a [stitch.withgoogle.com](https://stitch.withgoogle.com) con tu cuenta de Google y crea un proyecto **web**.
2. Importa tu `DESIGN.md` como **design system del proyecto** (en las opciones de design system del proyecto). Si la interfaz no ofrece importar un archivo, abre tu `DESIGN.md`, copia todo su contenido y pégalo donde Stitch te pida el design system.
3. Revisa que Stitch haya tomado tus colores y tipografías antes de generar pantallas.

### 2. Genera una pantalla a la vez

Copia desde `docs/09-spec-diseno.md` el prompt de la **landing** y pégalo en Stitch. Si Stitch permite adjuntar imágenes, sube también la captura de tu **wireframe** de esa pantalla: le ayuda a respetar tu estructura.

Sigue con el resto, **una por prompt**: tienda, ficha de producto, carrito, blog y artículo. Hazlas en el **mismo proyecto** para que compartan el design system.

### 3. Pide la versión mobile

Cuando tengas las 6 pantallas en desktop, usa el prompt mobile de tu spec en cada una.

### 4. Revisa contra tu spec y corrige

Stitch se puede equivocar o inventar cosas. Compara cada pantalla con tu `DESIGN.md` y tu spec, y pídele correcciones puntuales:

```text
Usa button-primary en "Agregar al carrito". El precio tiene que verse
en todas las card-product. Quita la sección de testimonios: no está
en mi spec.
```

Anota lo que tuviste que corregir: te sirve para el QA. Si corriges muchas veces lo mismo, el problema probablemente está en tu spec: mejórala y vuelve a generar.

### 5. Exporta el código y guarda las capturas

1. Exporta el código de cada pantalla y guárdalo en una carpeta `stitch/` de tu repositorio (por ejemplo, `stitch/tienda.html`). No es tu sitio final: es la referencia que usará tu asistente en el siguiente paso.
2. Toma una captura de cada pantalla y guárdala en `docs/img/`.
3. Copia el link del proyecto de Stitch en `docs/11-qa.md`.

## Ejemplo de prompt

Este es el prompt de la tienda de Brote, tal como está en su `docs/09-spec-diseno.md`. No repite colores ni tipografías: esos ya vienen del `DESIGN.md` importado.

```text
Pantalla: Tienda de Brote, versión desktop. Usa el design system del proyecto.
Objetivo: que Camila encuentre rápido lo que necesita su planta.
Componentes, de arriba hacia abajo:
1. Navbar.
2. h1 "Tienda" y buscador con el texto "Buscar productos o plantas…".
3. Chips de categoría: Todos, Sustratos (activo), Fertilizantes, Plagas y
   enfermedades, Herramientas, Insumos.
4. Fila de 3 card-kit: Kit plantas de interior (ahorra $2.500), Kit
   suculentas (ahorra $1.900), Kit huerto (ahorra $3.200).
5. A la izquierda, columna de filtros de 240px: "Tipo de planta" (Interior
   marcado, Exterior, Suculentas y cactus, Huerto) y rango de precio.
   A la derecha, grilla de 3 columnas con 6 card-product:
   Sustrato para plantas de interior 10 L $7.990 (Interior),
   Tierra de hoja 20 L $5.490 (Interior), Sustrato para suculentas 5 L
   $6.490 (Suculentas), Perlita 5 L $4.990, Humus de lombriz 5 L $6.990,
   Sustrato para huerto 20 L $8.490 (Huerto).
6. Footer.
```

## Errores comunes

- **No importar el `DESIGN.md`** y generar pantallas con los colores y tipografías que Stitch quiera.
- **Prompts de una línea** ("hazme una tienda de jardinería bonita"): Stitch decide todo y el resultado no tiene nada que ver con tus specs.
- **Todo el sitio en un solo prompt**: Stitch funciona mejor con una pantalla a la vez.
- **Aceptar lo primero que genera** sin compararlo con la spec.
- **Pantallas en proyectos distintos**, con estilos distintos entre sí.
- **Componentes inventados** por Stitch que no están en tu spec.

## Checklist

- [ ] `DESIGN.md` importado en el proyecto de Stitch
- [ ] 6 pantallas generadas con los prompts de `docs/09-spec-diseno.md`, en desktop y mobile
- [ ] Colores, tipografías y componentes de tu `DESIGN.md`
- [ ] Navbar y footer iguales en todas
- [ ] Código exportado en `stitch/`
- [ ] Link del proyecto y capturas en `docs/11-qa.md`
- [ ] Correcciones anotadas para el QA
