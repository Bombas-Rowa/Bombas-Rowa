import { useState } from 'react'
import { IconDrop } from './Icons'

// Imagen de producto con fallback de marca: si la URL falla,
// muestra un placeholder con gradiente aqua + ícono, nunca una imagen rota.
export default function ProductImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-ink-800 via-ink-700 to-aqua-700 ${className}`}
      >
        <div className="flex flex-col items-center gap-2 text-aqua-200/80">
          <IconDrop className="h-10 w-10" />
          <span className="font-display text-xs font-semibold tracking-widest uppercase">
            Rowa
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
