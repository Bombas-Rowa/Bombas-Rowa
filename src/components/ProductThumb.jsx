import { useState } from 'react'
import ProductVisual from './ProductVisual'

// Muestra la foto oficial del producto sobre un panel claro y prolijo
// (object-contain para que se vea la bomba completa). Si la imagen falla,
// usa como respaldo el tile técnico de marca por categoría.
export default function ProductThumb({ product, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !product.image) {
    return <ProductVisual product={product} className={className} />
  }

  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br from-white via-mist-50 to-mist-100 ${className}`}
    >
      {/* halo aqua sutil para dar profundidad */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-aqua-200/40 blur-2xl" />
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`relative z-10 h-full w-full object-contain p-5 ${imgClassName}`}
      />
    </div>
  )
}
