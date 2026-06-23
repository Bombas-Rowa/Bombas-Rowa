import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal, { SectionHeading } from '../components/Reveal'
import { WA_GENERAL } from '../config'
import { IconWhatsApp, IconClose, IconArrowRight } from '../components/Icons'

// Fotos reales de trabajos hechos por el equipo (en /public/fotos).
// Si alguna descripción no es exacta, se edita acá nomás.
const TRABAJOS = [
  { src: '/fotos/bomba1.png', label: 'Grupo presurizador instalado' },
  { src: '/fotos/bomba5.png', label: 'Grupo de presión multietapa' },
  { src: '/fotos/bomba3.png', label: 'Presurizador con control digital' },
  { src: '/fotos/bomba4.png', label: 'Circulador con tablero eléctrico' },
  { src: '/fotos/bomba2.png', label: 'Bomba recirculadora en cobre' },
]

// Galería de TRABAJOS reales sobre fondo navy. Al tocar una foto se abre
// un lightbox para verla en grande (respetando su proporción real).
export default function Gallery() {
  const [zoom, setZoom] = useState(null)

  useEffect(() => {
    if (!zoom) return
    const onKey = (e) => e.key === 'Escape' && setZoom(null)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [zoom])

  return (
    <section id="galeria" className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
      {/* Atmósfera: gradiente navy + grilla + línea aqua */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-950 to-ink-950" />
        <div className="absolute inset-0 tech-grid opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          dark
          center
          eyebrow="Trabajos realizados"
          title="Instalaciones reales, hechas por nosotros"
          description="Presurizadores, recirculadores y grupos de presión de distintas marcas, instalados con plomería prolija y conexionado seguro. Sin fotos de catálogo: esto es trabajo nuestro."
        />

        {/* Grilla de fotos */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {TRABAJOS.map((t, i) => (
            <Reveal key={t.src} delay={(i % 5) * 0.06}>
              <button
                onClick={() => setZoom(t)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-lg shadow-ink-950/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-aqua-500/20 hover:ring-2 hover:ring-aqua-400/60"
                aria-label={`Ver "${t.label}" en grande`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={t.src}
                    alt={t.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* gradiente + caption */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-left text-xs font-semibold leading-snug text-white">
                    {t.label}
                  </span>
                  {/* hover: ampliar */}
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-ink-900 shadow-lg">
                      Ampliar
                    </span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-lg font-semibold text-white">
              ¿Querés un trabajo así de prolijo en tu casa?
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl bg-whatsapp px-7 py-4 font-bold text-white shadow-xl shadow-whatsapp/25 transition-transform hover:scale-105"
            >
              <IconWhatsApp className="h-5 w-5" />
              Coordinar visita técnica
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {createPortal(
        <AnimatePresence>
          {zoom && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setZoom(null)}
            >
              <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-sm" />
              <button
                onClick={() => setZoom(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink-800 shadow-md transition-colors hover:bg-ink-900 hover:text-white"
              >
                <IconClose className="h-5 w-5" />
              </button>
              <motion.div
                className="relative z-10 flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={zoom.src}
                  alt={zoom.label}
                  className="max-h-[76vh] w-full bg-ink-950 object-contain"
                />
                <div className="border-t border-mist-100 px-5 py-4 text-center">
                  <p className="font-display text-base font-bold text-ink-900">{zoom.label}</p>
                  <p className="mt-0.5 text-sm text-ink-700/65">Trabajo realizado por Hidrorescate</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  )
}
