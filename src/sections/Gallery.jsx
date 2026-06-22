import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal, { SectionHeading } from '../components/Reveal'
import ProductThumb from '../components/ProductThumb'
import { PRODUCTS } from '../data/products'
import { WA_GENERAL } from '../config'
import { IconWhatsApp, IconClose } from '../components/Icons'

// Equipos que se muestran en la galería (8 imágenes).
// Para mostrar otro equipo, cambiá el id excluido o agregá/quitá del filtro.
const GALLERY_PRODUCTS = PRODUCTS.filter((p) => p.id !== 'tango-sfl-20')

// Galería de imágenes de equipos Rowa sobre un fondo de agua (atmósfera
// cohesiva con la paleta). Tarjetas blancas que resaltan sobre el navy.
// Al tocar una imagen se abre un lightbox para verla en grande.
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
      {/* Atmósfera: agua azul + gradiente navy + grilla + halos */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1920&q=80"
          alt=""
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/92 to-ink-950" />
        <div className="absolute inset-0 tech-grid opacity-50" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-500/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          dark
          center
          eyebrow="Nuestros equipos"
          title="Algunas de las bombas y presurizadores Rowa que instalamos"
          description="Trabajamos con toda la línea Rowa. Estos son algunos de los equipos más elegidos para mejorar la presión de agua de tu casa."
        />

        {/* Grilla de imágenes */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {GALLERY_PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.06}>
              <button
                onClick={() => setZoom(p)}
                className="group block w-full overflow-hidden rounded-2xl border border-white/10 bg-white text-left shadow-lg shadow-ink-950/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-aqua-500/20 hover:ring-2 hover:ring-aqua-400/60"
                aria-label={`Ver ${p.name} en grande`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <ProductThumb
                    product={p}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.badge && (
                    <span
                      className={`absolute left-2.5 top-2.5 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                        p.highlight ? 'bg-aqua-500 text-ink-950' : 'bg-ink-900/90 text-white'
                      }`}
                    >
                      {p.badge}
                    </span>
                  )}
                  {/* overlay "ver" al hover */}
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink-950/0 opacity-0 transition-all duration-300 group-hover:bg-ink-950/20 group-hover:opacity-100">
                    <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-ink-900 shadow-lg">
                      Ver imagen
                    </span>
                  </span>
                </div>
                <div className="border-t border-mist-100 px-3 py-2.5">
                  <p className="line-clamp-2 text-center text-sm font-semibold text-ink-800">
                    {p.name}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* CTA general */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-lg font-semibold text-white">
              ¿Querés saber cuál es el ideal para tu casa?
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-xl bg-whatsapp px-7 py-4 font-bold text-white shadow-xl shadow-whatsapp/25 transition-transform hover:scale-105"
            >
              <IconWhatsApp className="h-5 w-5" />
              Consultar por WhatsApp
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
              <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" />
              <button
                onClick={() => setZoom(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink-800 shadow-md transition-colors hover:bg-ink-900 hover:text-white"
              >
                <IconClose className="h-5 w-5" />
              </button>
              <motion.div
                className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <ProductThumb product={zoom} className="aspect-square w-full" />
                <div className="border-t border-mist-100 px-5 py-4 text-center">
                  <p className="font-display text-lg font-bold text-ink-900">{zoom.name}</p>
                  <p className="mt-0.5 text-sm text-ink-700/65">{zoom.tagline}</p>
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
