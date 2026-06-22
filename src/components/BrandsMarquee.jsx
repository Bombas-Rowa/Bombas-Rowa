import { useState } from 'react'
import { BRANDS } from '../config'

// Un logo (o el nombre como fallback) dentro de la cinta. Normalizado a blanco.
function MarqueeItem({ brand }) {
  const [failed, setFailed] = useState(false)
  return (
    <span className="mx-5 inline-flex shrink-0 items-center sm:mx-7">
      {brand.logo && !failed ? (
        <img
          src={brand.logo}
          alt={brand.name}
          onError={() => setFailed(true)}
          className="h-6 w-auto max-w-[120px] object-contain opacity-60 [filter:brightness(0)_invert(1)] transition group-hover:opacity-90"
        />
      ) : (
        <span className="font-display text-base font-extrabold tracking-tight text-white/55 transition group-hover:text-white/80">
          {brand.name}
        </span>
      )}
    </span>
  )
}

// Cinta de marcas que pasa sola dentro del Hero. Repetimos la lista 4 veces:
// la animación corre -50% (= 2 vueltas de marcas), por lo que el contenido
// visible siempre supera el ancho de pantalla y nunca queda un hueco vacío.
export default function BrandsMarquee() {
  const items = Array.from({ length: 6 }, () => BRANDS).flat()
  return (
    <section
      aria-label="Marcas con las que trabajamos"
      className="border-t border-white/5 bg-ink-950/60 py-4"
    >
      <div className="marquee-mask group overflow-hidden">
        <div className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
          {items.map((b, i) => (
            <MarqueeItem key={`${b.name}-${i}`} brand={b} />
          ))}
        </div>
      </div>
    </section>
  )
}
