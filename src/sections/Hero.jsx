import { motion } from 'framer-motion'
import { BUSINESS, WA_GENERAL } from '../config'
import { IconWhatsApp, IconArrowRight, IconShield, IconCheck } from '../components/Icons'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pb-12 pt-24 text-white lg:pt-28">
      <div className="absolute inset-0 tech-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-500/40 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Columna texto */}
        <div className="lg:col-span-6">
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full bg-aqua-500/10 px-3.5 py-1.5 text-sm font-semibold text-aqua-200 ring-1 ring-inset ring-aqua-400/25"
          >
            <IconShield className="h-4 w-4" />
            Especialistas en bombas Rowa · {BUSINESS.city}
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-balance font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-[3.4rem] xl:text-6xl"
          >
            Recuperá la <span className="text-aqua-300">presión de agua</span> de tu casa
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-5 max-w-lg text-base leading-relaxed text-mist-100/75 lg:text-lg"
          >
            Instalamos, vendemos y reparamos bombas y presurizadores{' '}
            <span className="font-semibold text-white">Rowa</span>. Vamos a tu casa, te
            asesoramos con honestidad y dejamos todo funcionando.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.28)} className="mt-7 flex flex-col gap-3 sm:flex-row">
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

          {/* Reaseguros */}
          <motion.div
            {...fade(0.34)}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm text-mist-100/70"
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

        {/* Columna foto */}
        <motion.div {...fade(0.2)} className="lg:col-span-6">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-ink-950/70">
              <img
                src="/hero5.jpeg"
                alt="Bomba de agua Rowa instalada con sus cañerías"
                className="max-h-[58vh] w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.style.background =
                    'linear-gradient(135deg,#0f2438,#0e6a90)'
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />
            </div>

            {/* Sello de garantía, cálido y humano */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-mist-200 bg-white px-4 py-3 text-ink-900 shadow-xl sm:left-8">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aqua-50 text-aqua-600">
                <IconShield className="h-6 w-6" />
              </span>
              <div>
                <div className="text-sm font-bold leading-tight">Trabajos garantizados</div>
                <div className="text-xs text-ink-700/70">
                  Repuestos 100% originales Rowa
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
