import Hero from '../sections/Hero'
import Services from '../sections/Services'
import ProductCarousel from '../sections/ProductCarousel'
import WhyUs from '../sections/WhyUs'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import ContactCTA from '../sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ProductCarousel />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  )
}
