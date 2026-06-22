import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BUSINESS, WA_GENERAL } from '../config'
import { IconWhatsApp, IconMenu, IconClose, IconPhone } from './Icons'
import LogoMark from './LogoMark'

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
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  // Bloquea el scroll del fondo mientras el menú mobile está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-950/95 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900 shadow-lg shadow-ink-950/40 ring-1 ring-inset ring-white/10 transition-transform group-hover:scale-105">
            <LogoMark className="h-8 w-8" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold tracking-tight text-white">
              {BUSINESS.name}
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-aqua-300">
              Servicio técnico multimarca
            </span>
          </span>
        </Link>

        {/* Links desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={(e) => handleNav(e, l.to)}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-mist-100/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden items-center gap-3 lg:flex">
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
          className="grid h-11 w-11 place-items-center rounded-xl bg-white/8 text-white lg:hidden"
          aria-label="Abrir menú"
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menú mobile: overlay de pantalla completa */}
      {open && (
        <div className="fixed inset-0 z-40 flex h-[100dvh] flex-col overflow-y-auto bg-ink-950 px-5 pb-10 pt-24 lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={(e) => handleNav(e, l.to)}
                className="rounded-xl px-4 py-3.5 text-lg font-semibold text-mist-100/90 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-4 text-base font-bold text-white shadow-lg shadow-whatsapp/25"
            >
              <IconWhatsApp className="h-5 w-5" />
              Coordinar visita por WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phoneDisplay.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-4 text-base font-bold text-white"
            >
              <IconPhone className="h-5 w-5 text-aqua-300" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
