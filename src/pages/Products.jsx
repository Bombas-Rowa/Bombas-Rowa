import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import Reveal from '../components/Reveal'
import { PRODUCTS, CATEGORIES } from '../data/products'
import { BUSINESS, WA_GENERAL } from '../config'
import { IconWhatsApp, IconShield, IconTruck, IconTools } from '../components/Icons'

export default function Products() {
  const [cat, setCat] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (cat === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat)),
    [cat],
  )

  return (
    <>
      {/* Encabezado del catálogo */}
      <section className="relative overflow-hidden bg-ink-950 pb-16 pt-32 text-white lg:pt-40">
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-aqua-600/20 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-aqua-400/30 bg-aqua-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-aqua-200">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua-400" />
              Catálogo completo
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              Bombas y presurizadores Rowa para cada hogar
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mist-100/75">
              Explorá toda la línea. Tocá{' '}
              <span className="font-semibold text-aqua-300">“Ver más”</span> en cualquier producto
              para conocer todas sus especificaciones, y{' '}
              <span className="font-semibold text-white">“Consultar”</span> para escribirnos por
              WhatsApp. El precio exacto te lo damos en la visita técnica.
            </p>
          </Reveal>

          {/* mini-beneficios */}
          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap gap-4 text-sm text-mist-100/70">
              {[
                { icon: IconShield, t: 'Garantía oficial' },
                { icon: IconTruck, t: 'Productos originales' },
                { icon: IconTools, t: 'Instalación opcional' },
              ].map((b) => (
                <span key={b.t} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <b.icon className="h-4.5 w-4.5 text-aqua-300" />
                  {b.t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filtros + grilla */}
      <section className="relative bg-mist-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Filtros */}
          <div className="sticky top-[68px] z-30 -mx-5 mb-10 bg-mist-50/90 px-5 py-3 backdrop-blur lg:-mx-8 lg:px-8">
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
              {CATEGORIES.map((c) => {
                const active = cat === c.id
                const count =
                  c.id === 'all'
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.category === c.id).length
                return (
                  <button
                    key={c.id}
                    onClick={() => setCat(c.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                      active
                        ? 'border-ink-900 bg-ink-900 text-white'
                        : 'border-mist-200 bg-white text-ink-700 hover:border-aqua-300 hover:text-ink-900'
                    }`}
                  >
                    {c.label}
                    <span
                      className={`rounded-full px-1.5 text-xs ${
                        active ? 'bg-aqua-500 text-ink-950' : 'bg-mist-100 text-ink-700/70'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Grilla */}
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onExpand={setSelected} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-ink-700/60">
              No hay productos en esta categoría por ahora.
            </p>
          )}

          {/* Banda de ayuda */}
          <div className="mt-14 overflow-hidden rounded-3xl border border-ink-800 bg-ink-900 p-8 text-center text-white lg:p-12">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              ¿No sabés cuál elegir?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-mist-100/75">
              Contanos cuántos baños tenés y qué problema notás con el agua. Coordinamos una visita,
              vemos tu instalación y te recomendamos el equipo justo, sin venderte de más.
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-whatsapp px-7 py-4 font-bold text-white shadow-xl shadow-whatsapp/25 transition-transform hover:scale-105"
            >
              <IconWhatsApp className="h-5 w-5" />
              Coordinar una visita
            </a>
            <p className="mt-4 text-xs text-mist-100/50">
              {BUSINESS.hours} · {BUSINESS.city}
            </p>
          </div>
        </div>
      </section>

      {/* Popup de detalle de producto */}
      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </>
  )
}
