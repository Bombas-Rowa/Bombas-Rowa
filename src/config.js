// ───────────────────────────────────────────────────────────────
//  CONFIGURACIÓN DEL NEGOCIO
//  Editá estos datos y se actualizan en todo el sitio.
// ───────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'Hidrorescate',
  // Servicio independiente y multimarca (NO somos una marca de bombas).
  tagline: 'Servicio técnico de bombas y presurizadores · Multimarca',
  // Eslogan que ataca el dolor (baja presión / quedarse sin agua).
  slogan: 'Te rescatamos del agua sin presión.',

  // Número de WhatsApp (wa.me) y teléfono visible. Se leen del archivo .env
  // (VITE_WHATSAPP / VITE_PHONE_DISPLAY); el valor de acá es solo fallback.
  whatsapp: import.meta.env.VITE_WHATSAPP || '5491168698390',

  phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || '+54 9 11 6869-8390',
  email: 'contacto@hidrorescate.com.ar',
  city: 'Buenos Aires y AMBA',
  hours: 'Lun a Sáb · 8:00 a 19:00 hs',
  // Cuando tengan métricas reales (años, instalaciones, reseñas) se pueden
  // sumar acá y mostrarlas en el sitio. No usar números inventados.

  // Visita técnica: el cliente paga este monto por el diagnóstico a domicilio,
  // y se le descuenta del total si avanza con la compra + instalación.
  visitCost: '$30.000',
}

// Marcas con las que trabajan. ⚠️ Reemplazá/completá con la lista REAL.
// Si tenés el logo en imagen, dejalo en /public/marcas/<archivo> y poné la
// ruta en `logo`; si no, se muestra el nombre como wordmark.
export const BRANDS = [
  { name: 'Rowa', featured: true, note: 'Calidad y respaldo', logo: '/marcas/rowa.svg' },
  { name: 'Motorarg', logo: '/marcas/motorarg.svg' },
  { name: 'Grundfos', logo: '/marcas/grundfos.svg' },
  { name: 'Pedrollo', logo: '/marcas/pedrollo.svg' },
  { name: 'Espa', logo: '/marcas/espa.svg' },
  { name: 'Franklin Electric', logo: '/marcas/franklinElectric.svg' },
  { name: 'Komasa', logo: '/marcas/komasa.svg' },
]

/**
 * Construye un link de WhatsApp con mensaje pre-cargado.
 * @param {string} message Texto inicial del mensaje
 */
export function waLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${BUSINESS.whatsapp}?text=${text}`
}

export const WA_GENERAL = waLink(
  `¡Hola ${BUSINESS.name}! Quiero coordinar una visita técnica por un tema de presión de agua / bomba. ¿Cómo seguimos?`,
)

export function waProduct(product) {
  return waLink(
    `¡Hola ${BUSINESS.name}! Me interesa el equipo "${product.name}". Quiero hacer una consulta y coordinar una visita técnica.`,
  )
}
