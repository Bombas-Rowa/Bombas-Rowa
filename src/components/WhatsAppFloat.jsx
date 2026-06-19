import { useEffect, useState } from 'react'
import { WA_GENERAL } from '../config'
import { IconWhatsApp } from './Icons'

// Botón flotante de WhatsApp, siempre accesible.
export default function WhatsAppFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-whatsapp py-3.5 pl-3.5 pr-4 text-white shadow-xl shadow-whatsapp/40 transition-all duration-300 hover:scale-105 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-whatsapp/40" />
      <IconWhatsApp className="h-7 w-7" />
      <span className="hidden text-sm font-bold sm:block">Escribinos</span>
    </a>
  )
}
