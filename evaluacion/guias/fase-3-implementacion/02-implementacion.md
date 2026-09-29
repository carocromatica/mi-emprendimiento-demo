# Implementación en HTML + CSS

**Archivos:** páginas `.html`, `css/` e `img/` en la raíz del repositorio · **Fase 3** · **9 pts implementación + 3 pts responsive**

## Qué es y para qué sirve

Implementar es pasar el prototipo a **código real**: páginas HTML con su CSS, que se abren en el navegador y se pueden recorrer.

Aquí se nota el valor de todo lo anterior. Si tus specs están claras, tu asistente de IA (Antigravity o Claude Code) puede construir el sitio casi sin preguntar; si están vagas, va a inventar.

## Qué entregas

- Las páginas del sitio en **HTML + CSS**: como mínimo landing, blog, artículo, tienda, ficha de producto y carrito, **enlazadas entre sí**.
- Un CSS que usa las **variables** de tu design system.
- Un sitio que se adapta a **mobile y desktop**.

Las páginas obligatorias (contacto, preguntas frecuentes, términos, privacidad, 404) no son parte del mínimo, pero si las enlazas en el footer tienen que existir: crea al menos la página con su título y un texto breve para que esos enlaces no queden rotos.

## Paso a paso

### 1. Entrega tus specs al asistente

Tu spec de desarrollo ya trae el prompt para el asistente (sección "Insumos"). Abre tu repositorio en Antigravity o Claude Code y pégale ese prompt. El asistente va a leer:

- **`DESIGN.md`**: de ahí salen los valores de `:root` (colores, tipografía, espaciados, radios).
- **`docs/09-spec-diseno.md`**: qué componentes lleva cada pantalla.
- **`docs/10-spec-desarrollo.md`**: archivos, navegación, estructura semántica y criterios de aceptación.
- **La carpeta `stitch/`**: el código exportado de Stitch, como referencia visual.

El código de Stitch suele venir con estilos propios (a veces con clases de Tailwind). Por eso no se usa tal cual: el resultado tiene que **cumplir tu spec de desarrollo**, con HTML + CSS propios, tus archivos y tus variables.

### 2. Parte por la base

1. Crea la estructura de carpetas de tu spec.
2. Crea `css/styles.css` con las **variables de `:root`**.
3. Construye la **navbar y el footer** una vez, y cópialos en todas las páginas.

### 3. Construye página por página

Sigue el orden de tu user flow: landing → tienda → producto → carrito, y después blog → artículo. Después de cada página:

- Ábrela en el navegador.
- Compárala con Stitch y con tu spec.
- Haz un commit.

```bash
git commit -m "feat: agrega página de tienda con grilla de productos"
```

### 4. Revisa el responsive

Usa las herramientas de desarrollo del navegador (clic derecho → Inspeccionar → ícono de dispositivo móvil) y revisa cada página en **375 px** (celular) y **1280 px** (escritorio).

Revisa que:

- No haya **scroll horizontal**.
- Ningún texto quede **cortado** o encima de otro.
- Se cumpla lo que dice la tabla responsive de tu spec (columnas, menú, filtros).

### 5. Recorre tus user flows

Haz los dos flujos de la Fase 1 haciendo clic, como si fueras tu proto-persona. Si en algún paso no puedes avanzar, falta un enlace.

## Cómo usar la IA

Entrégale al asistente **tus documentos**, no una descripción de memoria. En Antigravity o Claude Code puedes referenciar los archivos directamente:

```text
Lee DESIGN.md, docs/09-spec-diseno.md y docs/10-spec-desarrollo.md.
Construye tienda.html siguiendo exactamente esas specs: usa solo
HTML y CSS, las variables de :root en css/styles.css y la estructura
semántica definida. La navbar y el footer deben ser iguales a los de
index.html. No agregues componentes que no estén en la spec.
Usa stitch/tienda.html solo como referencia visual.
```

Si el asistente propone algo distinto de tu spec, **tú decides**: o corriges el código o actualizas la spec (y lo anotas en el QA).

## Errores comunes

- **Colores escritos a mano** en el CSS en vez de usar las variables.
- **Navbar distinta en cada página.**
- **Enlaces rotos**, sobre todo en el footer.
- **Imágenes sin `alt`** o con nombres con espacios y tildes (`Foto Macetero Grande.png`).
- **Todo en un commit al final.**
- **Agregar librerías o frameworks** que no están en tu spec de tecnologías.

## Checklist

- [ ] Landing, blog, artículo, tienda, ficha de producto y carrito
- [ ] Páginas enlazadas entre sí; sin enlaces rotos
- [ ] Navbar y footer iguales en todas las páginas
- [ ] CSS con variables de `:root`
- [ ] HTML semántico e imágenes con `alt`
- [ ] Sin scroll horizontal en 375 px
- [ ] Los dos user flows se pueden recorrer
- [ ] Commits por página o por avance
