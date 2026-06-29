import Reveal, { SectionHeading } from '../components/Reveal'
import { IconShield, IconClock, IconBolt } from '../components/Icons'

const REASONS = [
  {
    icon: IconBolt,
    title: 'Técnicos Matriculados',
    text: 'Conexiones eléctricas e hidráulicas seguras según normas IRAM. Sin improvisaciones.',
  },
  {
    icon: IconShield,
    title: 'Repuestos 100% Originales',
    text: 'Utilizamos piezas genuinas de cada fabricante para preservar tu garantía de fábrica.',
  },
  {
    icon: IconClock,
    title: 'Respuesta el Mismo Día',
    text: 'Coordinamos rápido y cumplimos los horarios. Resolvemos tu urgencia hoy.',
  },
]

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-24">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 opacity-[0.02] tech-grid pointer-events-none" />
      <div className="absolute -left-1/4 top-1/4 h-[30rem] w-[30rem] rounded-full bg-aqua-400/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Foto real de un trabajo (Grande y despejada) */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-aqua-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 shadow-xl bg-white">
                <img
                  src="/fotos/bomba4.webp"
                  alt="Instalación de bomba con conexionado eléctrico hecha por Hidrorescate"
                  className="h-[26rem] w-full object-cover lg:h-[32rem]"
                  onError={(e) => {
                    e.currentTarget.parentElement.style.background =
                      'linear-gradient(135deg,#0f2438,#0e6a90)'
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink-950/5" />

                {/* chip "foto real" */}
                <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-ink-950/75 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
                  Trabajo real de Hidrorescate
                </span>
              </div>

              {/* tarjeta de garantía flotante (Glassmorphism simplificado) */}
              <div className="absolute -bottom-6 left-1/2 flex w-[85%] -translate-x-1/2 items-center gap-3.5 rounded-2xl border border-white/40 bg-white/90 p-4.5 shadow-xl backdrop-blur-md">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-aqua-50 text-aqua-600 shadow-sm">
                  <IconShield className="h-5 w-5" />
                </span>
                <p className="text-xs text-ink-700/90 leading-relaxed">
                  <strong className="text-ink-900 font-extrabold">Garantía escrita y factura</strong> en cada trabajo. Si algo falla, volvemos.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Texto + razones limpias (Scannables) */}
          <div className="lg:pl-4">
            <SectionHeading
              eyebrow="Por qué elegirnos"
              title="La tranquilidad de un trabajo bien hecho"
              description="No somos revendedores de catálogo: resolvemos problemas de presión de agua. Te asesoramos con honestidad técnica, realizamos instalaciones seguras y respondemos rápido."
            />

            <div className="mt-10 space-y-8">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aqua-50 text-aqua-600">
                      <r.icon className="h-5.5 w-5.5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-extrabold text-ink-900">
                        {r.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-700/75">
                        {r.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
