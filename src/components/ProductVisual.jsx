import { IconGauge, IconBolt, IconDrop, IconShield } from './Icons'

// Tile visual de marca para productos. En vez de fotos de stock que no
// representan el producto real, mostramos un panel técnico premium,
// distinto por categoría, con las specs clave destacadas.
const STYLES = {
  presurizadores: { icon: IconGauge, label: 'Presurizador', from: 'from-aqua-600', to: 'to-ink-900' },
  'velocidad-variable': { icon: IconBolt, label: 'Velocidad variable', from: 'from-ink-700', to: 'to-aqua-700' },
  grupos: { icon: IconShield, label: 'Grupo de presión', from: 'from-ink-700', to: 'to-ink-950' },
  desagote: { icon: IconDrop, label: 'Desagote', from: 'from-ink-800', to: 'to-aqua-700' },
}

export default function ProductVisual({ product, className = '' }) {
  const s = STYLES[product.category] || STYLES.presurizadores
  const Icon = s.icon
  const hero = product.specs[0] // spec más representativa (potencia / capacidad)
  const second = product.specs[1]

  return (
    <div
      className={`relative isolate flex flex-col justify-between overflow-hidden bg-gradient-to-br ${s.from} ${s.to} p-5 text-white ${className}`}
    >
      {/* grilla técnica + halo */}
      <div className="absolute inset-0 -z-10 tech-grid opacity-70" />
      <div className="absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-aqua-400/25 blur-3xl" />
      {/* ícono watermark gigante */}
      <Icon className="pointer-events-none absolute -bottom-6 -right-4 -z-10 h-44 w-44 text-white/10" />

      {/* top: categoría + ícono */}
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/80 backdrop-blur">
          {s.label}
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-aqua-200 backdrop-blur">
          <Icon className="h-6 w-6" />
        </span>
      </div>

      {/* bottom: spec destacada */}
      <div className="mt-8 flex items-end gap-4">
        {hero && (
          <div>
            <div className="font-display text-3xl font-extrabold leading-none text-white">
              {hero.value}
            </div>
            <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55">
              {hero.label}
            </div>
          </div>
        )}
        {second && (
          <div className="border-l border-white/15 pl-4">
            <div className="font-display text-xl font-bold leading-none text-aqua-200">
              {second.value}
            </div>
            <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/55">
              {second.label}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
