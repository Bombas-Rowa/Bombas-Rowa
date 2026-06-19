import Reveal, { SectionHeading } from '../components/Reveal'
import { WA_GENERAL } from '../config'
import { IconChat, IconGauge, IconTools, IconShield, IconWhatsApp } from '../components/Icons'

const STEPS = [
  {
    icon: IconChat,
    title: 'Nos contás tu problema',
    text: 'Escribinos por WhatsApp contándonos qué pasa con el agua. Te respondemos en minutos.',
  },
  {
    icon: IconGauge,
    title: 'Diagnóstico y presupuesto',
    text: 'Evaluamos tu instalación —online o en una visita— y te pasamos un presupuesto claro y sin sorpresas.',
  },
  {
    icon: IconTools,
    title: 'Instalamos tu equipo',
    text: 'Coordinamos día y horario. Instalamos con repuestos originales y dejamos todo probado y funcionando.',
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
      <div className="absolute inset-0 tech-grid" />
      <div className="absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-aqua-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          dark
          center
          eyebrow="Cómo trabajamos"
          title="Simple, transparente y sin vueltas"
          description="Cuatro pasos para volver a tener la presión de agua que tu casa merece."
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

        <Reveal delay={0.15}>
          <div className="mt-14 flex justify-center">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl bg-whatsapp px-7 py-4 font-bold text-white shadow-xl shadow-whatsapp/25 transition-transform hover:scale-105"
            >
              <IconWhatsApp className="h-5 w-5" />
              Empezar ahora por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
