import Reveal, { SectionHeading } from '../components/Reveal'
import { BUSINESS, WA_GENERAL } from '../config'
import { IconChat, IconGauge, IconTools, IconShield, IconWhatsApp } from '../components/Icons'

const STEPS = [
  {
    icon: IconChat,
    title: 'Nos escribís y coordinamos',
    text: 'Contanos qué pasa con el agua por WhatsApp y agendamos la visita el día y horario que te quede cómodo.',
  },
  {
    icon: IconGauge,
    title: 'Visita técnica y presupuesto exacto',
    text: `Un técnico matriculado va a tu casa, mide presión y caudal y te entrega un presupuesto exacto, sin sorpresas. La visita tiene un costo de ${BUSINESS.visitCost}.`,
  },
  {
    icon: IconTools,
    title: 'Instalamos tu equipo',
    text: `Si avanzás, instalamos con repuestos originales y dejamos todo probado. Te descontamos los ${BUSINESS.visitCost} de la visita del total.`,
  },
  {
    icon: IconShield,
    title: 'Garantía y respaldo',
    text: 'Te entregamos factura y garantía. Quedamos disponibles ante cualquier consulta posterior.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 tech-grid opacity-60" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-500/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          dark
          center
          eyebrow="Cómo trabajamos"
          title="Simple, transparente y sin vueltas"
          description="No improvisamos por teléfono: vamos a tu casa, vemos la situación real y te damos un presupuesto exacto."
        />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* línea conectora */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-aqua-500/30 to-transparent lg:block" />

          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-aqua-400/30 bg-ink-900 text-aqua-300 lg:mx-0">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-aqua-500 font-display text-xs font-extrabold text-ink-950">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-100/65">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Callout de confianza: el costo de la visita se descuenta */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-aqua-400/25 bg-aqua-500/10 p-6 text-center sm:flex-row sm:text-left">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-aqua-500/20 text-aqua-300">
              <IconShield className="h-7 w-7" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Si nos elegís, el diagnóstico te sale gratis
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-mist-100/75">
                La visita técnica cuesta {BUSINESS.visitCost} y se descuenta del total
                cuando avanzás con la compra e instalación. Así pagás el precio justo, sin
                presupuestos &ldquo;por las dudas&rdquo; ni sorpresas.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl bg-whatsapp px-7 py-4 font-bold text-white shadow-xl shadow-whatsapp/25 transition-transform hover:scale-105"
            >
              <IconWhatsApp className="h-5 w-5" />
              Coordinar mi visita por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
