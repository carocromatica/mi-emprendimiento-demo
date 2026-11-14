// Catálogo de ejemplo de Brote (prototipo), compartido por la tienda y la ficha de producto
(function () {
  var DESC = {
  "Echeveria agavoides en maceta": "Roseta de hojas puntiagudas con bordes rojizos. Muy resistente y de crecimiento lento.",
  "Echeveria elegans en maceta": "La clásica rosetita azul verdosa. Perfecta para empezar con suculentas.",
  "Echeveria laui en maceta": "Roseta cubierta por una capa blanca como polvo. Es delicada: evita mojar sus hojas.",
  "Aeonium arboreum en maceta": "Crece como un pequeño arbolito de rosetas verdes. Le encanta la luz.",
  "Aeonium arboreum alto en maceta": "Versión más alta del Aeonium arboreum, ideal para dar altura a tu rincón verde.",
  "Aeonium haworthii en maceta": "Rosetas compactas de bordes rosados. Se ve preciosa en una repisa.",
  "Aeonium rosetas en maceta": "Aeonium con varias rosetas que van creciendo en racimo.",
  "Graptopetalum amethystinum en maceta": "Rosetas gruesas de tono lavanda. Le gusta el sol y el riego espaciado.",
  "Graptopetalum paraguayense en maceta": "También llamada planta fantasma: hojas carnosas de color gris azulado.",
  "Sedum adolphi en maceta": "Hojas verde dorado que se tiñen de naranja con el sol.",
  "Sedum burrito en maceta": "Tallos colgantes cubiertos de hojitas redondas. Ideal para repisas y macetas colgantes.",
  "Sedum dasyphyllum en maceta": "Pequeñas hojitas azuladas que forman una alfombra. Muy fácil de cuidar.",
  "Cactus de barril en maceta blanca": "Cactus redondo de espinas doradas, de crecimiento lento y casi sin mantención.",
  "Set de 3 maceteros de cerámica": "Tres maceteros de cerámica en colores suaves, perfectos para suculentas pequeñas.",
  "Set de herramientas de jardinería": "Regadera, pala, rastrillo y tijeras: lo básico para trasplantar y podar tus plantas.",
  "Sustrato para plantas de interior 10 L": "Mezcla liviana que retiene la humedad justa para que las raíces respiren. Ideal para monsteras, potus y helechos.",
  "Tierra de hoja 20 L": "Tierra rica en materia orgánica que mejora cualquier mezcla y aporta nutrientes.",
  "Sustrato para suculentas y cactus con arena de río 5 L": "Mezcla con arena de río que drena rápido para que las raíces no se pudran.",
  "Perlita 5 L": "Piedra volcánica liviana que airea el sustrato y mejora el drenaje.",
  "Sustrato para huerto 20 L": "Sustrato nutritivo para almácigos y hortalizas, en maceta o en el suelo.",
  "Humus de lombriz 5 L": "Abono natural que aporta nutrientes de forma suave y mejora la tierra.",
  "Fertilizante líquido para plantas de interior 500 ml": "Se diluye en el agua de riego y alimenta a tus plantas de interior.",
  "Aceite de neem 250 ml": "Aceite natural para prevenir y combatir plagas como la cochinilla.",
  "Kit plantas de interior": "Todo lo que necesitas para trasplantar tus plantas de interior, en un solo pack.",
  "Kit suculentas": "Lo básico para plantar tus suculentas y que crezcan sanas, en un solo pack.",
  "Kit huerto": "Para armar tu huerto en casa: sustrato, humus y una pala de mano."
};
  var KIT = {
  "Kit plantas de interior": {
    "incluye": [
      "Sustrato 10 L",
      "Fertilizante líquido 500 ml",
      "Macetero de greda 18 cm"
    ],
    "ahorro": 2500
  },
  "Kit suculentas": {
    "incluye": [
      "Sustrato para suculentas 5 L",
      "Fertilizante suave 250 ml",
      "Macetero de greda 12 cm"
    ],
    "ahorro": 1900
  },
  "Kit huerto": {
    "incluye": [
      "Sustrato para huerto 20 L",
      "Humus de lombriz 5 L",
      "Pala de mano"
    ],
    "ahorro": 3200
  }
};
  var CATS = [
    { id: 'suculentas', label: 'Suculentas', img: 'img/home/cat-suculentas.png', tint: 't-pink' },
    { id: 'cactus', label: 'Cactus', img: 'img/home/cat-cactus.png', tint: 't-lima' },
    { id: 'maceteros', label: 'Maceteros', img: 'img/home/cat-maceteros.png', tint: 't-celadon' },
    { id: 'sustratos', label: 'Sustratos', img: 'img/home/cat-sustratos.png', tint: 't-pink' },
    { id: 'fertilizantes', label: 'Fertilizantes', img: 'img/home/cat-fertilizantes.png', tint: 't-lima' },
    { id: 'herramientas', label: 'Herramientas', img: 'img/home/cat-herramientas.png', tint: 't-celadon' }
  ];
  var TIPOS = [
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'suculentas', label: 'Suculentas y cactus' },
    { id: 'huerto', label: 'Huerto' }
  ];
  var P = function (name, cats, tipos, price, img, ventas, nuevo) { return { name: name, cats: [].concat(cats), tipos: tipos, price: price, img: img, ventas: ventas, nuevo: !!nuevo, desc: DESC[name] || '', kit: KIT[name] || null }; };
  var M = 'img/portada/maceta-', S = 'img/productos/';
  var PRODUCTS = [
    P('Echeveria agavoides en maceta', 'suculentas', ['suculentas', 'interior'], 8990, M + 'echeveria-agavoides.webp', 95, 1),
    P('Echeveria elegans en maceta', 'suculentas', ['suculentas', 'interior'], 6990, M + 'echeveria-elegans.webp', 98),
    P('Echeveria laui en maceta', 'suculentas', ['suculentas', 'interior'], 9990, M + 'echeveria-laui.webp', 70, 1),
    P('Aeonium arboreum en maceta', 'suculentas', ['suculentas', 'exterior'], 7490, M + 'aeonium-arboreum.webp', 80),
    P('Aeonium arboreum alto en maceta', 'suculentas', ['suculentas', 'exterior'], 8490, M + 'aeonium-arboreum-alto.webp', 60),
    P('Aeonium haworthii en maceta', 'suculentas', ['suculentas', 'interior'], 6990, M + 'aeonium-haworthii.webp', 75),
    P('Aeonium rosetas en maceta', 'suculentas', ['suculentas', 'interior'], 7990, M + 'aeonium-rosetas.webp', 55),
    P('Graptopetalum amethystinum en maceta', 'suculentas', ['suculentas', 'interior'], 8490, M + 'graptopetalum-amethystinum.webp', 65),
    P('Graptopetalum paraguayense en maceta', 'suculentas', ['suculentas', 'interior'], 6490, M + 'graptopetalum-paraguayense.webp', 85),
    P('Sedum adolphi en maceta', 'suculentas', ['suculentas', 'interior'], 5990, M + 'sedum-adolphi.webp', 50, 1),
    P('Sedum burrito en maceta', 'suculentas', ['suculentas', 'interior'], 6990, M + 'sedum-burrito.webp', 90),
    P('Cactus de barril en maceta blanca', 'cactus', ['suculentas', 'interior'], 7490, 'img/home/cat-cactus.png', 66),
    P('Set de 3 maceteros de cerámica', 'maceteros', ['interior'], 12990, 'img/home/cat-maceteros.png', 74, 1),
    P('Set de herramientas de jardinería', 'herramientas', ['interior', 'huerto'], 14990, 'img/home/cat-herramientas.png', 57),
    P('Sedum dasyphyllum en maceta', 'suculentas', ['suculentas', 'exterior'], 4990, M + 'sedum-dasyphyllum.webp', 45),
    P('Sustrato para plantas de interior 10 L', 'sustratos', ['interior'], 7990, S + 'sustrato-interior.svg', 100),
    P('Tierra de hoja 20 L', 'sustratos', ['interior', 'exterior'], 5490, S + 'tierra-de-hoja.svg', 72),
    P('Sustrato para suculentas y cactus con arena de río 5 L', 'sustratos', ['suculentas'], 6490, S + 'sustrato-suculentas.svg', 92),
    P('Perlita 5 L', 'sustratos', ['suculentas', 'interior'], 4990, S + 'perlita.svg', 58),
    P('Sustrato para huerto 20 L', 'sustratos', ['huerto'], 8490, S + 'sustrato-huerto.svg', 52),
    P('Humus de lombriz 5 L', 'fertilizantes', ['huerto', 'exterior'], 6990, S + 'humus.svg', 62),
    P('Fertilizante líquido para plantas de interior 500 ml', 'fertilizantes', ['interior'], 5990, S + 'fertilizante-liquido.svg', 88, 1),
    P('Aceite de neem 250 ml', 'fertilizantes', ['interior', 'exterior'], 6490, S + 'aceite-de-neem.svg', 68),
    P('Kit plantas de interior', ['maceteros', 'sustratos', 'fertilizantes'], ['interior'], 17490, S + 'kit-interior.svg', 78),
    P('Kit suculentas', ['suculentas', 'maceteros', 'sustratos', 'fertilizantes'], ['suculentas'], 12990, S + 'kit-suculentas.svg', 82),
    P('Kit huerto', ['sustratos', 'fertilizantes', 'herramientas'], ['huerto'], 19990, S + 'kit-huerto.svg', 48)
  ];
  PRODUCTS.forEach(function (p, i) { p.i = i; p.tint = ['t-lima', 't-pink', 't-celadon', 't-mint'][i % 4]; });
  PRODUCTS.forEach(function (p) { p.id = p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); });
  window.BROTE = { CATS: CATS, TIPOS: TIPOS, PRODUCTS: PRODUCTS };
})();
