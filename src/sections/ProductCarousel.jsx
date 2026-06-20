import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal, { SectionHeading } from '../components/Reveal'
import ProductThumb from '../components/ProductThumb'
import ProductModal from '../components/ProductModal'
import { PRODUCTS } from '../data/products'
import { waProduct } from '../config'
import {
  IconArrowRight,
  IconWhatsApp,
  IconChevron,
} from '../components/Icons'

export default function ProductCarousel() {
  const trackRef = useRef(null)
  const [selected, setSelected] = useState(null)

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 tech-grid-dark opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Catálogo"
            title="Bombas y presurizadores para cada necesidad"
            description="Una selección de los equipos Rowa más elegidos. Mirá el catálogo completo para ver todas las opciones y especificaciones."
          />
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="grid h-11 w-11 place-items-center rounded-full border border-mist-200 text-ink-800 transition-colors hover:border-aqua-400 hover:bg-aqua-50"
            >
              <IconChevron className="h-5 w-5 rotate-90" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              className="grid h-11 w-11 place-items-center rounded-full border border-mist-200 text-ink-800 transition-colors hover:border-aqua-400 hover:bg-aqua-50"
            >
              <IconChevron className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="group w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-mist-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-aqua-300 hover:shadow-xl hover:shadow-aqua-500/10">
                <button
                  onClick={() => setSelected(p)}
                  className="relative aspect-[16/10] overflow-hidden text-left"
                  aria-label={`Ver detalles de ${p.name}`}
                >
                  <ProductThumb
                    product={p}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {p.badge && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-ink-900/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
                      {p.badge}
                    </span>
                  )}
                </button>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-aqua-600">
                    {p.tagline}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-ink-900">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700/75">
                    {p.short}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={waProduct(p)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                    >
                      <IconWhatsApp className="h-4 w-4" />
                      Consultar
                    </a>
                    <button
                      onClick={() => setSelected(p)}
                      className="rounded-xl border border-mist-200 px-4 py-2.5 text-sm font-bold text-ink-800 transition-colors hover:border-aqua-300 hover:bg-aqua-50"
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <Link
              to="/productos"
              className="group flex items-center gap-2 rounded-xl bg-ink-900 px-7 py-4 font-bold text-white transition-transform hover:scale-105"
            >
              Ver catálogo completo
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Popup de detalle de producto */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
