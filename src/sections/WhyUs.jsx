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

const COMMITMENTS = [
  'Repuestos 100% originales',
  'Garantía oficial de fábrica',
  'Técnicos matriculados',
  'Presupuesto exacto, sin sorpresas',
]

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-mist-50 py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Foto real de un trabajo */}
          <Reveal>
            <div className="relative">
              {/* halo aqua detrás */}
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-aqua-400/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-mist-200 shadow-2xl shadow-ink-950/15">
                <img
                  src="/fotos/bomba4.png"
                  alt="Instalación de bomba con conexionado eléctrico hecha por Hidrorescate"
                  className="h-[24rem] w-full object-cover lg:h-[30rem]"
                  onError={(e) => {
                    e.currentTarget.parentElement.style.background =
                      'linear-gradient(135deg,#0f2438,#0e6a90)'
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink-950/5" />

                {/* chip "foto real" */}
                <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
                  Trabajo real, no catálogo
                </span>
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

          {/* Texto + razones */}
          <div className="lg:pl-2">
            <SectionHeading
              eyebrow="Por qué elegirnos"
              title="La tranquilidad de un trabajo bien hecho"
              description="No vendemos bombas: resolvemos el problema de fondo. Te asesoramos con honestidad, instalamos prolijo y dejamos todo funcionando, con garantía por escrito."
            />

            <div className="mt-8 divide-y divide-mist-200 overflow-hidden rounded-2xl border border-mist-200 bg-white shadow-sm">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.08}>
                  <div className="group flex items-start gap-4 p-5 transition-colors hover:bg-aqua-50/40">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-aqua-400 to-aqua-600 text-ink-950 shadow-md shadow-aqua-500/25">
                      <r.icon className="h-6 w-6" strokeWidth={1.9} />
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

        {/* Barra de compromisos */}
        <Reveal delay={0.1}>
          <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-mist-200 bg-mist-200 lg:grid-cols-4">
            {COMMITMENTS.map((c) => (
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
