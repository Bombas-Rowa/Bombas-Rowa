import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BUSINESS, WA_GENERAL } from '../config'
import { IconWhatsApp, IconMenu, IconClose, IconPhone } from './Icons'

const LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/#servicios' },
  { label: 'Marcas', to: '/#marcas' },
  { label: 'Equipos', to: '/#galeria' },
  { label: 'Cómo trabajamos', to: '/#proceso' },
  { label: 'Contacto', to: '/#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  const handleNav = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault()
      const id = to.slice(2)
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 120)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
      setOpen(false)
    }
  }

  // Vidrio: translúcido + blur. Al hacer scroll se vuelve más sólido para legibilidad.
  const glass =
    scrolled || open
      ? 'border-white/10 bg-ink-950/70 shadow-xl shadow-ink-950/40'
      : 'border-white/[0.08] bg-white/[0.06] shadow-lg shadow-ink-950/20'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="px-3 pt-3 sm:px-4 sm:pt-4">
        {/* Barra flotante de vidrio */}
        <nav
          className={`relative mx-auto flex max-w-[1536px] items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-2xl transition-all duration-300 sm:px-5 ${glass}`}
        >
          {/* brillo superior tipo vidrio */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Logo */}
          <Link
            to="/"
            className="group relative flex items-center"
            aria-label={`${BUSINESS.name} — Inicio`}
          >
            <img
              src="/hidro-logo.svg"
              alt={BUSINESS.name}
              className="h-9 w-auto transition-transform group-hover:scale-[1.03] sm:h-10"
            />
          </Link>

          {/* Links desktop */}
          <div className="relative hidden items-center gap-0.5 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={(e) => handleNav(e, l.to)}
                className="rounded-lg px-3.5 py-2 text-sm font-semibold text-mist-100/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="relative hidden items-center lg:flex">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-whatsapp/25 transition-transform hover:scale-105"
            >
              <IconWhatsApp className="h-4.5 w-4.5" />
              Coordinar visita
            </a>
          </div>

          {/* Toggle mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/15 lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Menú mobile: panel de vidrio flotante */}
        {open && (
          <div className="mx-auto mt-2 max-w-[1536px] origin-top overflow-hidden rounded-2xl border border-white/10 bg-ink-950/80 shadow-2xl shadow-ink-950/50 backdrop-blur-2xl lg:hidden">
            <nav className="flex flex-col p-2">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={(e) => handleNav(e, l.to)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-mist-100/90 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2.5 border-t border-white/10 p-3">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-whatsapp/25"
              >
                <IconWhatsApp className="h-5 w-5" />
                Coordinar visita por WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phoneDisplay.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base font-bold text-white"
              >
                <IconPhone className="h-5 w-5 text-aqua-300" />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
