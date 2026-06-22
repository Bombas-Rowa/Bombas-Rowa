import Reveal, { SectionHeading } from '../components/Reveal'
import { BRANDS } from '../config'
import { IconCheck } from '../components/Icons'

// Logo de marca: usa la imagen si existe (brand.logo en /public/marcas/),
// si no, muestra el nombre como wordmark.
function BrandLogo({ brand }) {
  if (brand.logo) {
    return (
      <img
        src={brand.logo}
        alt={brand.name}
        className="max-h-10 w-auto object-contain opacity-80 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
      />
    )
  }
  return (
    <span className="font-display text-xl font-extrabold tracking-tight text-ink-700/70 transition-colors group-hover:text-ink-900">
      {brand.name}
    </span>
  )
}

export default function Brands() {
  return (
    <section id="marcas" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Multimarca"
          title="Trabajamos con las mejores marcas"
          description="No te atamos a una sola opción. Te ofrecemos Rowa por su calidad y respaldo, y otras marcas reconocidas para que elijas según tu presupuesto. Siempre te asesoramos para que compres lo justo."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {BRANDS.map((b, i) => (
            <Reveal key={b.name} delay={(i % 6) * 0.05}>
              <div
                className={`group relative flex h-28 flex-col items-center justify-center rounded-2xl border bg-mist-50 px-3 text-center transition-all hover:-translate-y-1 hover:shadow-lg ${
                  b.featured ? 'border-aqua-300 ring-1 ring-aqua-300/40' : 'border-mist-200'
                }`}
              >
                {b.featured && (
                  <span className="absolute -top-2.5 rounded-full bg-aqua-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink-950">
                    Recomendada
                  </span>
                )}
                <BrandLogo brand={b} />
                {b.note && (
                  <span className="mt-1.5 text-[11px] font-medium text-ink-700/60">{b.note}</span>
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
