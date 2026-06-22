import Reveal, { SectionHeading } from '../components/Reveal'
import { IconShield, IconClock, IconBolt, IconCheck } from '../components/Icons'

const REASONS = [
  {
    icon: IconShield,
    title: 'Repuestos 100% originales',
    text: 'Trabajamos con productos y repuestos originales de cada marca. Tu garantía siempre queda en regla.',
  },
  {
    icon: IconClock,
    title: 'Respuesta el mismo día',
    text: 'Sabemos que quedarte sin agua es una urgencia. Coordinamos rápido y cumplimos los horarios.',
  },
  {
    icon: IconBolt,
    title: 'Técnicos matriculados',
    text: 'Instalaciones eléctricas e hidráulicas hechas con seguridad y según norma. Sin improvisar.',
  },
]

export default function WhyUs() {
  return (
    <section className="relative bg-mist-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Imagen + stats */}
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-mist-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?auto=format&fit=crop&w=900&q=80"
                  alt="Técnico trabajando en una instalación de agua"
                  className="h-[26rem] w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.parentElement.style.background =
                      'linear-gradient(135deg,#0f2438,#0e6a90)'
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {/* Tinte para unificar el tono con la paleta del sitio */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink-950/55 via-ink-900/10 to-aqua-500/25 mix-blend-multiply" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>

              {/* tarjeta de garantía flotante */}
              <div className="absolute -bottom-6 left-1/2 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-mist-200 bg-white p-5 shadow-xl">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-aqua-50 text-aqua-600">
                  <IconShield className="h-6 w-6" />
                </span>
                <p className="text-sm text-ink-700/80">
                  <span className="font-bold text-ink-900">Garantía por escrito</span> y factura en
                  cada trabajo. Si algo falla, volvemos.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <div>
            <SectionHeading
              eyebrow="Por qué elegirnos"
              title="La tranquilidad de un trabajo bien hecho"
              description="No vendemos bombas: resolvemos el problema de fondo. Te asesoramos con honestidad y dejamos todo funcionando, con garantía por escrito."
            />

            <div className="mt-8 space-y-4">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-2xl border border-mist-200 bg-white p-5 transition-colors hover:border-aqua-300">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-aqua-50 text-aqua-600">
                      <r.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-ink-900">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-700/75">{r.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Barra de compromisos (todo verdadero, sin métricas inventadas) */}
        <Reveal delay={0.1}>
          <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-mist-200 bg-mist-200 lg:grid-cols-4">
            {[
              'Repuestos 100% originales',
              'Garantía oficial de fábrica',
              'Técnicos matriculados',
              'Presupuesto exacto, sin sorpresas',
            ].map((c) => (
              <div key={c} className="flex items-center gap-3 bg-white px-5 py-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-aqua-50 text-aqua-600">
                  <IconCheck className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold leading-snug text-ink-800">{c}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
