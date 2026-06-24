import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Brands from '../sections/Brands'
import Gallery from '../sections/Gallery'
import WhyUs from '../sections/WhyUs'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import ContactCTA from '../sections/ContactCTA'

// Separador sutil para secciones consecutivas del mismo color (Services y Brands)
function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center bg-mist-50 py-2">
      <div className="w-full max-w-7xl px-5 lg:px-8">
        <div className="relative flex items-center justify-center">
          {/* Línea difuminada en los bordes */}
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-mist-200/80 to-transparent" />
          
          {/* Botón flotante central con indicador aqua palpitante */}
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-mist-200/70 bg-white shadow-sm z-10">
            <span className="h-2 w-2 rounded-full bg-aqua-500/20 flex items-center justify-center">
              <span className="h-1 w-1 rounded-full bg-aqua-500" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <SectionDivider />
      <Brands />
      <Gallery />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  )
}
