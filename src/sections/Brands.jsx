import { useState } from 'react'
import Reveal, { SectionHeading } from '../components/Reveal'
import { BRANDS } from '../config'
import { IconCheck } from '../components/Icons'

// Logo de marca: usa la imagen (brand.logo en /public/marcas/) normalizada a
// blanco para que todas se vean parejas sobre la tarjeta oscura. Si el archivo
// no existe todavía, cae al nombre como wordmark.
function BrandLogo({ brand }) {
  const [failed, setFailed] = useState(false)
  if (brand.logo && !failed) {
    return (
      <img
        src={brand.logo}
        alt={brand.name}
        onError={() => setFailed(true)}
        className="max-h-9 w-auto max-w-[130px] object-contain opacity-90 [filter:brightness(0)_invert(1)] transition group-hover:opacity-100"
      />
    )
  }
  return (
    <span className="font-display text-xl font-extrabold tracking-tight text-white/85">
      {brand.name}
    </span>
  )
}

export default function Brands() {
  return (
    <section id="marcas" className="relative bg-mist-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Multimarca"
          title="Trabajamos con las mejores marcas"
          description="No te atamos a una sola opción. Te ofrecemos Rowa por su calidad y respaldo, y otras marcas reconocidas para que elijas según tu presupuesto. Siempre te asesoramos para que compres lo justo."
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-4">
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} delay={(i % 4) * 0.05}>
              <div
                className={`group relative flex h-28 w-44 flex-col items-center justify-center gap-2 rounded-2xl border bg-ink-900 px-5 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-950/20 ${
                  b.featured
                    ? 'border-aqua-400/60 ring-1 ring-aqua-400/40'
                    : 'border-white/10'
                }`}
              >
                {b.featured && (
                  <span className="absolute -top-2.5 rounded-full bg-aqua-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink-950">
                    Recomendada
                  </span>
                )}
                <BrandLogo brand={b} />
                {b.note && (
                  <span className="text-[11px] font-medium text-aqua-200/70">{b.note}</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-sm text-ink-700/70">
            <IconCheck className="h-4 w-4 shrink-0 text-aqua-500" />
            Productos y repuestos originales, con garantía oficial de cada fabricante.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
