import Reveal from '../components/Reveal'
import { BUSINESS, WA_GENERAL } from '../config'
import {
  IconWhatsApp,
  IconPhone,
  IconMail,
  IconPin,
  IconClock,
  IconCheck,
} from '../components/Icons'

const CONTACTS = [
  { icon: IconPhone, label: 'Teléfono', value: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.phoneDisplay.replace(/\s/g, '')}` },
  { icon: IconMail, label: 'Email', value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: IconPin, label: 'Zona', value: BUSINESS.city },
  { icon: IconClock, label: 'Horarios', value: BUSINESS.hours },
]

export default function ContactCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 tech-grid" />
      <div className="absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-aqua-600/20 blur-[140px]" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-aqua-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto + CTA */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-aqua-200">
                <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
                Hablemos
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                Coordiná tu visita a{' '}
                <span className="text-aqua-300">un mensaje</span> de distancia
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-mist-100/75">
                Contanos qué necesitás y agendamos una visita técnica para darte un
                presupuesto exacto. La visita cuesta {BUSINESS.visitCost} y{' '}
                <span className="font-semibold text-aqua-200">
                  se descuenta si avanzás con la instalación.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-7 py-4 text-base font-bold text-white shadow-xl shadow-whatsapp/30 transition-transform hover:scale-[1.03]"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Escribir por WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS.phoneDisplay.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition-colors hover:border-aqua-400/50 hover:bg-white/10"
                >
                  <IconPhone className="h-5 w-5 text-aqua-300" />
                  Llamar
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist-100/65">
                {['Respuesta el mismo día', 'Técnicos matriculados', 'Precio justo, sin sorpresas'].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <IconCheck className="h-4 w-4 text-aqua-300" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Tarjeta de datos */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8 aqua-glow">
              <h3 className="font-display text-xl font-bold text-white">Datos de contacto</h3>
              <p className="mt-1 text-sm text-mist-100/60">
                Elegí el canal que más te convenga.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {CONTACTS.map((c) => {
                  const Inner = (
                    <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-ink-900/50 p-4 transition-colors hover:border-aqua-400/40">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-aqua-500/15 text-aqua-300">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold uppercase tracking-wide text-mist-100/50">
                          {c.label}
                        </div>
                        <div className="mt-0.5 truncate font-semibold text-white">{c.value}</div>
                      </div>
                    </div>
                  )
                  return c.href ? (
                    <a key={c.label} href={c.href} className="block">
                      {Inner}
                    </a>
                  ) : (
                    <div key={c.label}>{Inner}</div>
                  )
                })}
              </div>

              <div className="mt-5 rounded-2xl bg-aqua-500/10 p-4 text-center text-sm text-aqua-100">
                ⚡ Urgencias por bomba quemada o sin agua: escribinos y priorizamos tu caso.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
