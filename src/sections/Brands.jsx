import { useState } from 'react'
import Reveal, { SectionHeading } from '../components/Reveal'
import { BRANDS } from '../config'
import { IconCheck } from '../components/Icons'

// Logo de marca: usa la imagen (brand.logo en /public/marcas/)
// Los SVG ya vienen listos en color blanco nativo, por lo que no requieren filtros de inversión.
function BrandLogo({ brand }) {
  const [failed, setFailed] = useState(false)
  if (brand.logo && !failed) {
    return (
      <img
        src={brand.logo}
        alt={brand.name}
        onError={() => setFailed(true)}
        className="max-h-9 w-auto max-w-[130px] object-contain opacity-75 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 select-none pointer-events-none"
      />
    )
  }
  return (
    <span className="font-display text-lg font-extrabold tracking-tight text-white/80 transition-colors group-hover:text-white">
      {brand.name}
    </span>
  )
}

export default function Brands() {
  return (
    <section id="marcas" className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
      {/* Fondo tecnológico y gradientes premium */}
      <div className="absolute inset-0 tech-grid opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/15 to-ink-950" />
      <div className="absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-aqua-500/5 blur-[120px]" />
      <div className="absolute -right-48 bottom-1/4 h-96 w-96 rounded-full bg-aqua-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          dark
          center
          eyebrow="Multimarca"
          title="Trabajamos con las mejores marcas"
          description="No te atamos a una sola opción. Te ofrecemos Rowa por su calidad y respaldo, y otras marcas reconocidas para que elijas la opción justa para tu presupuesto."
        />

        <div className="mx-auto mt-14 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center">
          {BRANDS.map((b, i) => {
            const isLastOdd = i === BRANDS.length - 1 && BRANDS.length % 2 !== 0
            return (
              <Reveal
                key={b.name}
                delay={(i % 4) * 0.05}
                className={`w-full sm:w-auto ${isLastOdd ? 'col-span-2' : ''}`}
              >
                <div
                  className={`group relative flex h-28 w-full sm:w-44 flex-col items-center justify-center gap-2 rounded-2xl border px-5 text-center transition-all duration-300 backdrop-blur-sm ${
                    b.featured
                      ? 'border-aqua-500/55 bg-aqua-500/[0.03] ring-1 ring-aqua-500/25 hover:bg-aqua-500/[0.07] hover:shadow-[0_15px_30px_rgba(6,166,212,0.15)]'
                      : 'border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-black/20'
                  } hover:-translate-y-1.5`}
                >
                  {b.featured && (
                    <span className="absolute -top-2.5 rounded-full bg-aqua-500 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-ink-950 shadow-md shadow-aqua-500/25">
                      Recomendada
                    </span>
                  )}
                  <BrandLogo brand={b} />
                  {b.note && (
                    <span className="text-[10px] font-semibold tracking-wide uppercase text-aqua-300/80">
                      {b.note}
                    </span>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-2.5 text-center text-sm text-mist-100/60">
            <IconCheck className="h-4.5 w-4.5 shrink-0 text-aqua-400" />
            Productos y repuestos 100% originales, con garantía oficial de cada fabricante.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
