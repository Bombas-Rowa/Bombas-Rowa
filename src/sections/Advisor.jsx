import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { SectionHeading } from '../components/Reveal'
import { waLink, BUSINESS } from '../config'
import {
  IconGauge,
  IconDrop,
  IconWrench,
  IconChevron,
  IconWhatsApp,
  IconCheck,
  IconShield,
} from '../components/Icons'

const STEPS = [
  {
    title: '¿Cuál es el problema principal?',
    key: 'problem',
    options: [
      {
        id: 'poca_presion',
        label: 'Poca presión general en canillas/duchas',
        desc: 'El agua sale con poca fuerza en toda la casa.',
        icon: IconGauge,
      },
      {
        id: 'agua_caliente',
        label: 'Poca presión solo en el agua caliente',
        desc: 'El calefón no enciende o sale fría/tibia en la ducha.',
        icon: IconGauge,
      },
      {
        id: 'tanque_lento',
        label: 'El tanque de agua tarda mucho en llenarse',
        desc: 'Falta caudal de entrada desde la calle al tanque.',
        icon: IconDrop,
      },
      {
        id: 'bomba_falla',
        label: 'La bomba actual falla o hace ruido',
        desc: 'Prende y apaga seguido, hace ruido raro o no arranca.',
        icon: IconWrench,
      },
    ],
  },
  {
    title: '¿Cómo es la estructura de tu casa?',
    key: 'plants',
    options: [
      {
        id: '1_planta',
        label: 'Casa de 1 Planta',
        desc: 'Planta baja únicamente.',
      },
      {
        id: '2_plantas',
        label: 'Casa de 2 Plantas (o más)',
        desc: 'Tiene planta alta, terraza o baños arriba.',
      },
      {
        id: 'ph_depto',
        label: 'PH / Departamento',
        desc: 'Instalación compartida o en planta baja/primer piso.',
      },
    ],
  },
  {
    title: '¿Cuántas duchas se usan en simultáneo?',
    key: 'showers',
    options: [
      {
        id: '1_ducha',
        label: '1 Ducha activa',
        desc: 'Viven pocas personas o se usa un baño a la vez.',
      },
      {
        id: '2_duchas',
        label: '2 Duchas activas',
        desc: 'Uso familiar regular en horas pico.',
      },
      {
        id: '3_mas',
        label: '3 o más Duchas',
        desc: 'Varios baños en uso constante.',
      },
    ],
  },
]

