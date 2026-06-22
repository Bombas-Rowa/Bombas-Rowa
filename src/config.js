// ───────────────────────────────────────────────────────────────
//  CONFIGURACIÓN DEL NEGOCIO
//  Editá estos datos y se actualizan en todo el sitio.
// ───────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'HidroRowa',
  tagline: 'Especialistas en Bombas y Presurizadores Rowa',

  // ⚠️ REEMPLAZAR por el número real (formato internacional, sin + ni espacios).
  // Ej. Argentina: 54 9 11 XXXX XXXX  →  '5491122334455'
  whatsapp: '5491100000000',

  phoneDisplay: '+54 9 11 0000-0000',
  email: 'contacto@hidrorowa.com.ar',
  city: 'Buenos Aires y AMBA',
  hours: 'Lun a Sáb · 8:00 a 19:00 hs',
  // Cuando tengan métricas reales (años, instalaciones, reseñas) se pueden
  // sumar acá y mostrarlas en el sitio. No usar números inventados.

  // Visita técnica: el cliente paga este monto por el diagnóstico a domicilio,
  // y se le descuenta del total si avanza con la compra + instalación.
  visitCost: '$30.000',
}

/**
 * Construye un link de WhatsApp con mensaje pre-cargado.
 * @param {string} message Texto inicial del mensaje
 */
export function waLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${BUSINESS.whatsapp}?text=${text}`
}

export const WA_GENERAL = waLink(
  `¡Hola ${BUSINESS.name}! Quiero coordinar una visita técnica para un tema de presión de agua / bomba Rowa. ¿Cómo seguimos?`,
)

export function waProduct(product) {
  return waLink(
    `¡Hola ${BUSINESS.name}! Me interesa el equipo "${product.name}". Quiero hacer una consulta y coordinar una visita técnica.`,
  )
}
