import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal, { SectionHeading } from '../components/Reveal'
import { WA_GENERAL } from '../config'
import { IconChevron, IconWhatsApp } from '../components/Icons'

const FAQS = [
  {
    q: '¿Cómo sé qué bomba necesito?',
    a: 'No te preocupes: con que nos cuentes cuántos baños tenés, cuántos pisos y qué problema notás, te recomendamos el equipo justo. Si hace falta, hacemos una visita para medir la presión y el caudal.',
  },
  {
    q: '¿El presupuesto tiene costo?',
    a: 'No. El presupuesto por WhatsApp es totalmente sin cargo y sin compromiso. En caso de necesitar una visita técnica para diagnóstico, te avisamos antes cualquier costo.',
  },
  {
    q: '¿Trabajan con garantía?',
    a: 'Sí. Todos los equipos Rowa que vendemos tienen garantía oficial de fábrica, y además garantizamos nuestro trabajo de instalación. Te entregamos factura.',
  },
  {
    q: '¿En qué zonas trabajan?',
    a: 'Cubrimos Capital Federal y todo el AMBA. Si estás un poco más lejos, escribinos igual y vemos cómo te ayudamos.',
  },
  {
    q: '¿Reparan bombas de otras marcas?',
    a: 'Sí, reparamos bombas y presurizadores de la mayoría de las marcas del mercado. Hacemos el diagnóstico y te decimos si conviene reparar o reemplazar.',
  },
  {
    q: '¿Cuánto tardan en instalar?',
    a: 'Una instalación estándar de presurizadora se resuelve en el mismo día, generalmente en 1 a 2 horas. Coordinamos día y horario que te quede cómodo.',
  },
]

function Item({ faq, open, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-mist-200 bg-white">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-mist-50"
      >
        <span className="font-display text-base font-bold text-ink-900">{faq.q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${
            open ? 'bg-aqua-500 text-ink-950' : 'bg-mist-100 text-ink-700'
          }`}
        >
          <IconChevron className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-700/80">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative bg-mist-50 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Preguntas frecuentes"
          title="Sacate todas las dudas"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <Item faq={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl bg-ink-900 p-6 text-center sm:flex-row sm:text-left">
            <p className="text-base font-semibold text-white">
              ¿Tenés otra pregunta? Escribinos, te respondemos al toque.
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 font-bold text-white transition-transform hover:scale-105"
            >
              <IconWhatsApp className="h-5 w-5" />
              Preguntar
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
