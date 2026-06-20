import { Link } from 'react-router-dom'
import { BUSINESS, WA_GENERAL } from '../config'
import {
  IconDrop,
  IconWhatsApp,
  IconPhone,
  IconMail,
  IconPin,
} from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 text-mist-100/70">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Marca */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-aqua-500 text-ink-950">
                <IconDrop className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <span>
                <span className="block font-display text-lg font-extrabold text-white">
                  {BUSINESS.name}
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-aqua-300">
                  Servicio Oficial Rowa
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {BUSINESS.tagline}. Instalación, venta y reparación de bombas y presurizadores con
              garantía oficial en {BUSINESS.city}.
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              <IconWhatsApp className="h-5 w-5" />
              Coordinar visita
            </a>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { l: 'Inicio', to: '/' },
                { l: 'Productos', to: '/productos' },
                { l: 'Servicios', to: '/#servicios' },
                { l: 'Cómo trabajamos', to: '/#proceso' },
                { l: 'Contacto', to: '/#contacto' },
              ].map((i) => (
                <li key={i.l}>
                  <Link to={i.to} className="transition-colors hover:text-aqua-300">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <IconPhone className="h-4.5 w-4.5 text-aqua-300" />
                <a href={`tel:${BUSINESS.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-aqua-300">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-4.5 w-4.5 text-aqua-300" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-aqua-300">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPin className="h-4.5 w-4.5 text-aqua-300" />
                {BUSINESS.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-mist-100/50 sm:flex-row">
          <p>© {year} {BUSINESS.name}. Todos los derechos reservados.</p>
          <p>
            Rowa es una marca registrada. {BUSINESS.name} es un servicio independiente de
            instalación y venta.
          </p>
        </div>
      </div>
    </footer>
  )
}
