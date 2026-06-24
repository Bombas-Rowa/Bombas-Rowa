import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => setOpen(false), [location])

  // Scroll-spy
  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('')
      return
    }
    const ids = ['servicios', 'marcas', 'galeria', 'proceso', 'contacto']
    const onScroll = () => {
      const y = window.scrollY
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

  // Variants for staggered link entries in mobile drawer
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -12, scale: 0.96 },
    show: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 25 } },
    exit: { opacity: 0, x: 8, scale: 0.96, transition: { duration: 0.15 } },
  }

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2"
      >
        {/* Barra flotante de vidrio (pill) */}
        <div className="relative flex h-16 items-center justify-between rounded-full border border-white/10 bg-ink-950/75 px-3 shadow-[0_20px_50px_rgba(5,13,23,0.35)] backdrop-blur-xl sm:px-4 ring-1 ring-white/5">
          {/* Brillo superior fino tipo Apple */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Logo */}
          <Link
            to="/"
            aria-label={`${BUSINESS.name} — Inicio`}
            className="flex shrink-0 items-center pl-1"
          >
            <img
              src="/hidro-logo.svg"
              alt={BUSINESS.name}
              className="h-[30px] w-auto transition-all duration-300 hover:scale-105 active:scale-95 sm:h-10"
            />
          </Link>

          {/* Mobile: indicador de la sección actual (Floating status pill) */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/8 bg-ink-900/60 px-3.5 py-1.5 text-xs font-bold tracking-wide text-mist-100/90 shadow-md backdrop-blur-md lg:hidden">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua-400 shadow-[0_0_6px_rgba(33,195,238,0.85)]" />
            {currentLabel}
          </div>

          {/* Desktop: links en pill interno (Modern tabs sliding navigation) */}
          <div className="relative hidden items-center gap-1 rounded-full border border-white/5 bg-ink-950/40 p-1 lg:flex">
            {LINKS.map((l) => {
              const activeState = isActive(l.id)
              return (
                <button
                  key={l.id}
                  onClick={(e) => go(l.id, e)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    activeState ? 'text-aqua-300' : 'text-mist-100/60 hover:text-white'
                  }`}
                >
                  {activeState && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 z-0 rounded-full bg-white/[0.08] shadow-inner shadow-white/5 ring-1 ring-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </button>
              )
            })}
          </div>

          {/* Desktop: CTA Button */}
          <div className="hidden shrink-0 lg:flex pr-1">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 items-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-bold text-white shadow-md shadow-whatsapp/15 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-whatsapp/25 active:scale-95"
            >
              <IconWhatsApp className="h-4.5 w-4.5 transition-transform group-hover:rotate-12" />
              Coordinar visita
            </a>
          </div>

          {/* Mobile: Hamburger/Close button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-900/40 p-2.5 text-mist-100/80 transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-90 lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <IconClose className="h-4.5 w-4.5" /> : <IconMenu className="h-4.5 w-4.5" />}
          </button>
        </div>

        {/* Drawer mobile: tarjeta de vidrio flotante */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-[4.75rem] z-50 origin-top lg:hidden"
            >
              <div className="rounded-3xl border border-white/10 bg-ink-950/90 p-4 shadow-[0_25px_60px_rgba(5,13,23,0.5)] backdrop-blur-2xl ring-1 ring-white/5">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-col gap-1.5"
                >
                  {LINKS.map((l) => {
                    const activeState = isActive(l.id)
                    return (
                      <motion.button
                        key={l.id}
                        variants={itemVariants}
                        onClick={(e) => go(l.id, e)}
                        className={`flex w-full items-center gap-3 rounded-2xl border-l-4 px-4 py-3 text-left text-sm transition-all duration-200 ${
                          activeState
                            ? 'border-aqua-400 bg-white/5 font-bold text-aqua-300 shadow-inner'
                            : 'border-transparent font-medium text-mist-100/65 hover:border-white/10 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <l.icon
                          className={`h-5 w-5 transition-colors ${
                            activeState ? 'text-aqua-300' : 'text-mist-100/35'
                          }`}
                        />
                        {l.label}
                      </motion.button>
                    )
                  })}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3.5 flex flex-col gap-2 border-t border-white/8 pt-3.5"
                >
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-whatsapp px-4 py-3.5 text-base font-bold text-white shadow-md shadow-whatsapp/20 transition-transform active:scale-[0.98]"
                  >
                    <IconWhatsApp className="h-5 w-5" />
                    Coordinar visita por WhatsApp
                  </a>
                  <a
                    href={`tel:${BUSINESS.phoneDisplay.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-base font-bold text-white transition-colors active:bg-white/10"
                  >
                    <IconPhone className="h-5 w-5 text-aqua-300" />
                    {BUSINESS.phoneDisplay}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Screen Backdrop Overlay when Mobile Menu is open */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[3px] lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
