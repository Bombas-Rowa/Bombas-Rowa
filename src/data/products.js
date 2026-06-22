// Catálogo de productos Rowa.
// Datos reales tomados del sitio oficial https://bombasrowa.com/
// (nombres, descripciones y especificaciones técnicas).
//
// Las imágenes (`image`) están alojadas localmente en /public/productos/
// (descargadas del catálogo Rowa). Para cambiar una foto, reemplazá el
// archivo correspondiente en esa carpeta. Si alguna no cargara, <ProductThumb>
// usa como respaldo el tile técnico de marca generado por categoría.

const IMG = '/productos/'

export const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'presurizadores', label: 'Presurizadores' },
  { id: 'velocidad-variable', label: 'Velocidad variable' },
  { id: 'grupos', label: 'Grandes instalaciones' },
  { id: 'desagote', label: 'Desagote' },
]

export const PRODUCTS = [
  {
    id: 'tango-press-24',
    name: 'Rowa Tango Press 24',
    category: 'presurizadores',
    image: IMG + 'tango-press-24.jpg',
    tagline: 'Más confort en el baño y puntos de consumo',
    badge: 'Más elegida',
    highlight: true,
    short:
      'Presurizadora silenciosa para aumentar la presión de agua en viviendas con tanque elevado o cisterna. Ideal para hasta 3 plantas y 3 duchas.',
    specs: [
      { label: 'Potencia', value: '0,70 HP' },
      { label: 'Caudal máx.', value: '6.000 l/h' },
      { label: 'Presión máx.', value: '23,5 m.c.a.' },
      { label: 'Tensión', value: '220 V' },
      { label: 'Conexión', value: '1" rosca' },
      { label: 'Aplicación', value: 'Hasta 3 plantas / 3 duchas' },
    ],
    features: [
      'Totalmente silenciosa (sistema de rotor húmedo)',
      'Protección contra funcionamiento en seco: se apaga sola',
      'Materiales no oxidables: bronce, acero inoxidable y termoplásticos',
      'Bajo consumo, seguridad y confiabilidad',
    ],
    ideal: 'Casas de hasta 3 plantas que buscan buena presión sin ruido.',
    warranty: '2 años de garantía oficial Rowa',
  },
  {
    id: 'tango-press-20',
    name: 'Rowa Tango Press 20',
    category: 'presurizadores',
    image: IMG + 'tango-press-20.jpg',
    tagline: 'Presión confiable para departamentos y PH',
    badge: null,
    highlight: false,
    short:
      'Presurizadora de bajo consumo de la línea Press, pensada para aumentar la presión del agua en viviendas con cisterna o tanque elevado. Hasta 2 plantas y 2 duchas.',
    specs: [
      { label: 'Potencia', value: '0,50 HP' },
      { label: 'Caudal máx.', value: '4.000 l/h' },
      { label: 'Presión máx.', value: '19 m.c.a.' },
      { label: 'Tensión', value: '220 V' },
      { label: 'Conexión', value: '1" rosca' },
      { label: 'Aplicación', value: 'Hasta 2 plantas / 2 duchas' },
    ],
    features: [
      'Bajo consumo eléctrico (2,6 A)',
      'Tanque interno de 1 litro para arranques suaves',
      'Incluye 2 válvulas esféricas con uniones dobles',
      'Bajo consumo, seguridad y confiabilidad',
    ],
    ideal: 'Departamentos y PH con duchas de poca presión.',
    warranty: '2 años de garantía oficial Rowa',
  },
  {
    id: 'tango-sfl-20',
    name: 'Rowa Tango SFL 20',
    category: 'presurizadores',
    image: IMG + 'tango-sfl-20.jpg',
    tagline: 'Pensada para instalaciones antiguas',
    badge: 'Silenciosa',
    highlight: false,
    short:
      'Presurizadora de la línea SFL para aumentar la presión en residencias nuevas o antiguas con tanque elevado. Compatible con cañerías de 20 años o más. Hasta 4 duchas.',
    specs: [
      { label: 'Potencia', value: '0,50 HP' },
      { label: 'Caudal máx.', value: '4.000 l/h' },
      { label: 'Presión máx.', value: '19 m.c.a.' },
      { label: 'Tensión', value: '220 V' },
      { label: 'Conexión', value: '1" rosca' },
      { label: 'Aplicación', value: 'Hasta 4 duchas' },
    ],
    features: [
      'Apta para tuberías de 20 años o más',
      'Funcionamiento silencioso',
      'Compacta y liviana (7,5 kg)',
      'Tolera temperatura de agua de hasta 40 °C',
    ],
    ideal: 'Casas antiguas con cañerías viejas y baja presión.',
    warranty: '2 años de garantía oficial Rowa',
  },
  {
    id: 'inteligent-24',
    name: 'Rowa Inteligent 24',
    category: 'presurizadores',
    image: IMG + 'inteligent-24.jpg',
    tagline: 'Llena tu tanque de forma automática',
    badge: 'Llenado automático',
    highlight: false,
    short:
      'Sistema patentado por Rowa que automatiza el llenado del tanque elevado, sin flotante eléctrico. Ideal para viviendas con suministro de agua deficiente o irregular. De 1 a 5 plantas.',
    specs: [
      { label: 'Potencia', value: '0,67 HP' },
      { label: 'Caudal máx.', value: '5.000 l/h' },
      { label: 'Presión máx.', value: '19 m.c.a.' },
      { label: 'Tensión', value: '220 V' },
      { label: 'Protección', value: 'IP 44' },
      { label: 'Aplicación', value: '1 a 5 plantas' },
    ],
    features: [
      'Sensor que monitorea el nivel del tanque',
      'No requiere flotante eléctrico',
      'Protección automática ante falta de agua',
      'Apta para bombear agua potable sin residuos',
    ],
    ideal: 'Zonas con presión de red baja o cortes frecuentes.',
    warranty: '2 años de garantía oficial Rowa',
  },
  {
    id: 'max-press-30-vf',
    name: 'Rowa Max Press 30 VF',
    category: 'velocidad-variable',
    image: IMG + 'max-press-30-vf.jpg',
    tagline: 'Variador de frecuencia: presión constante',
    badge: 'Velocidad variable',
    highlight: true,
    short:
      'Presurizadora con variador de frecuencia que adapta su funcionamiento al consumo real y mantiene la presión constante. Para viviendas con cisterna o tanque elevado, hasta 4 plantas y 8 duchas.',
    specs: [
      { label: 'Potencia', value: '1,00 HP' },
      { label: 'Caudal máx.', value: '7.000 l/h' },
      { label: 'Presión máx.', value: '29 m.c.a.' },
      { label: 'Tensión', value: '220 V' },
      { label: 'Conexión', value: '1"' },
      { label: 'Aplicación', value: 'Hasta 4 plantas / 8 duchas' },
    ],
    features: [
      'Variador de frecuencia: modula la presión de forma constante',
      'Se detiene automáticamente tras 30 s sin demanda',
      'Bajo consumo energético',
      'Adapta su funcionamiento al consumo real de la casa',
    ],
    ideal: 'Casas grandes que quieren presión pareja y ahorro de energía.',
    warranty: '2 años de garantía oficial Rowa',
  },
  {
    id: 'max-press-40-vf',
    name: 'Rowa Max Press 40 VF',
    category: 'velocidad-variable',
    image: IMG + 'max-press-40-vf.jpg',
    tagline: 'Máxima presión para viviendas grandes',
    badge: 'Premium',
    highlight: false,
    short:
      'La presurizadora más potente de la línea Press VF. Variador de frecuencia, regulación constante de presión y mayor vida útil del equipo. Para viviendas de grandes dimensiones, hasta 4 plantas y 8 baños.',
    specs: [
      { label: 'Potencia', value: '1,50 HP' },
      { label: 'Caudal máx.', value: '6.000 l/h' },
      { label: 'Presión máx.', value: '36 m.c.a.' },
      { label: 'Tensión', value: '220 V' },
      { label: 'Conexión', value: '1"' },
      { label: 'Aplicación', value: 'Hasta 4 plantas / 8 baños' },
    ],
    features: [
      'Regula la presión de forma constante con variador de frecuencia',
      'Bajo consumo energético',
      'Prolonga la vida útil del equipo',
      'Instalación sencilla en posición horizontal',
    ],
    ideal: 'Viviendas grandes y exigentes que necesitan mucha presión.',
    warranty: '2 años de garantía oficial Rowa',
  },
  {
    id: 'gpr-vss-2260',
    name: 'Rowa GPR VSS 2260',
    category: 'grupos',
    image: IMG + 'gpr-vss-2260.jpg',
    tagline: 'Grupo de presión para grandes consumos',
    badge: 'Grandes instalaciones',
    highlight: false,
    short:
      'Grupo de presión trifásico con dos electrobombas multietapa de velocidad variable. Diseño compacto en línea, colectores de acero inoxidable y tablero eléctrico IP65. Para edificios, hoteles y comercios.',
    specs: [
      { label: 'Potencia', value: '2 × 3 HP' },
      { label: 'Caudal máx.', value: '28.000 l/h' },
      { label: 'Presión máx.', value: '54 m.c.a.' },
      { label: 'Bombas', value: '2 electrobombas' },
      { label: 'Tensión', value: '3 × 380 V' },
      { label: 'Conexión', value: '2"' },
    ],
    features: [
      'Dos electrobombas multietapa de velocidad variable',
      'Colectores de acero inoxidable AISI 304 con válvulas',
      'Tablero eléctrico IP65, protección UV e impacto IK09',
      'Base de chapa galvanizada, diseño compacto en línea',
    ],
    ideal: 'Edificios, consorcios, hoteles, colegios y supermercados.',
    warranty: '2 años de garantía oficial Rowa',
  },
  {
    id: 'rw-drain-800-plus',
    name: 'Rowa RW Drain 800 Plus',
    category: 'desagote',
    image: IMG + 'rw-drain-800-plus.jpg',
    tagline: 'Sumergible de desagote y drenaje',
    badge: null,
    highlight: false,
    short:
      'Bomba sumergible de desagote con impulsor tipo vortex, ideal para drenaje de inundaciones, vaciado de tanques y piscinas, riego y aguas residuales. Funcionamiento continuo en entornos exigentes.',
    specs: [
      { label: 'Potencia', value: '1 HP (0,75 kW)' },
      { label: 'Caudal máx.', value: '22.500 l/h' },
      { label: 'Altura máx.', value: '11 m' },
      { label: 'Paso sólidos', value: '35 mm' },
      { label: 'Descarga', value: '2"' },
      { label: 'Inmersión', value: 'Hasta 5 m' },
    ],
    features: [
      'Impulsor tipo vortex para agua con sólidos',
      'Bobinado de cobre con protección térmica',
      'Drena sótanos, piscinas y zonas inundadas',
      'Cable de 8 m incluido',
    ],
    ideal: 'Sótanos inundables, vaciado de piletas, riego y emergencias.',
    warranty: '2 años de garantía oficial Rowa',
  },
  {
    id: 'rw-drain-1300-plus',
    name: 'Rowa RW Drain 1300 Plus',
    category: 'desagote',
    image: IMG + 'rw-drain-1300-plus.jpg',
    tagline: 'Sumergible con triturador para aguas sucias',
    badge: 'Con triturador',
    highlight: false,
    short:
      'Bomba sumergible para bombeo de aguas sucias o cargadas con sólidos en suspensión. Impulsor tipo vortex con triturador incorporado. Para uso residencial e industrial exigente.',
    specs: [
      { label: 'Potencia', value: '1,8 HP (1,3 kW)' },
      { label: 'Caudal máx.', value: '22.000 l/h' },
      { label: 'Altura máx.', value: '14 m' },
      { label: 'Paso sólidos', value: '50 mm' },
      { label: 'Descarga', value: '2"' },
      { label: 'Inmersión', value: 'Hasta 5 m' },
    ],
    features: [
      'Triturador incorporado para sólidos en suspensión',
      'Impulsor tipo vortex de alta prestación hidráulica',
      'Apta para hospitales, lavanderías, hoteles y agro',
      'Bobinado de cobre con protección térmica y cable de 8 m',
    ],
    ideal: 'Desagote de aguas servidas residenciales e industriales.',
    warranty: '2 años de garantía oficial Rowa',
  },
]
