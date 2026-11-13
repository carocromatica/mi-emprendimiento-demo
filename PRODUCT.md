# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

HTML + CSS estático hoy, en la raíz del repo (12 páginas: `index`, `tienda`, `producto`, `carrito`, `blog`, `articulo`, `nosotros`, `contacto`, `preguntas-frecuentes`, `terminos`, `privacidad`, `404`; estilos en `css/styles.css`, imágenes en `img/`). Es el diseño definitivo, antes en `prototipo-specs/`. Destino confirmado: pasar después a un tema clásico de WordPress en PHP (con Yoast SEO, Contact Form 7, Akismet y BackWPup). Este repo es el demo de referencia del módulo "De mi emprendimiento a WordPress" (DUOC, MKA1203).

## Users

**Principal: Camila Rojas, 29 años.** Diseñadora gráfica, trabaja híbrido, vive en un departamento con balcón en Santiago. Compra desde el celular, de noche (después de las 21:00), de a 2 o 3 productos para que le convenga el despacho. Sigue cuentas de plantas y decoración en Instagram y TikTok y busca en Google cuando una planta se ve mal. Quiere una casa bonita con plantas y sentirse capaz de cuidar algo vivo. Su frustración: que se le mueran las plantas sin saber por qué, los nombres técnicos ("fitosanitario", "NPK") y descubrir un despacho caro recién al final.

**Secundario: Jorge Muñoz, 63 años.** Profesor jubilado con patio y huerto en Maipú. Sabe lo que necesita y quiere encontrarlo rápido por nombre, en formatos grandes, y poder preguntar por WhatsApp. Cuando sus necesidades choquen con las de Camila, gana Camila.

## Product Purpose

Brote es un emprendimiento **ficticio** de jardinería en Santiago que vende sustratos, fertilizantes, fitosanitarios, herramientas, maceteros y guías de plantas. Hoy vende en su local de barrio y por Instagram, donde responde muchas consultas por mensaje directo. El sitio existe para vender online a todo Chile (objetivo principal) y captar correos a cambio de una guía de cuidados y un 10 % de descuento (objetivo secundario). Éxito: Camila compra sin sorpresas y sus plantas siguen vivas.

## Positioning

Ayuda a personas que recién empiezan con plantas a mantenerlas vivas y sanas: productos seleccionados para cada tipo de planta y guías de cuidado simples, sin lenguaje técnico. A diferencia de una tienda de catálogo, cada producto dice para qué plantas sirve y cómo usarlo, y el blog enlaza a los productos que se necesitan en cada artículo.

## Operating Context

- Compra desde el celular, de noche, en pocos minutos y a menudo de a varios productos.
- El tráfico llega de Instagram/TikTok y de búsquedas en Google por problemas de plantas ("hojas amarillas monstera").
- Contexto académico: demo para probar el enunciado, las guías y las plantillas de la Evaluación 03; los estudiantes lo usan como ejemplo de un sitio que parte de `docs/` (brief, persona, funcionalidades, arquitectura, specs) y `DESIGN.md`.
- Publicación prevista: GitHub Pages para el HTML; más adelante hosting WordPress (InfinityFree en el curso).

## Capabilities and Constraints

Funcionalidades por prioridad (detalle en `docs/03-funcionalidades.md`):

- **Imprescindibles:** captar correo a cambio de guía gratuita + 10 %; artículos por categoría (cuidados básicos, plagas y enfermedades, decoración); búsqueda por nombre o planta; filtros por categoría y tipo de planta (interior, exterior, suculentas, huerto); detalle de producto con formato (5 L, 10 L, 20 L) y agregar al carrito; para qué plantas sirve cada producto y cómo usarlo; costo de despacho antes de pagar.
- **Deseables:** comentar y compartir artículos (WhatsApp, Instagram); diagnóstico por síntoma; kits por tipo de planta; consulta por WhatsApp desde la ficha; selección de plantas fáciles.
- **Futuro:** recordatorios de riego y fertilización por correo.

Estado actual: navegación, ficha de producto, guía de uso, plantas fáciles, WhatsApp (wa.me) y compartir son funcionales; formulario de correo, buscador y filtros, diagnóstico, carrito/kits/despacho y comentarios son solo prototipo visual. Integraciones para una versión real (no implementadas): Webpay o Mercado Pago, courier, email marketing, comentarios externos.

Restricciones: mobile primero, funciona en celular y escritorio; español de Chile, lenguaje simple y sin términos técnicos sin explicar; productos, precios y artículos ficticios.

## Brand Commitments

Marca "Brote" con logo (ícono de hojas) en `assets/Brote-claro.png` y `assets/Brote-oscuro.png`. Voz cercana, tuteo, amable, sin tecnicismos. La identidad visual vigente está registrada en `DESIGN.md`; esa decisión visual no se reabre en este documento.

## Evidence on Hand

- Docs de requerimientos y specs en `docs/` (brief, proto-personas, funcionalidades, tecnologías, arquitectura, moodboard, componentes, color/tipografía, specs de diseño y desarrollo, QA).
- Fotos de producto y de plantas en `assets/`; prototipo navegable en `prototipo-specs/`.
- No hay testimonios, clientes reales, métricas, precios reales ni reseñas: no fabricarlos. Todo el contenido es ficticio y debe leerse como tal.

## Product Principles

1. **Guiar antes que vender.** Cada producto se explica en lenguaje simple (para qué planta, cómo usarlo) y el contenido de cuidado se conecta con la tienda.
2. **Sin sorpresas.** Precio y costo de despacho se ven antes de llegar al pago.
3. **Camila primero.** Se diseña para el celular, de noche, con pocos pasos; Jorge se atiende con búsqueda directa y WhatsApp sin complicar a Camila.
4. **Sentirse capaz.** El tono muestra que cuidar plantas no es complicado; nada técnico ni frío.
5. **Honestidad del prototipo.** Lo que es maqueta se presenta como maqueta, y lo que falta va al plan de continuidad.

## Accessibility & Inclusion

Contraste AA (4.5:1) en todo el texto normal, etiquetas visibles en todos los campos y textos legibles en pantallas pequeñas (Jorge pide textos no chicos). Sin otro requisito específico confirmado.
