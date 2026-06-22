import { motion } from 'framer-motion'
import { BUSINESS, WA_GENERAL } from '../config'
import { IconWhatsApp, IconArrowRight, IconShield, IconCheck } from '../components/Icons'
import BrandsMarquee from '../components/BrandsMarquee'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink-950 pt-24 text-white lg:pt-28">
      <div className="absolute inset-0 tech-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-500/40 to-transparent" />

      {/* ===== HERO DESKTOP ===== */}
      <div className="relative hidden w-full flex-1 items-center pb-10 lg:flex">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Foto a la derecha */}
        <motion.div {...fade(0.1)} className="order-2 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-ink-950/70">
            <div className="aspect-[16/9] lg:aspect-auto">
              <img
                src="/hero5.jpeg"
                alt="Bomba de agua Rowa instalada con sus cañerías"
                className="h-full w-full object-cover lg:h-auto lg:max-h-[58vh]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.style.background =
                    'linear-gradient(135deg,#0f2438,#0e6a90)'
                }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/65 via-transparent to-transparent" />

            {/* Sello de garantía dentro de la foto */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2.5 rounded-xl border border-mist-200/60 bg-white/95 px-3 py-2 text-ink-900 shadow-lg">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-aqua-50 text-aqua-600">
                <IconShield className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-xs font-bold">Trabajos garantizados</div>
                <div className="text-[11px] text-ink-700/70">Repuestos 100% originales</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <div className="order-1 lg:order-1">
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full bg-aqua-500/10 px-3 py-1.5 text-xs font-semibold text-aqua-200 ring-1 ring-inset ring-aqua-400/25 sm:text-sm"
          >
            <IconShield className="h-4 w-4 shrink-0" />
            Servicio técnico multimarca · {BUSINESS.city}
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-5 text-balance font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-[3.4rem] lg:leading-[1.02] xl:text-6xl"
          >
            Recuperá la <span className="text-aqua-300">presión de agua</span> de tu casa
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-4 hidden max-w-lg text-base leading-relaxed text-mist-100/75 sm:block lg:text-lg"
          >
            Instalamos, vendemos y reparamos bombas y presurizadores de{' '}
            <span className="font-semibold text-white">las mejores marcas</span>. Vamos a tu
            casa, te asesoramos sin vueltas y elegís la opción justa para tu presupuesto.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.24)} className="mt-6 flex flex-col gap-3 sm:flex-row">
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
            {...fade(0.3)}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-sm text-mist-100/70"
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
      </div>
      </div>

      {/* ===== HERO MOBILE (rediseño dedicado) ===== */}
      <div className="relative flex flex-col px-6 pb-10 pt-6 lg:hidden">
        {/* glow suave para dar profundidad */}
        <div className="pointer-events-none absolute left-1/2 top-[38%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua-500/15 blur-[90px]" />

        <motion.div
          {...fade(0)}
          className="relative inline-flex w-fit items-center gap-2 rounded-full bg-aqua-500/10 px-3 py-1.5 text-xs font-semibold text-aqua-200 ring-1 ring-inset ring-aqua-400/25"
        >
          <IconShield className="h-4 w-4 shrink-0" />
          Servicio técnico multimarca · {BUSINESS.city}
        </motion.div>

        <motion.h1
          {...fade(0.08)}
          className="relative mt-6 text-balance font-display text-[2.15rem] font-extrabold leading-[1.1] tracking-[-0.02em]"
        >
          Recuperá la <span className="text-aqua-300">presión de agua</span> de tu casa
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="relative mt-4 max-w-md text-[15px] leading-relaxed text-mist-100/75"
        >
          Bombas y presurizadores de varias marcas. Vamos a tu casa, te asesoramos sin vueltas
          y elegís según tu presupuesto.
        </motion.p>

        <motion.div {...fade(0.24)} className="relative mt-8">
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-whatsapp px-6 py-4 text-base font-bold text-white shadow-lg shadow-whatsapp/30"
          >
            <IconWhatsApp className="h-5 w-5" />
            Coordinar visita técnica
          </a>
          <a
            href="#galeria"
            className="mt-4 flex w-full items-center justify-center gap-1.5 text-sm font-semibold text-mist-100/65"
          >
            Ver equipos
            <IconArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.ul
          {...fade(0.3)}
          className="relative mt-8 space-y-2.5 border-t border-white/10 pt-5"
        >
          {['Presupuesto exacto en tu casa', 'Técnicos matriculados', 'Garantía oficial de fábrica'].map(
            (t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-mist-100/80">
                <IconCheck className="h-4 w-4 shrink-0 text-aqua-400" />
                {t}
              </li>
            ),
          )}
        </motion.ul>
      </div>

      <BrandsMarquee />
    </section>
  )
}
