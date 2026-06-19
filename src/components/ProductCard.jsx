import { motion } from 'framer-motion'
import ProductThumb from './ProductThumb'
import { waProduct } from '../config'
import { IconWhatsApp, IconChevron } from './Icons'

export default function ProductCard({ product, index = 0, onExpand }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-shadow hover:shadow-xl hover:shadow-ink-900/10 ${
        product.highlight ? 'border-aqua-300 ring-1 ring-aqua-300/40' : 'border-mist-200'
      }`}
    >
      {/* Foto del producto (clickeable → abre popup) */}
      <button
        onClick={() => onExpand?.(product)}
        className="relative aspect-[4/3] overflow-hidden text-left"
        aria-label={`Ver detalles de ${product.name}`}
      >
        <ProductThumb
          product={product}
          className="h-full w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm ${
              product.highlight ? 'bg-aqua-500 text-ink-950' : 'bg-ink-900/90 text-white backdrop-blur'
            }`}
          >
            {product.badge}
          </span>
        )}
      </button>

      {/* Cuerpo */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-aqua-600">
          {product.tagline}
        </p>
        <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink-900">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700/75">{product.short}</p>

        {/* Specs rápidas (3 destacadas) */}
        <dl className="mt-4 grid grid-cols-3 gap-2">
          {product.specs.slice(0, 3).map((s) => (
            <div key={s.label} className="rounded-lg bg-mist-50 px-2.5 py-2 text-center">
              <dt className="text-[10px] font-medium uppercase tracking-wide text-ink-700/55">
                {s.label}
              </dt>
              <dd className="mt-0.5 font-display text-sm font-bold text-ink-900">{s.value}</dd>
            </div>
          ))}
        </dl>

        {/* Acciones */}
        <div className="mt-5 flex items-center gap-2">
          <a
            href={waProduct(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3 text-sm font-bold text-white shadow-md shadow-whatsapp/25 transition-transform hover:scale-[1.02]"
          >
            <IconWhatsApp className="h-4.5 w-4.5" />
            Presupuestar
          </a>
          <button
            onClick={() => onExpand?.(product)}
            className="flex items-center gap-1.5 rounded-xl border border-mist-200 px-4 py-3 text-sm font-bold text-ink-800 transition-colors hover:border-aqua-300 hover:bg-aqua-50"
          >
            Ver más
            <IconChevron className="h-4 w-4 -rotate-90" />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