export default function Advisor() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({
    problem: null,
    plants: null,
    showers: null,
  })

  const handleSelect = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
    if (step < STEPS.length - 1) {
      setTimeout(() => {
        setStep((s) => s + 1)
      }, 250)
    } else {
      setStep(STEPS.length)
    }
  }

  const goBack = () => {
    if (step > 0) {
      setStep((s) => s - 1)
    }
  }

  const reset = () => {
    setStep(0)
    setAnswers({
      problem: null,
      plants: null,
      showers: null,
    })
  }

  const getRecommendation = () => {
    const { problem, plants, showers } = answers

    if (problem === 'bomba_falla') {
      return {
        title: 'Revisión y diagnóstico físico de tu equipo',
        desc: 'Tu bomba o presurizador actual requiere una medición física en el lugar. Para evitar un gasto innecesario en un motor nuevo, el técnico mediremos el consumo eléctrico (amperaje), el estado del capacitor de arranque, el presostato/flujostato y los rodamientos mecánicos.',
        recommendation: 'Diagnóstico Técnico en Domicilio',
        details: ['Verificación de componentes eléctricos y desgaste.', 'Prueba hidráulica de sensores de arranque.', 'Si realizás la reparación o cambio con nosotros, la visita se bonifica $0.'],
      }
    }

    if (problem === 'tanque_lento') {
      return {
        title: 'Llenado inteligente de tanque (Elevadora)',
        desc: 'Sugerimos un sistema elevador inteligente (ej. tipo Rowa Inteligente 20). Sin embargo, el caudal real de entrada de la red pública y la altura geométrica de tu casa deben ser verificados por un profesional para garantizar que el motor no trabaje en seco y evitar daños.',
        recommendation: 'Bomba Elevadora (A verificar caudal de red)',
        details: ['Cálculo de altura geométrica y fricción de tuberías.', 'Medición de presión de entrada de red de agua.', 'El costo de la visita técnica se descuenta del total del trabajo.'],
      }
    }

    if (problem === 'agua_caliente') {
      return {
        title: 'Presurización puntual bajo termotanque/calefón',
        desc: 'Sugerimos una presurizadora de flujo bajo calefón (ej. tipo SFL 9 o 14). No obstante, si la serpentina del calefón está tapada por sarro, la bomba no se activará o podría dañarse. Es indispensable que un técnico evalúe la obstrucción real antes de instalar.',
        recommendation: 'Línea de Flujo SFL (A confirmar obstrucción)',
        details: ['Medición de caudal mínimo de activación en canillas.', 'Verificación de estado interno del calentador.', 'La visita se bonifica en tu factura si avanzás con la instalación.'],
      }
    }

    // poca_presion general
    if (plants === '2_plantas' || showers === '2_duchas' || showers === '3_mas') {
      return {
        title: 'Presurización general (Viviendas múltiples plantas)',
        desc: 'Sugerimos un presurizador general (ej. tipo Tango Press 20 o Max Press). Sin embargo, la presión constante somete a las tuberías antiguas a un esfuerzo continuo. Es crítico evaluar la resistencia de tus caños empotrados antes para evitar fugas invisibles.',
        recommendation: 'Presurizador de Presión (Sujeto a estanqueidad)',
        details: ['Evaluación preventiva de resistencia de cañerías viejas.', 'Cálculo de caudal simultáneo necesario para tus baños.', 'La visita técnica de diagnóstico se descuenta al realizar la obra.'],
      }
    }

    return {
      title: 'Presurización general (Vivienda planta baja / PH)',
      desc: 'Sugerimos un equipo compacto de flujo o presión (ej. tipo Tango SFL o Press 20). Pero si tus cañerías son muy antiguas o de plomo, el tipo de presurización incorrecto puede fisurar los codos. Un técnico debe diagnosticar la fragilidad hidráulica primero.',
      recommendation: 'Presurizador Compacto (Sujeto a tipo de caño)',
      details: ['Inspección del material de la cañería (plomo, bronce, fusión).', 'Medición de caudal y presión de confort adecuada.', 'El pago de la visita técnica se bonifica al contratar el servicio.'],
    }
  }

  const buildWhatsAppLink = () => {
    const pLabel = STEPS[0].options.find((o) => o.id === answers.problem)?.label || ''
    const plLabel = STEPS[1].options.find((o) => o.id === answers.plants)?.label || ''
    const sLabel = STEPS[2].options.find((o) => o.id === answers.showers)?.label || ''
    
    let text = `¡Hola ${BUSINESS.name}! Hice la consulta en el Asesor de la Web:\n`
    text += `- Problema: ${pLabel}\n`
    if (answers.problem !== 'bomba_falla' && answers.problem !== 'tanque_lento') {
      text += `- Estructura: ${plLabel}\n`
      text += `- Duchas: ${sLabel}\n`
    }
    text += `Quiero coordinar la visita técnica a domicilio para que midan presión y me den el presupuesto exacto.`
    
    return waLink(text)
  }

  const currentStepData = STEPS[step]
  const rec = step === STEPS.length ? getRecommendation() : null

  return (
    <section id="asesor" className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 tech-grid opacity-55" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua-500/40 to-transparent" />
      <div className="pointer-events-none absolute -left-1/4 top-1/4 h-[30rem] w-[30rem] rounded-full bg-aqua-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-1/4 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-aqua-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          dark
          center
          eyebrow="Asesoramiento sin cargo"
          title="¿Qué bomba necesita tu casa?"
          description="Respondé estas preguntas rápidas para entender tu situación técnica. No vendemos humo: te asesoramos con la verdad antes de ir a tu casa."
        />

        <div className="mt-12 flex items-center justify-between px-2 sm:px-8">
          {[...STEPS, { title: 'Resultado' }].map((s, idx) => {
            const isActive = idx <= step
            const isCurrent = idx === step
            return (
              <div key={idx} className="flex flex-1 items-center last:flex-none">
                <div className="relative flex flex-col items-center">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 ${
                      isCurrent
                        ? 'border-aqua-400 bg-aqua-500 text-ink-950 ring-4 ring-aqua-500/20'
                        : isActive
                        ? 'border-aqua-500 bg-aqua-500/20 text-aqua-300'
                        : 'border-white/10 bg-ink-900 text-white/40'
                    }`}
                  >
                    {idx === STEPS.length ? (
                      <IconCheck className="h-4 w-4" />
                    ) : (
                      idx + 1
                    )}
                  </div>
                  <span
                    className={`absolute top-10 hidden text-[11px] font-semibold tracking-tight sm:block ${
                      isCurrent ? 'text-aqua-300 font-bold' : isActive ? 'text-white/80' : 'text-white/30'
                    }`}
                  >
                    {idx === STEPS.length ? 'Resultado' : `Paso ${idx + 1}`}
                  </span>
                </div>
                {idx < STEPS.length && (
                  <div
                    className={`h-0.5 w-full mx-2 transition-all duration-300 ${
                      idx < step ? 'bg-aqua-500' : 'bg-white/10'
                    }`}
                  />
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-10 aqua-glow">
          <AnimatePresence mode="wait">
            {step < STEPS.length ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                    {currentStepData.title}
                  </h3>
                  {step > 0 && (
                    <button
                      onClick={goBack}
                      className="flex items-center gap-1 text-xs font-semibold text-white/50 hover:text-aqua-300"
                    >
                      <IconChevron className="h-4 w-4 rotate-90" />
                      Volver
                    </button>
                  )}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  {currentStepData.options.map((opt) => {
                    const isSelected = answers[currentStepData.key] === opt.id
                    const OptIcon = opt.icon

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect(currentStepData.key, opt.id)}
                        className={`group relative flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 hover:border-aqua-400/40 hover:bg-white/[0.02] ${
                          isSelected
                            ? 'border-aqua-400 bg-aqua-500/10 ring-1 ring-aqua-400'
                            : 'border-white/10 bg-transparent'
                        }`}
                      >
                        {OptIcon && (
                          <span
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                              isSelected ? 'bg-aqua-500 text-ink-950' : 'bg-white/5 text-aqua-300 group-hover:bg-aqua-500/15'
                            }`}
                          >
                            <OptIcon className="h-5 w-5" />
                          </span>
                        )}
                        <div>
                          <h4
                            className={`font-display text-base font-bold transition-colors ${
                              isSelected ? 'text-aqua-300' : 'text-white'
                            }`}
                          >
                            {opt.label}
                          </h4>
                          {opt.desc && (
                            <p className="mt-1 text-xs leading-relaxed text-white/50">
                              {opt.desc}
                            </p>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="border-b border-white/5 pb-4 text-center sm:text-left">
                  <span className="inline-block rounded-full bg-aqua-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-aqua-300 ring-1 ring-inset ring-aqua-400/30">
                    Pre-Diagnóstico Preliminar
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-black text-white">
                    {rec.title}
                  </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-5">
                  <div className="md:col-span-3 space-y-4">
                    <p className="text-sm leading-relaxed text-white/70">
                      {rec.desc}
                    </p>

                    {/* Alerta crítica: por qué es obligatoria la visita y por qué no hay que comprar a ciegas */}
                    <div className="rounded-2xl border border-signal-500/35 bg-signal-500/5 p-4">
                      <div className="flex items-center gap-2 text-signal-400">
                        <span className="h-2 w-2 rounded-full bg-signal-400 animate-pulse" />
                        <span className="text-xs font-extrabold uppercase tracking-wider">
                          ¡Atención! Evitá un error costoso
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/75">
                        La presión de agua <strong>no se estima por internet: se mide físicamente.</strong> Comprar una bomba en base a una estimación teórica puede provocar que revientes caños antiguos dentro de las paredes o que el equipo falle y anule su garantía de fábrica. Exigí siempre una medición real a domicilio.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/5 bg-ink-900/60 p-4">
                      <div className="flex items-center gap-2.5 text-aqua-300">
                        <IconShield className="h-5 w-5 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          Transparencia en el diagnóstico
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/55">
                        El costo de la visita técnica ({BUSINESS.visitCost}) es para cubrir el diagnóstico físico con manómetro y caudalímetro. <strong>Si decidís hacer el trabajo con nosotros, te descontamos el 100% de la visita en la factura final.</strong>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-aqua-500/20 bg-aqua-500/[0.02] p-5 md:col-span-2">
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-aqua-300">
                      Sugerencia de Equipo
                    </h4>
                    <div className="mt-2 font-display text-lg font-extrabold text-white leading-tight">
                      {rec.recommendation}
                    </div>

                    <ul className="mt-4 space-y-2.5">
                      {rec.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-white/70">
                          <IconCheck className="h-4 w-4 shrink-0 text-aqua-400 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-white/5 sm:flex-row justify-between items-center">
                  <button
                    onClick={reset}
                    className="text-xs font-bold text-white/55 hover:text-aqua-300 transition-colors"
                  >
                    🔄 Volver a empezar
                  </button>

                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-[1.03]"
                  >
                    <IconWhatsApp className="h-5 w-5" />
                    Agendar medición y presupuesto exacto
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
