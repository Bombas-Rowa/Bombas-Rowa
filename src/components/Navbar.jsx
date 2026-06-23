import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BUSINESS, WA_GENERAL } from '../config'
import {
  IconWhatsApp,
  IconMenu,
  IconClose,
  IconPhone,
  IconHome,
  IconTools,
  IconShield,
  IconTruck,
  IconGauge,
} from './Icons'

// id = sección en el home (o 'inicio' para el tope). icon = para el drawer mobile.
const LINKS = [
  { label: 'Inicio', id: 'inicio', icon: IconHome },
  { label: 'Servicios', id: 'servicios', icon: IconTools },
  { label: 'Marcas', id: 'marcas', icon: IconShield },
  { label: 'Trabajos', id: 'galeria', icon: IconTruck },
  { label: 'Proceso', id: 'proceso', icon: IconGauge },
  { label: 'Contacto', id: 'contacto', icon: IconPhone },
]

export default function Navbar() {
  const [active, setActive] = useState('inicio')
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => setOpen(false), [location])

  // Scroll-spy: marca la sección activa según la posición del scroll.
  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('')
      return
    }
    const ids = ['servicios', 'marcas', 'galeria', 'proceso', 'contacto']
    const onScroll = () => {
      const y = window.scrollY
      // Cerca del fondo → Contacto
      if (y + window.innerHeight >= document.documentElement.scrollHeight - 80) {
        setActive('contacto')
        return
      }
      let current = 'inicio'
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop - 150) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const go = (id, e) => {
    e.preventDefault()
    setOpen(false)
    const scroll = () => {
      if (id === 'inicio') window.scrollTo({ top: 0, behavior: 'smooth' })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(scroll, 120)
    } else {
      scroll()
    }
  }

  const isActive = (id) =>
    location.pathname === '/' &&
    (active === id || (id === 'inicio' && (active === '' || active === 'inicio')))

  const currentLabel =
    location.pathname !== '/'
      ? BUSINESS.name
      : LINKS.find((l) => isActive(l.id))?.label || 'Inicio'

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-4 z-50 w-[95%] max-w-6xl -translate-x-1/2"
    >
      {/* Barra flotante de vidrio (pill) */}
      <div className="relative flex h-16 items-center justify-between rounded-full border border-white/10 bg-ink-950/70 px-3 shadow-2xl shadow-ink-950/50 backdrop-blur-xl sm:px-5">
        {/* brillo superior tipo vidrio */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Logo */}
        <Link
          to="/"
          aria-label={`${BUSINESS.name} — Inicio`}
          className="flex shrink-0 items-center"
        >
          <img
            src="/hidro-logo.svg"
            alt={BUSINESS.name}
            className="h-9 w-auto transition-transform hover:scale-105 sm:h-11"
          />
        </Link>

        {/* Mobile: indicador de la sección actual */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-mist-100/90 shadow-lg shadow-ink-950/30 backdrop-blur-md lg:hidden">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua-400 shadow-[0_0_6px_rgba(33,195,238,0.85)]" />
          {currentLabel}
        </div>

        {/* Desktop: links en pill interno */}
        <div className="hidden items-center rounded-full border border-white/10 bg-ink-900/60 px-1.5 py-1 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={(e) => go(l.id, e)}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-all duration-300 ${
                isActive(l.id)
                  ? 'bg-white/10 font-semibold text-aqua-300 shadow-inner'
                  : 'font-medium text-mist-100/60 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop: CTA */}
        <div className="hidden shrink-0 lg:flex">
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-bold text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-105"
          >
            <IconWhatsApp className="h-4.5 w-4.5" />
            Coordinar visita
          </a>
        </div>

        {/* Mobile: toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-900/60 p-2.5 text-mist-100/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {/* Drawer mobile: tarjeta de vidrio flotante */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="absolute inset-x-0 top-[4.75rem] lg:hidden"
        >
          <div className="rounded-3xl border border-white/10 bg-ink-950/95 p-4 shadow-2xl shadow-ink-950/60 backdrop-blur-2xl">
            <div className="flex flex-col gap-1.5">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={(e) => go(l.id, e)}
                  className={`flex w-full items-center gap-3 rounded-2xl border-l-4 px-4 py-3 text-left text-sm transition-all duration-200 ${
                    isActive(l.id)
                      ? 'border-aqua-400 bg-white/5 font-bold text-aqua-300'
                      : 'border-transparent font-medium text-mist-100/65 hover:border-white/10 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <l.icon className={`h-5 w-5 ${isActive(l.id) ? 'text-aqua-300' : 'text-mist-100/40'}`} />
                  {l.label}
                </button>
              ))}
            </div>

            <div className="mt-3 flex flex-col gap-2.5 border-t border-white/10 pt-3">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-whatsapp px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-whatsapp/25"
              >
                <IconWhatsApp className="h-5 w-5" />
                Coordinar visita por WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phoneDisplay.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-base font-bold text-white"
              >
                <IconPhone className="h-5 w-5 text-aqua-300" />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
