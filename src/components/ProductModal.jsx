import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import ProductThumb from './ProductThumb'
import { waProduct } from '../config'
import { IconWhatsApp, IconClose, IconCheck, IconShield } from './Icons'

// Popup (modal) con la ficha completa del producto.
// Se abre desde "Ver más". Cierra con la X, el fondo o la tecla ESC.
export default function ProductModal({ product, onClose }) {
  // Bloquea el scroll del fondo y habilita cerrar con ESC.
  useEffect(() => {
    if (!product) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [product, onClose])

  return createPortal(
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Tarjeta */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink-800 shadow-md backdrop-blur transition-colors hover:bg-ink-900 hover:text-white"
            >
              <IconClose className="h-5 w-5" />
            </button>

            <div className="grid overflow-y-auto md:grid-cols-2">
              {/* Imagen */}
              <div className="relative min-h-[240px] bg-mist-50 md:min-h-full">
                <ProductThumb product={product} className="h-full min-h-[240px] w-full" />
                {product.badge && (
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm ${
                      product.highlight ? 'bg-aqua-500 text-ink-950' : 'bg-ink-900 text-white'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wide text-aqua-600">
                  {product.tagline}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-extrabold leading-tight text-ink-900">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700/80">{product.short}</p>

                {/* Specs completas */}
                <h4 className="mt-6 text-xs font-bold uppercase tracking-wide text-ink-700/60">
                  Especificaciones técnicas
                </h4>
                <dl className="mt-2 grid grid-cols-2 gap-x-5 gap-y-0">
                  {product.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex justify-between gap-2 border-b border-mist-100 py-1.5 text-sm"
                    >
                      <dt className="text-ink-700/65">{s.label}</dt>
                      <dd className="text-right font-semibold text-ink-900">{s.value}</dd>
                    </div>
                  ))}
                </dl>

                {/* Características */}
                <h4 className="mt-6 text-xs font-bold uppercase tracking-wide text-ink-700/60">
                  Características
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-700/85">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-aqua-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Ideal + garantía */}
                <div className="mt-5 space-y-2 rounded-xl bg-aqua-50 p-4">
                  <p className="text-sm text-ink-800">
                    <span className="font-bold">Ideal para: </span>
                    {product.ideal}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-aqua-700">
                    <IconShield className="h-4 w-4" />
                    {product.warranty}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={waProduct(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3.5 font-bold text-white shadow-lg shadow-whatsapp/25 transition-transform hover:scale-[1.02]"
                >
                  <IconWhatsApp className="h-5 w-5" />
                  Pedir presupuesto por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
