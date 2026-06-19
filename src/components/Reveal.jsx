import { motion } from 'framer-motion'

// Wrapper de aparición al hacer scroll. Reutilizable.
export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Encabezado de sección estandarizado.
export function SectionHeading({ eyebrow, title, description, dark = false, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] ${
              dark
                ? 'border-aqua-400/30 bg-aqua-500/10 text-aqua-200'
                : 'border-aqua-500/25 bg-aqua-50 text-aqua-700'
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.7rem] ${
            dark ? 'text-white' : 'text-ink-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              dark ? 'text-mist-100/70' : 'text-ink-700/80'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
