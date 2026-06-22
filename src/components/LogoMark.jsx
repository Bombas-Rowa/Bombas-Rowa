// Isologo de Hidrorescate: un salvavidas (rescate) con una gota de agua
// en el centro. Concepto: "te rescatamos del agua". No genérico.
export default function LogoMark({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Salvavidas: anillo segmentado (4 tramos) */}
      <circle
        cx="20"
        cy="20"
        r="13.5"
        stroke="#21c3ee"
        strokeWidth="5"
        strokeDasharray="14.5 6.7"
        strokeLinecap="round"
        transform="rotate(24 20 20)"
      />
      {/* Gota de agua en el centro */}
      <path
        d="M20 12.2c2.6 2.9 4.1 5.3 4.1 7.4a4.1 4.1 0 1 1-8.2 0c0-2.1 1.5-4.5 4.1-7.4Z"
        fill="#ffffff"
      />
      <path
        d="M18 19.9a2 2 0 0 0 2 2"
        stroke="#0a1929"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}
