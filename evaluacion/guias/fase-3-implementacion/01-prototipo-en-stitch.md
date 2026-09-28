# Prototipo en Stitch

**Archivo:** link y capturas en `docs/11-qa.md` · **Fase 3** · **5 pts**

## Qué es y para qué sirve

[Google Stitch](https://stitch.withgoogle.com) es una herramienta de IA que genera pantallas de alta fidelidad (con colores, tipografías e imágenes) a partir de instrucciones de texto o imágenes.

En este proyecto, Stitch es una **herramienta de ejecución**: las decisiones ya las tomaste tú en tus specs. Stitch solo las visualiza. Por eso, la calidad del prototipo depende de la calidad de tus specs.

> La IA no debería tomar todas las decisiones por nosotros.

## Qué entregas

- Las 6 pantallas generadas en Stitch: **landing, blog, artículo, tienda, ficha de producto y carrito**.
- En `docs/11-qa.md`: el link del proyecto de Stitch y una captura de cada pantalla (en `docs/img/`).

## Paso a paso

### 1. Prepara el contexto

Stitch no conoce tu proyecto. Antes de pedir pantallas, arma un texto de contexto con lo esencial de tus specs:

- Qué es el emprendimiento y para quién es el sitio (brief y proto-persona, en 2 o 3 líneas).
- Paleta con HEX y tipografías.
- Foundations: espaciados, radios, sombras.
- Estilo en palabras clave (de tu moodboard).

### 2. Genera una pantalla a la vez

Parte por la **landing**, que define el estilo del resto. Para cada pantalla, dale a Stitch:

- El contexto del paso anterior.
- Los componentes de esa pantalla, en orden (de tu spec de diseño).
- Las reglas de los componentes más importantes.
- Si es para desktop o mobile.

Si Stitch permite adjuntar imágenes, sube la captura de tu **wireframe** de esa pantalla: le ayuda a respetar tu estructura.

### 3. Revisa contra tu spec y corrige

Stitch se va a equivocar o va a inventar cosas. Compara cada pantalla con tu spec y pídele correcciones puntuales:

```text
Cambia el color del botón a #3F5E4A. El precio tiene que verse en
todas las tarjetas. Quita la sección de testimonios: no está en mi spec.
```

Anota lo que tuviste que corregir: te sirve para el QA.

### 4. Mantén la consistencia

Cuando la landing te guste, genera las demás pantallas **en el mismo proyecto** y pide que mantengan el mismo estilo. Revisa que la navbar y el footer sean iguales en todas.

### 5. Guarda el link y las capturas

Toma una captura de cada pantalla y guárdala en `docs/img/`. Copia el link del proyecto.

## Ejemplo de prompt

```text
Contexto: Brote es una tienda chilena de jardinería: sustratos,
fertilizantes, productos contra plagas, herramientas y maceteros.
El sitio es para Camila, 29 años, que compra desde el celular, quiere
una casa bonita con plantas y necesita que la guíen para que no se le mueran.
Estilo: natural, fresco, cálido, simple, vivo. Mucho espacio en blanco.
Colores: principal #3F5E4A, secundario #EDE4D3, acento #C0643A,
fondo #FBF8F2, texto #2B2B28.
Tipografías: Fraunces para títulos, Inter para textos.
Radios: 8 px en tarjetas, botones tipo píldora.

Pantalla: Tienda, versión desktop.
Componentes en orden:
1. Navbar: logo, enlaces Tienda / Blog / Nosotros / Contacto, buscador,
   ícono de carrito con contador.
2. Título "Tienda" y buscador "Buscar productos o plantas".
3. Chips de categoría: Todos, Sustratos, Fertilizantes, Plagas y
   enfermedades, Herramientas, Insumos.
4. Fila de 3 kits por tipo de planta (interior, suculentas, huerto), cada
   uno con lo que incluye, precio y ahorro.
5. Columna de filtros a la izquierda (tipo de planta, precio) y grilla de
   3 columnas de product cards.
6. Product card: imagen cuadrada, etiqueta de tipo de planta, nombre
   (máx. 2 líneas), precio siempre visible, botón "Ver producto".
7. Footer con enlaces a preguntas frecuentes, términos, privacidad y redes.
```

## Errores comunes

- **Prompts de una línea** ("hazme una tienda de jardinería bonita"): Stitch decide todo y el resultado no tiene nada que ver con tus specs.
- **Aceptar lo primero que genera** sin compararlo con la spec.
- **Pantallas con estilos distintos entre sí.**
- **Componentes inventados** por Stitch que no están en tu spec.

## Checklist

- [ ] 6 pantallas generadas en el mismo proyecto
- [ ] Colores, tipografías y componentes de tus specs
- [ ] Navbar y footer iguales en todas
- [ ] Link del proyecto y capturas en `docs/11-qa.md`
- [ ] Correcciones anotadas para el QA
