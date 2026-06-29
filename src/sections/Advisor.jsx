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
  IconRotate,
  IconAlert,
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
        title: 'Ficha de Inspección: Diagnóstico de Equipo Existente',
        desc: 'Tu presurizador o bomba actual presenta fallas. No compres un motor nuevo a ciegas: un diagnóstico físico profesional permitirá evaluar si es reparable, si requiere un capacitor de arranque nuevo, o si es indispensable su reemplazo.',
        recommendation: 'Rango: Diagnóstico Mecánico / Eléctrico',
        details: ['Medición de bobinado y capacitor de arranque.', 'Evaluación del presostato/flujostato detector.', 'Prueba hidráulica de estanqueidad.'],
      }
    }

    if (problem === 'tanque_lento') {
      return {
        title: 'Ficha de Inspección: Sistema de Llenado (Elevación)',
        desc: 'Se pre-diagnostica la necesidad de un sistema elevador (rango 0.5 a 1.0 HP). No obstante, es mandatorio verificar el caudal real de entrada de la red pública y la altura geométrica de tu casa antes de comprar o instalar para evitar que el motor trabaje en seco.',
        recommendation: 'Rango: Elevadora Inteligente (0.5 a 1.0 HP)',
        details: ['Medición de caudal de entrada en L/min.', 'Cálculo de altura geométrica y pérdida por fricción.', 'Control de presión dinámica en cañería de subida.'],
      }
    }

    if (problem === 'agua_caliente') {
      return {
        title: 'Ficha de Inspección: Presurización de Agua Caliente',
        desc: 'Se pre-diagnostica la necesidad de un presurizador de flujo en la línea caliente (rango compacto). Sin embargo, si la serpentina del calefón está tapada por sarro, la bomba no encenderá o se quemará. Debemos medir el caudal de activación en ducha.',
        recommendation: 'Rango: Presurizador de Flujo Compacto',
        details: ['Medición de caudal mínimo de activación en ducha.', 'Verificación de obstrucción interna (sarro) en el calentador.', 'Control de temperatura de salida para proteger sensores.'],
      }
    }

    // poca_presion general
    if (plants === '2_plantas' || showers === '2_duchas' || showers === '3_mas') {
      return {
        title: 'Ficha de Inspección: Presurización General Alta Demanda',
        desc: 'Se pre-diagnostica un presurizador general de mediana/alta potencia. La presión constante somete a las tuberías antiguas a un esfuerzo continuo. Es crítico evaluar la resistencia de tus caños empotrados mediante prueba de estanqueidad antes de instalar.',
        recommendation: 'Rango: Presurizador General (Tango o similar)',
        details: ['Prueba hidráulica de resistencia en cañerías viejas.', 'Cálculo de caudal simultáneo para baños y cocina.', 'Medición de presión de confort ideal para griferías monocomando.'],
      }
    }

    return {
      title: 'Ficha de Inspección: Presurización General Estándar',
      desc: 'Se pre-diagnostica un presurizador general de flujo o presión. Si las cañerías son muy antiguas o de plomo/bronce, el tipo de presurización incorrecto puede fisurar los codos de las paredes. Es obligatorio que el técnico verifique el material hidráulico.',
      recommendation: 'Rango: Presurizador de Flujo o Presión',
      details: ['Inspección ocular del material (plomo, latón, termofusión).', 'Prueba de fugas invisibles (hermeticidad de la instalación).', 'Control de válvulas de retención existentes.'],
    }
  }

  const buildWhatsAppLink = () => {
    const pLabel = STEPS[0].options.find((o) => o.id === answers.problem)?.label || ''
    const plLabel = STEPS[1].options.find((o) => o.id === answers.plants)?.label || ''
    const sLabel = STEPS[2].options.find((o) => o.id === answers.showers)?.label || ''
    
    // Generar un código semi-aleatorio basado en las respuestas para darle aspecto formal
    const codeId = `${answers.problem ? answers.problem.substring(0,3).toUpperCase() : 'GEN'}-${answers.plants ? answers.plants.charAt(0).toUpperCase() : 'X'}${answers.showers ? answers.showers.charAt(0).toUpperCase() : 'X'}`

    let text = `¡Hola ${BUSINESS.name}! Completé el pre-diagnóstico técnico en la web y quiero agendar la visita a domicilio.\n\n`
    text += `📋 *REPORTE PRELIMINAR #${codeId}*\n`
    text += `- Problema: ${pLabel}\n`
    if (answers.problem !== 'bomba_falla' && answers.problem !== 'tanque_lento') {
      text += `- Estructura: ${plLabel}\n`
      text += `- Duchas simultáneas: ${sLabel}\n`
    }
    text += `\nSolicito coordinar la visita técnica de diagnóstico físico a domicilio (${BUSINESS.visitCost}) para medir presión/caudal real y validar la instalación.`
    
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
          eyebrow="Pre-Diagnóstico Virtual"
          title="¿Qué bomba necesita tu casa?"
          description="Respondé estas preguntas rápidas para generar tu ficha técnica preliminar y coordinar la validación física con nuestro especialista."
        />

        {/* Barra de progreso segmentada */}
        <div className="mt-12 space-y-4">
          <div className="flex gap-2.5">
            {[...Array(STEPS.length + 1)].map((_, idx) => {
              const isActive = idx <= step
              const isCurrent = idx === step
              return (
                <div
                  key={idx}
                  className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                >
                  <motion.div
                    className={`absolute inset-0 rounded-full ${
                      isCurrent
                        ? 'bg-gradient-to-r from-aqua-500 to-aqua-300'
                        : 'bg-aqua-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                  {isCurrent && (
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </div>
              )
            })}
          </div>
          
          {/* Etiqueta de estado unificada */}
          <div className="h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                <span className="font-mono text-xs font-extrabold uppercase tracking-[0.25em] text-aqua-400">
                  {step === STEPS.length ? (
                    'Ficha Técnica Generada'
                  ) : (
                    `Paso ${step + 1} de ${STEPS.length} · ${
                      step === 0
                        ? 'Diagnóstico del Problema'
                        : step === 1
                        ? 'Estructura de la Vivienda'
                        : 'Uso de Agua Caliente/Sanitaria'
                    }`
                  )}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-10 aqua-glow">
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
                <div className="flex flex-col items-center justify-between border-b border-white/5 pb-5 sm:flex-row gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-signal-500/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-signal-400 ring-1 ring-inset ring-signal-500/35 animate-pulse">
                        <IconAlert className="h-3.5 w-3.5" />
                        Ficha Técnica Preliminar
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/55">
                        Estado: Requiere Validación Física
                      </span>
                    </div>
                    <h3 className="mt-3 text-center sm:text-left font-display text-2xl font-black text-white">
                      {rec.title}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-5">
                  <div className="md:col-span-3 space-y-4">
                    <p className="text-sm leading-relaxed text-white/70">
                      {rec.desc}
                    </p>

                    {/* Relevamientos obligatorios con instrumental técnico */}
                    <div className="rounded-2xl border border-white/5 bg-ink-900/40 p-5 space-y-4">
                      <h4 className="font-display text-xs font-extrabold uppercase tracking-widest text-aqua-300">
                        🔍 Mediciones requeridas en domicilio
                      </h4>
                      <div className="grid gap-3.5 sm:grid-cols-2">
                        <div className="flex items-start gap-3 rounded-xl border border-white/[0.03] bg-white/[0.01] p-3">
                          <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border border-signal-500/50 bg-signal-500/10 text-signal-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-signal-400 animate-pulse" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">Presión Estática (Manómetro)</h5>
                            <p className="mt-0.5 text-[11px] text-white/40 leading-relaxed">
                              Medición de bares reales para evitar sobre-presión que rompa cañerías antiguas o codos empotrados.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 rounded-xl border border-white/[0.03] bg-white/[0.01] p-3">
                          <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border border-signal-500/50 bg-signal-500/10 text-signal-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-signal-400 animate-pulse" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">Caudal de Red (Caudalímetro)</h5>
                            <p className="mt-0.5 text-[11px] text-white/40 leading-relaxed">
                              Medición de litros/minuto para certificar que el motor no trabaje en seco y se termine quemando.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl border border-white/[0.03] bg-white/[0.01] p-3">
                          <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border border-signal-500/50 bg-signal-500/10 text-signal-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-signal-400 animate-pulse" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">Prueba de Hermeticidad</h5>
                            <p className="mt-0.5 text-[11px] text-white/40 leading-relaxed">
                              Detección de micro-fugas en griferías o válvulas que hagan arrancar la bomba sola y desgasten el motor.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl border border-white/[0.03] bg-white/[0.01] p-3">
                          <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border border-signal-500/50 bg-signal-500/10 text-signal-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-signal-400 animate-pulse" />
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">Chequeo Eléctrico (Amperaje)</h5>
                            <p className="mt-0.5 text-[11px] text-white/40 leading-relaxed">
                              Verificación de sección de cable y amperaje máximo para evitar sobrecalentamiento y cortocircuitos.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/5 bg-ink-900/60 p-4">
                      <div className="flex items-center gap-2.5 text-aqua-300">
                        <IconShield className="h-5 w-5 shrink-0" />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          Reembolso de la Visita Técnica
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-white/55">
                        El costo de la visita técnica ({BUSINESS.visitCost}) cubre el traslado y las mediciones con instrumental. <strong>Si decidís avanzar con el trabajo, te descontamos el 100% de la visita en la factura final.</strong> Te termina saliendo gratis.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-aqua-500/20 bg-aqua-500/[0.02] p-5 md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-aqua-400" />
                        <h4 className="font-display text-xs font-extrabold uppercase tracking-wider text-aqua-300">
                          Rango de Equipamiento Estimado
                        </h4>
                      </div>
                      <div className="mt-2.5 font-display text-lg font-extrabold text-white leading-tight">
                        {rec.recommendation}
                      </div>
                      <p className="mt-2 text-[11px] leading-relaxed text-white/40 italic">
                        *Sujeto a confirmación por el especialista. No recomendado para compra directa sin antes auditar la instalación.*
                      </p>

                      <div className="mt-5 border-t border-white/5 pt-4">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-aqua-400">
                          Tareas a realizar por el técnico:
                        </span>
                        <ul className="mt-2 space-y-2.5">
                          {rec.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-white/70">
                              <IconCheck className="h-4 w-4 shrink-0 text-aqua-400 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-4 border-t border-white/5 sm:flex-row justify-between items-center">
                  <button
                    onClick={reset}
                    className="flex items-center gap-2 text-xs font-bold text-white/50 hover:text-aqua-300 transition-colors order-2 sm:order-1"
                  >
                    <IconRotate className="h-4 w-4" />
                    Volver a empezar
                  </button>

                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-whatsapp px-6 py-4 text-sm font-bold text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-[1.02] order-1 sm:order-2"
                  >
                    <IconWhatsApp className="h-5 w-5" />
                    Agendar Visita de Validación Física ({BUSINESS.visitCost})
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
