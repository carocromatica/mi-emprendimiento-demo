# Tecnologías del proyecto — Brote

> Guía: [Tecnologías del proyecto](../evaluacion/guias/fase-1-requerimientos/04-tecnologias.md)

## Stack

| Área | Herramienta | Para qué la uso |
|---|---|---|
| Prototipo | HTML + CSS + JS | Prototipo navegable del diseño (`proyecto/html/`), antes de pasar a WordPress |
| CMS | WordPress | Administrar páginas, entradas del blog, menú y usuarios |
| Tema | Tema clásico propio en PHP (`brotheme-shop`) | Pasar el diseño de Brote a WordPress; se escribe en Antigravity y se sube como `.zip` |
| Tienda | WooCommerce | Productos, categorías, filtros, carrito, finalizar compra y Mi cuenta |
| Pagos | Mercado Pago payments for WooCommerce | Cobrar con tarjeta y otros medios de Mercado Pago |
| SEO | Yoast SEO | Título, descripción, sitemap y migas de pan |
| Formularios | Contact Form 7 | Formulario de contacto con asunto |
| Newsletter | Newsletter | Guardar los correos y enviar las guías y novedades |
| Antispam | Akismet | Filtrar el spam de comentarios y formularios |
| Respaldo | All-in-One WP Migration | Exportar el sitio y reinstalarlo en otro servidor |
| Publicación | InfinityFree | Publicar el sitio WordPress con una URL pública |
| Publicación del prototipo | GitHub Pages | Publicar el HTML estático |
| Versionado | Git y GitHub | Guardar el avance con commits y tener el proyecto en la nube |
| Diseño | Canva, Whimsical y Google Stitch | Paleta de colores, moodboard, wireframes y prototipo en alta fidelidad |
| IA | Claude y Antigravity | Ordenar ideas, revisar los documentos y escribir el tema con las instrucciones de `proyecto/context/` |
| Editor | Claude Code | Escribir los documentos y el código del prototipo |

## Qué es funcional y qué es prototipo

| Funcionalidad | En el prototipo HTML | En WordPress |
|---|---|---|
| Navegación y menú | Funcional | Menú de WordPress |
| Blog por categoría, con paginación | Funcional (JS) | Entradas y categorías de WordPress |
| Comentarios del blog | Solo visual | Comentarios de WordPress con Akismet |
| Compartir un artículo | Funcional (enlaces para compartir) | Funcional |
| Buscador del menú | Funcional con datos de ejemplo | Buscador de WooCommerce |
| Tienda con filtros y orden | Funcional con 26 productos de ejemplo | WooCommerce |
| Ficha de producto, cantidad y agregar al carrito | Funcional | WooCommerce |
| Carrito | Funcional, se guarda en la sesión del navegador | WooCommerce |
| Retiro en tienda o despacho | Funcional (retiro gratis o $3.490) | Zonas de envío de WooCommerce |
| Pago | Solo visual: avisa que no está disponible | Mercado Pago, primero en modo de pruebas |
| Cuenta de usuario | Demo con `?sesion=1` | Mi cuenta de WooCommerce |
| Guías y newsletter | Solo visual | Newsletter |
| Formulario de contacto | Solo visual | Contact Form 7 |
| Consultar por WhatsApp | Funcional (enlace a wa.me) | Funcional |
| Diagnóstico por síntoma y recordatorios por correo | Fuera de esta versión | Fuera de esta versión (futuro) |

## Integraciones para una versión real

- **Pasarela de pago:** Mercado Pago, con su plugin para WooCommerce.
- **Despacho:** hoy es retiro en tienda de Villa Alemana o una tarifa fija de $3.490; más adelante, un courier que calcule el costo por comuna.
- **Email marketing:** el plugin Newsletter guarda los correos y envía las guías. En InfinityFree el correo puede fallar; se resuelve con WP Mail SMTP.
- **Comentarios:** los de WordPress, con Akismet contra el spam.

## Restricciones

- **Plazo:** el prototipo HTML, del 29 de septiembre al 14 de octubre de 2026; el sitio en WordPress, del 5 al 25 de noviembre de 2026.
- **Marca:** el logo y la identidad visual ya están definidos en `DESIGN.md`.
- **Dispositivos:** el sitio debe funcionar en celular y escritorio, priorizando celular porque Camila compra desde el teléfono.
- **Hosting gratuito:** InfinityFree limita el correo y el tamaño del respaldo que se puede importar.
- **Contenido:** los productos, precios y artículos son ficticios.
