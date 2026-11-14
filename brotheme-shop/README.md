# Brotheme Shop

Tema clásico en PHP de Brote (Villa Alemana). Pasa a WordPress el diseño de `DESIGN.md` y el prototipo HTML. Fase 1: Inicio, Blog, Nosotros, Contacto y Preguntas frecuentes. Tienda, Carrito y legales quedan para el plan de continuidad (WooCommerce).

> No se probó con WordPress real (en este equipo no hay PHP). Primero actívalo en Local WP y revisa con `WP_DEBUG` encendido.

## Archivos

| Archivo | Qué hace |
|---|---|
| `style.css` | Datos del tema y todos los estilos (variables de `DESIGN.md`, componentes, páginas y ajustes de plugins) |
| `functions.php` | Menús, estilos, scripts, tipografías y funciones de ayuda (tiempo de lectura, paginación, redes, newsletter) |
| `header.php` / `footer.php` | Cabecera con menú y buscador; pie con redes y enlaces |
| `front-page.php` | Home: portada con collage, últimas 3 entradas y newsletter |
| `index.php` + `template-parts/blog.php` | Blog, categorías, etiquetas y búsqueda |
| `single.php` + `comments.php` | Artículo con compartir, comentarios (Akismet), notas relacionadas y newsletter |
| `page.php` | Páginas con contenido del editor (Nosotros) |
| `page-contacto.php` | Contacto: el formulario es el shortcode de Contact Form 7 en el contenido de la página |
| `page-preguntas-frecuentes.php` | Preguntas con buscador y temas |
| `404.php` | Página no encontrada |
| `assets/js/` | `main.js` (buscador, menú, copiar link), `home.js` (collage y formas), `faq.js` |
| `assets/img/` | Logo, rosetas y fotos del blog (WebP) |

## Puesta en marcha

1. Comprime la carpeta `brotheme-shop` en `.zip` y súbela en **Apariencia > Temas > Añadir nuevo > Subir tema**. Actívala.
2. Crea las páginas **Inicio**, **Blog**, **Nosotros**, **Contacto** y **Preguntas frecuentes** (direcciones `nosotros`, `contacto`, `preguntas-frecuentes`).
3. **Ajustes > Lectura**: "Una página estática", Inicio como portada y Blog como página de entradas.
4. **Ajustes > Enlaces permanentes**: "Nombre de la entrada".
5. Crea las categorías (Cuidados básicos, Plagas y enfermedades, Decoración con plantas) y asigna imagen destacada a cada entrada (se recorta a 16:9; regenera miniaturas si subiste fotos antes).
6. Menús en **Apariencia > Menús** (principal y pie). Si no los creas, el tema muestra uno de respaldo.
7. **Contact Form 7**: en la pestaña Formulario pega lo de abajo y copia el shortcode en el contenido de la página Contacto.
8. **Newsletter**: el tema inserta el formulario con `[newsletter_form]` en Inicio, Blog y artículos.

```
<label> Nombre
  [text* nombre autocomplete:given-name placeholder "¿Cómo te llamas?"] </label>
<label> Correo
  [email* correo autocomplete:email placeholder "tu@correo.cl"] </label>
<label> ¿En qué te ayudamos?
  [select asunto "Una duda sobre un producto" "Mi pedido" "Mi planta no se ve bien" "Otra consulta"] </label>
<label> Mensaje
  [textarea* mensaje placeholder "Cuéntanos qué necesitas…"] </label>
[submit "Enviar mensaje"]
```

## Respaldo

Con All-in-One WP Migration: **Exportar > Archivo** guarda el sitio completo (tema incluido) en un `.wpress`; en el otro servidor instala WordPress, el mismo plugin y usa **Importar**.
