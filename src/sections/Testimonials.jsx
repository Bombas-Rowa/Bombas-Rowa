import Reveal, { SectionHeading } from '../components/Reveal'
import { IconStar } from '../components/Icons'

const REVIEWS = [
  {
    name: 'María Fernández',
    place: 'Caballito, CABA',
    text: 'Teníamos un hilito de agua en la ducha del primer piso. Instalaron una presurizadora Rowa y quedó como nueva. Súper prolijos y puntuales.',
    initial: 'M',
  },
  {
    name: 'Diego Ramírez',
    place: 'San Isidro, GBA',
    text: 'Se me quemó la bomba un domingo y me respondieron al toque. Al día siguiente ya estaba todo funcionando. Precio justo y trabajo impecable.',
    initial: 'D',
  },
  {
    name: 'Laura Gómez',
    place: 'Quilmes, GBA',
    text: 'Me asesoraron muy bien, no me quisieron vender la más cara sino la que realmente necesitaba. Se nota que saben. Recomendadísimos.',
    initial: 'L',
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="Clientes felices"
          title="Lo que dicen quienes ya nos eligieron"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-mist-200 bg-mist-50 p-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <IconStar key={j} className="h-4.5 w-4.5 text-signal-500" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-800">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-mist-200 pt-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink-900 font-display font-bold text-aqua-300">
                    {r.initial}
                  </span>
                  <div>
                    <div className="font-bold text-ink-900">{r.name}</div>
                    <div className="text-sm text-ink-700/60">{r.place}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
