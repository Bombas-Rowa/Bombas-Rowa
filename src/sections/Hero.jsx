import { motion } from 'framer-motion'
import { BUSINESS, WA_GENERAL } from '../config'
import { IconWhatsApp, IconArrowRight, IconShield, IconCheck } from '../components/Icons'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

const STATS = [
  { n: `+${BUSINESS.installations.toLocaleString('es-AR')}`, l: 'Instalaciones' },
  { n: `${BUSINESS.yearsExperience} años`, l: 'De experiencia' },
  { n: '4,9 ★', l: 'En reseñas' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* Fondo sobrio: grilla técnica fina + leve degradé vertical (sin glows neón) */}
      <div className="absolute inset-0 tech-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/0 to-ink-950" />
      {/* línea de acento superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-500/40 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-40">
        {/* Columna texto */}
        <div>
          <motion.div {...fade(0)} className="flex items-center gap-3">
            <span className="h-px w-9 bg-aqua-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-aqua-300">
              Servicio oficial Rowa · {BUSINESS.city}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl xl:text-6xl"
          >
            Recuperá la <span className="text-aqua-300">presión de agua</span> de tu casa
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist-100/75"
          >
            Instalamos, vendemos y reparamos bombas y presurizadores{' '}
            <span className="font-semibold text-white">Rowa</span>. Vamos a tu casa, hacemos un
            diagnóstico profesional y te damos un presupuesto exacto, sin sorpresas.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-6 py-4 text-base font-bold text-white shadow-lg shadow-whatsapp/25 transition-transform hover:scale-[1.02]"
            >
              <IconWhatsApp className="h-5 w-5" />
              Coordinar visita técnica
            </a>
            <a
              href="#galeria"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-base font-bold text-white transition-colors hover:border-aqua-400/60 hover:bg-white/5"
            >
              Ver equipos
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Nota de transparencia sobre la visita */}
          <motion.p
            {...fade(0.3)}
            className="mt-5 flex items-start gap-2 text-sm text-mist-100/65"
          >
            <IconShield className="mt-0.5 h-4 w-4 shrink-0 text-aqua-300" />
            <span>
              Visita técnica a domicilio: {BUSINESS.visitCost}.{' '}
              <span className="font-semibold text-aqua-200">
                Se descuenta del total si avanzás con la instalación.
              </span>
            </span>
          </motion.p>

          {/* Reaseguros */}
          <motion.div
            {...fade(0.36)}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-mist-100/70"
          >
            {['Presupuesto exacto en tu casa', 'Técnicos matriculados', 'Garantía oficial'].map(
              (t) => (
                <span key={t} className="flex items-center gap-2">
                  <IconCheck className="h-4 w-4 text-aqua-400" />
                  {t}
                </span>
              ),
            )}
          </motion.div>
        </div>

        {/* Columna foto real */}
        <motion.div {...fade(0.2)} className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-ink-950/70">
            <img
              src="/hero4.jpeg"
              alt="Técnico instalando una bomba de agua Rowa"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement.style.background =
                  'linear-gradient(135deg,#0f2438,#0e6a90)'
              }}
            />
            {/* degradé inferior para legibilidad de la barra */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-ink-950/10" />

            {/* Sello sólido arriba */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-ink-950/75 px-3 py-2 text-sm font-semibold backdrop-blur-sm">
              <IconShield className="h-4 w-4 text-aqua-300" />
              Servicio oficial Rowa
            </div>

            {/* Barra de stats sólida sobre la foto */}
            <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-xl border border-white/10 bg-ink-950/70 backdrop-blur-sm">
              {STATS.map((s) => (
                <div key={s.l} className="px-3 py-3 text-center">
                  <div className="font-display text-xl font-extrabold text-white">{s.n}</div>
                  <div className="mt-0.5 text-[11px] font-medium text-mist-100/65">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
