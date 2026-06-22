import Reveal, { SectionHeading } from '../components/Reveal'
import { IconGauge, IconCheck, IconShield, IconChat } from '../components/Icons'

// Sección de confianza basada en compromisos reales (no en reseñas
// inventadas). Cuando el negocio tenga reseñas de Google, se puede sumar
// acá un bloque con las opiniones reales.
const COMMITMENTS = [
  {
    icon: IconGauge,
    title: 'Presupuesto exacto',
    text: 'El precio final te lo damos en la visita. Lo que acordamos es lo que pagás, sin sorpresas.',
  },
  {
    icon: IconCheck,
    title: 'Asesoramiento honesto',
    text: 'Te recomendamos la bomba que tu casa realmente necesita, no la más cara.',
  },
  {
    icon: IconShield,
    title: 'Garantía por escrito',
    text: 'Factura y garantía en cada trabajo. Si algo falla, volvemos a resolverlo.',
  },
  {
    icon: IconChat,
    title: 'Respuesta en el día',
    text: 'Te contestamos por WhatsApp y coordinamos la visita cuando te quede cómodo.',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Nuestro compromiso"
          title="Por qué vas a quedarte tranquilo"
          description="Así trabajamos en cada visita, desde el primer mensaje hasta que el agua vuelve a salir con presión."
        />

        <div className="mx-auto mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-mist-200 bg-mist-50 p-6 transition-colors hover:border-aqua-300">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-aqua-300">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/75">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
