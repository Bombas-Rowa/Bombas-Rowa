import { useState } from 'react'
import Reveal, { SectionHeading } from '../components/Reveal'
import { BRANDS } from '../config'
import { IconCheck } from '../components/Icons'

// Logo de marca: usa la imagen (brand.logo en /public/marcas/)
// Para que se vea profesional y pareja en fondo claro, la normalizamos a un gris neutro
// elegante usando un filtro de brillo 0 (negro) con opacidad. En hover, cobra mayor intensidad.
function BrandLogo({ brand }) {
  const [failed, setFailed] = useState(false)
  if (brand.logo && !failed) {
    return (
      <img
        src={brand.logo}
        alt={brand.name}
        onError={() => setFailed(true)}
        className="max-h-8.5 w-auto max-w-[130px] object-contain [filter:brightness(0)] opacity-40 transition-all duration-300 group-hover:scale-103 group-hover:opacity-75 select-none pointer-events-none"
      />
    )
  }
  return (
    <span className="font-display text-base font-extrabold tracking-tight text-ink-900/50 transition-colors group-hover:text-ink-900/80">
      {brand.name}
    </span>
  )
}

export default function Brands() {
  return (
    <section id="marcas" className="relative bg-mist-50 py-20 lg:py-28">
      {/* Fondo limpio con detalles de diseño sutiles */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#0884b1_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Multimarca"
          title="Trabajamos con las mejores marcas"
          description="No te atamos a una sola opción. Te ofrecemos Rowa por su calidad y respaldo, y otras marcas reconocidas para que elijas la opción justa para tu presupuesto."
        />

        {/* 
          En mobile: grid de 2 columnas (para que no quede larga la sección).
          En desktop (md+): flexbox centrado con ancho máximo de 800px para forzar una fila de 4 y otra de 3.
        */}
        <div className="mx-auto mt-14 grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center md:max-w-[800px]">
          {BRANDS.map((b, i) => {
            const isLastOdd = i === BRANDS.length - 1 && BRANDS.length % 2 !== 0
            return (
              <Reveal
                key={b.name}
                delay={(i % 4) * 0.05}
                className={`w-full md:w-auto ${isLastOdd ? 'col-span-2' : ''}`}
              >
                <div
                  className={`group relative flex h-24 w-full md:w-44 flex-col items-center justify-center gap-1 rounded-2xl border px-5 text-center transition-all duration-300 ${
                    b.featured
                      ? 'border-aqua-400 bg-white shadow-md shadow-aqua-500/5 hover:border-aqua-500 hover:shadow-lg hover:shadow-aqua-500/10'
                      : 'border-mist-200/80 bg-white shadow-sm shadow-mist-200/30 hover:border-aqua-300 hover:shadow-md hover:shadow-aqua-500/5'
                  } hover:-translate-y-1`}
                >
                  {b.featured && (
                    <span className="absolute -top-2.5 rounded-full bg-aqua-500 px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-wider text-ink-950 shadow-sm shadow-aqua-500/20">
                      Recomendada
                    </span>
                  )}
                  <BrandLogo brand={b} />
                  {b.note && (
                    <span className="text-[9px] font-bold tracking-wide uppercase text-aqua-600">
                      {b.note}
                    </span>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-2.5 text-center text-sm text-ink-700/60">
            <IconCheck className="h-4.5 w-4.5 shrink-0 text-aqua-500" />
            Productos y repuestos 100% originales, con garantía oficial de cada fabricante.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
