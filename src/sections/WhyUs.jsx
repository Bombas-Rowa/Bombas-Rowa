import Reveal, { SectionHeading } from '../components/Reveal'
import { BUSINESS } from '../config'
import {
  IconShield,
  IconClock,
  IconBolt,
  IconCheck,
  IconStar,
} from '../components/Icons'

const REASONS = [
  {
    icon: IconShield,
    title: 'Servicio oficial Rowa',
    text: 'Trabajamos con productos y repuestos 100% originales. Tu garantía siempre queda en regla.',
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

              {/* tarjeta reseñas flotante */}
              <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-mist-200 bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <IconStar key={i} className="h-5 w-5 text-signal-500" />
                    ))}
                  </div>
                  <span className="font-display text-2xl font-extrabold text-ink-900">4.9</span>
                </div>
                <p className="mt-1.5 text-sm text-ink-700/75">
                  Más de <span className="font-bold text-ink-900">300 reseñas</span> de clientes
                  que recuperaron la presión de su casa.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <div>
            <SectionHeading
              eyebrow="Por qué elegirnos"
              title="La tranquilidad de un trabajo bien hecho"
              description="No vendemos bombas: resolvemos el problema de fondo. Por eso miles de familias y comercios ya confían en nosotros."
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

        {/* Barra de stats */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-mist-200 bg-mist-200 lg:grid-cols-4">
            {[
              { n: `+${BUSINESS.installations.toLocaleString('es-AR')}`, l: 'Equipos instalados' },
              { n: `${BUSINESS.yearsExperience} años`, l: 'En el rubro' },
              { n: '24 hs', l: 'Tiempo de respuesta' },
              { n: '100%', l: 'Repuestos originales' },
            ].map((s) => (
              <div key={s.l} className="bg-white px-6 py-8 text-center">
                <div className="font-display text-3xl font-extrabold text-ink-900 lg:text-4xl">
                  {s.n}
                </div>
                <div className="mt-1 text-sm font-medium text-ink-700/65">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
