import Hero from '../sections/Hero'
import BrandsMarquee from '../components/BrandsMarquee'
import Services from '../sections/Services'
import Brands from '../sections/Brands'
import Gallery from '../sections/Gallery'
import WhyUs from '../sections/WhyUs'
import Process from '../sections/Process'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import ContactCTA from '../sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsMarquee />
      <Services />
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
