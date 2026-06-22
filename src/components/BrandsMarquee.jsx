import { useState } from 'react'
import { BRANDS } from '../config'

// Un logo (o el nombre como fallback) dentro de la cinta. Los SVG ya vienen
// en blanco "horneado" (sin filtro CSS), para que no parpadeen en iOS Safari.
function MarqueeItem({ brand }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className="mx-5 inline-flex shrink-0 items-center sm:mx-7">
      {brand.logo && !failed ? (
        <img
          src={brand.logo}
          alt={brand.name}
          onError={() => setFailed(true)}
          className="h-6 w-auto max-w-[120px] object-contain opacity-65 select-none pointer-events-none"
        />
      ) : (
        <span className="font-display text-base font-extrabold tracking-tight text-white/50 select-none">
          {brand.name}
        </span>
      )}
    </span>
  )
}

// Cinta de marcas que pasa sola dentro del Hero. Repetimos la lista 4 veces
// para que el contenido visible siempre supere el ancho de pantalla.
// Removimos el pause-on-hover y transiciones complejas para evitar bugs de pintado en iOS Safari.
export default function BrandsMarquee() {
  const items = Array.from({ length: 4 }, () => BRANDS).flat()
  return (
    <section
      aria-label="Marcas con las que trabajamos"
      className="relative border-t border-white/5 bg-ink-950 py-4"
    >
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center">
          {items.map((b, i) => (
            <MarqueeItem key={`${b.name}-${i}`} brand={b} />
          ))}
        </div>
        {/* desvanecido lateral con gradiente */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-ink-950 to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-ink-950 to-transparent sm:w-16" />
      </div>
    </section>
  )
}

