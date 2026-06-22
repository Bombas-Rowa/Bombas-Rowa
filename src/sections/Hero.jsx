import { motion } from 'framer-motion'
import { BUSINESS, WA_GENERAL } from '../config'
import {
  IconWhatsApp,
  IconArrowRight,
  IconShield,
  IconCheck,
  IconStar,
} from '../components/Icons'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* Fondo: imagen + gradientes + grilla técnica */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1920&q=80"
          alt=""
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/90 to-ink-900/75" />
        <div className="absolute inset-0 tech-grid" />
        {/* halos aqua */}
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-aqua-500/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-aqua-700/25 blur-[140px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-40">
        {/* Columna texto */}
        <div className="lg:col-span-7">
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-aqua-200"
          >
            <span className="flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-aqua-400/70" />
              <span className="h-2 w-2 rounded-full bg-aqua-400" />
            </span>
            Servicio Oficial · Garantía Rowa
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Recuperá la{' '}
            <span className="relative whitespace-nowrap text-aqua-300">
              presión de agua
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C70 3 140 3 298 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-aqua-500/60"
                />
              </svg>
            </span>{' '}
            de tu casa
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist-100/75"
          >
            Instalamos, vendemos y reparamos bombas y presurizadores{' '}
            <span className="font-semibold text-white">Rowa</span>. Vamos a tu
            casa, hacemos un diagnóstico profesional y te damos un presupuesto
            exacto, sin sorpresas.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fade(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-6 py-4 text-base font-bold text-white shadow-xl shadow-whatsapp/30 transition-transform hover:scale-[1.03]"
            >
              <IconWhatsApp className="h-5 w-5" />
              Coordinar visita técnica
            </a>
            <a
              href="#galeria"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-base font-bold text-white backdrop-blur transition-colors hover:border-aqua-400/50 hover:bg-white/10"
            >
              Ver equipos
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Nota de transparencia sobre la visita */}
          <motion.p
            {...fade(0.28)}
            className="mt-4 flex items-start gap-2 text-sm text-mist-100/65"
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
            {...fade(0.32)}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist-100/70"
          >
            {[
              'Presupuesto exacto en tu casa',
              'Técnicos matriculados',
              'Garantía oficial',
            ].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <IconCheck className="h-4 w-4 text-aqua-300" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Columna tarjeta de confianza */}
        <motion.div
          {...fade(0.3)}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="animate-float-slow overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl aqua-glow">
              {/* Showcase: foto real del presurizador Rowa sobre panel claro */}
              <div className="relative h-56 w-full overflow-hidden rounded-[1.3rem] bg-gradient-to-br from-white via-mist-50 to-mist-100 sm:h-64">
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-aqua-200/50 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-8 -left-6 h-28 w-28 rounded-full bg-aqua-300/30 blur-2xl" />
                <img
                  src="/hero5.jpeg"
                  alt="Presurizadora Rowa Tango Press"
                  className="relative z-10 h-full w-full object-cover "
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.style.background =
                      'linear-gradient(135deg,#0f2438,#0e6a90)'
                  }}
                />
                <span className="absolute bottom-2.5 left-3 z-20 rounded-full bg-ink-900/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-aqua-200 backdrop-blur">
                  Línea Press · Rowa
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-1.5">
                {[
                  { n: `+${BUSINESS.installations.toLocaleString('es-AR')}`, l: 'Instalaciones' },
                  { n: `${BUSINESS.yearsExperience} años`, l: 'De experiencia' },
                  { n: '4.9★', l: 'En reseñas' },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl bg-ink-900/60 p-3 text-center"
                  >
                    <div className="font-display text-lg font-extrabold text-aqua-300">
                      {s.n}
                    </div>
                    <div className="mt-0.5 text-[11px] font-medium text-mist-100/60">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge garantía flotante */}
            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-aqua-500/15 text-aqua-300">
                <IconShield className="h-6 w-6" />
              </span>
              <div>
                <div className="text-sm font-bold text-white">Trabajos garantizados</div>
                <div className="text-xs text-mist-100/60">Repuestos originales Rowa</div>
              </div>
            </div>

            <div className="absolute -right-3 -top-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/90 px-3 py-2 shadow-lg backdrop-blur-xl">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} className="h-3.5 w-3.5 text-signal-500" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Onda inferior hacia la sección siguiente */}
      <div className="relative -mb-px">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="block w-full">
          <path
            d="M0 60C240 110 480 110 720 80C960 50 1200 0 1440 30V120H0V60Z"
            className="fill-mist-50"
          />
        </svg>
      </div>
    </section>
  )
}
