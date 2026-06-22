import { motion } from 'framer-motion'
import { BUSINESS, WA_GENERAL } from '../config'
import { IconWhatsApp, IconArrowRight } from '../components/Icons'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

// Specs reales que anotan la "lámina técnica" del equipo.
const PLATE_SPECS = [
  { k: '01', label: 'Caudal', value: 'hasta 6.000 L/h' },
  { k: '02', label: 'Presión', value: 'hasta 23,5 m.c.a.' },
  { k: '03', label: 'Garantía', value: 'oficial · 2 años' },
]

// Marca de corte de esquina (detalle de lámina técnica).
function CropMark({ className }) {
  return (
    <span className={`pointer-events-none absolute h-4 w-4 border-aqua-400/50 ${className}`} />
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pb-12 pt-24 text-white lg:pt-28">
      {/* Plano de fondo */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-500/40 to-transparent" />

      {/* Marcas de corte del lienzo */}
      <CropMark className="left-6 top-24 border-l border-t lg:left-10 lg:top-28" />
      <CropMark className="right-6 top-24 border-r border-t lg:right-10 lg:top-28" />
      <CropMark className="bottom-8 left-6 border-b border-l lg:left-10" />
      <CropMark className="bottom-8 right-6 border-b border-r lg:right-10" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Columna texto */}
        <div className="lg:col-span-6">
          {/* Kicker tipo ficha técnica */}
          <motion.div
            {...fade(0)}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-aqua-300"
          >
            <span className="rounded border border-aqua-400/30 px-1.5 py-0.5">FIG. 01</span>
            <span className="h-px w-6 bg-white/25" />
            <span className="text-mist-100/60">Servicio oficial Rowa · {BUSINESS.city}</span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-balance font-display text-[2.5rem] font-extrabold leading-[1.0] tracking-[-0.02em] sm:text-5xl lg:text-6xl"
          >
            La presión de agua de tu casa,{' '}
            <span className="text-aqua-300">resuelta</span>.
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-md text-base leading-relaxed text-mist-100/70 lg:text-lg"
          >
            Instalación, venta y reparación de bombas y presurizadores{' '}
            <span className="font-semibold text-white">Rowa</span>. Vamos a tu casa, diagnóstico
            profesional y presupuesto exacto.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-whatsapp/25 transition-transform hover:scale-[1.02]"
            >
              <IconWhatsApp className="h-5 w-5" />
              Coordinar visita técnica
            </a>
            <a
              href="#galeria"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-base font-bold text-white transition-colors hover:border-aqua-400/60 hover:bg-white/5"
            >
              Ver equipos
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Línea técnica de reaseguros */}
          <motion.div
            {...fade(0.32)}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-white/10 pt-5 font-mono text-[11px] uppercase tracking-wider text-mist-100/55"
          >
            <span>
              Visita <span className="text-aqua-300">{BUSINESS.visitCost}</span> — se descuenta
            </span>
            <span className="hidden text-white/20 sm:inline">/</span>
            <span>Técnicos matriculados</span>
            <span className="hidden text-white/20 sm:inline">/</span>
            <span>Repuestos originales</span>
          </motion.div>
        </div>

        {/* Columna lámina técnica */}
        <motion.div {...fade(0.2)} className="lg:col-span-6">
          <figure className="relative">
            {/* Encabezado de lámina */}
            <figcaption className="flex items-center justify-between border-x border-t border-white/15 bg-white/[0.03] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-mist-100/60">
              <span>Rowa · Electrobomba / Presurizador</span>
              <span className="text-aqua-300">REF · {BUSINESS.installations}+</span>
            </figcaption>

            <div className="relative overflow-hidden border border-white/15">
              <img
                src="/hero5.jpeg"
                alt="Bomba de agua Rowa instalada con sus cañerías"
                className="max-h-[52vh] w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.style.background =
                    'linear-gradient(135deg,#0f2438,#0e6a90)'
                }}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            {/* Tira de specs anotadas */}
            <div className="grid grid-cols-3 divide-x divide-white/12 border-x border-b border-white/15 bg-white/[0.03]">
              {PLATE_SPECS.map((s) => (
                <div key={s.k} className="px-3 py-3">
                  <div className="font-mono text-[10px] text-aqua-400/80">{s.k}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-mist-100/50">
                    {s.label}
                  </div>
                  <div className="mt-0.5 font-display text-sm font-bold text-white">{s.value}</div>
                </div>
              ))}
            </div>
          </figure>
        </motion.div>
      </div>
    </section>
  )
}
