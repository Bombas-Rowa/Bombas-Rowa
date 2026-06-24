import Reveal, { SectionHeading } from '../components/Reveal'
import { WA_GENERAL } from '../config'
import {
  IconTools,
  IconTruck,
  IconWrench,
  IconGauge,
  IconArrowRight,
} from '../components/Icons'

const SERVICES = [
  {
    icon: IconTools,
    title: 'Instalación profesional',
    text: 'Montamos tu bomba o presurizador siguiendo las especificaciones de fábrica, con conexiones nuevas y puesta en marcha verificada.',
    points: ['Cálculo de caudal y presión', 'Conexionado eléctrico seguro', 'Prueba de funcionamiento'],
  },
  {
    icon: IconTruck,
    title: 'Venta de equipos',
    text: 'Asesoramiento honesto para que compres exactamente la bomba que tu casa necesita, entre varias marcas y presupuestos.',
    points: ['Varias marcas y precios', 'Productos originales', 'Factura y garantía'],
  },
  {
    icon: IconWrench,
    title: 'Reparación y service',
    text: 'Diagnóstico claro y reparación de bombas de cualquier marca. Cambio de presostatos, capacitores, sellos y rodetes.',
    points: ['Diagnóstico sin compromiso', 'Repuestos en el día', 'Garantía sobre la reparación'],
  },
  {
    icon: IconGauge,
    title: 'Asesoramiento técnico',
    text: '¿No sabés qué bomba necesitás? Analizamos tu instalación y te recomendamos la solución justa, sin venderte de más.',
    points: ['Visita y medición', 'Presupuesto detallado', 'Recomendación a tu medida'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="relative bg-mist-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Una solución completa para el agua de tu hogar"
          description="Nos ocupamos de todo: desde elegir el equipo correcto hasta dejarlo funcionando. Un solo contacto para resolver tu problema de presión."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200/90 bg-gradient-to-b from-white to-mist-50/30 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-aqua-300 hover:shadow-xl hover:shadow-aqua-500/10">
                {/* Destello radial sutil en hover */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,166,212,0.04)_0%,transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* número fantasma */}
                <span className="pointer-events-none absolute -right-2 -top-5 font-display text-7xl font-extrabold text-mist-100/50 transition-colors group-hover:text-aqua-50/70 z-0">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-aqua-300 transition-all duration-300 group-hover:bg-aqua-500 group-hover:text-ink-950 group-hover:scale-105 shadow-md shadow-ink-950/20">
                    <s.icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-5 font-display text-xl font-bold text-ink-900 transition-colors group-hover:text-aqua-600">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/75 flex-1">
                    {s.text}
                  </p>

                  <ul className="mt-5 space-y-1.5 border-t border-mist-100 pt-4">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs font-semibold text-ink-700/70">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-aqua-400 group-hover:scale-110 transition-transform" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Banda CTA */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-ink-800 bg-ink-900 p-6 text-center sm:flex-row sm:text-left lg:px-8">
            <p className="text-lg font-semibold text-white">
              ¿Tenés poca presión o tu bomba dejó de andar?{' '}
              <span className="text-aqua-300">Te respondemos hoy mismo.</span>
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex shrink-0 items-center gap-2 rounded-xl bg-aqua-500 px-6 py-3.5 font-bold text-ink-950 transition-transform hover:scale-105"
            >
              Consultar ahora
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
