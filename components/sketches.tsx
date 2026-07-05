/**
 * Hand-drawn margin illustrations, in the spirit of belardi.che.utexas.edu.
 * All stroke-based so they inherit `currentColor` — tint them with text-* utilities.
 */

type SketchProps = {
  className?: string
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

const labelProps = {
  fill: 'currentColor',
  stroke: 'none',
  fontFamily: 'var(--font-geist-mono)',
} as const

/** Skeletal structure of glyme (DME), a battery electrolyte solvent */
export function MoleculeSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 140 90" aria-hidden="true" className={className}>
      <g {...strokeProps}>
        <path d="M10 62 Q 17 56 27 48" />
        <path d="M41 48 Q 49 54 58 60" />
        <path d="M58 60 Q 70 49 82 40" />
        <path d="M82 40 Q 90 46 99 52" />
        <path d="M113 52 Q 121 44 130 38" />
      </g>
      <text {...labelProps} x="34" y="46" fontSize="12" textAnchor="middle">
        O
      </text>
      <text {...labelProps} x="106" y="62" fontSize="12" textAnchor="middle">
        O
      </text>
      <text {...labelProps} x="70" y="84" fontSize="9" textAnchor="middle">
        glyme
      </text>
    </svg>
  )
}

/** A cylindrical battery cell with a spark */
export function BatterySketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 95 130" aria-hidden="true" className={className}>
      <g {...strokeProps}>
        <path d="M37 17 L37 10 Q 45 6 53 10 L53 17" />
        <path d="M20 24 Q 45 12 70 24" />
        <path d="M20 24 Q 44 35 70 24" />
        <path d="M20 24 Q 18 62 19 100" />
        <path d="M70 24 Q 72 62 71 100" />
        <path d="M19 100 Q 45 114 71 100" />
        <path d="M20 46 Q 45 55 70 46" />
        <path d="M84 40 L 76 56 L 83 56 L 74 74" />
      </g>
      <text {...labelProps} x="62" y="12" fontSize="11">
        +
      </text>
      <text {...labelProps} x="76" y="110" fontSize="12">
        −
      </text>
    </svg>
  )
}

/** A lithium ion surrounded by its solvation shell */
export function LithiumIonSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 130 135" aria-hidden="true" className={className}>
      <g {...strokeProps}>
        <path d="M52 65 Q 51 52 65 51 Q 79 51 78 65 Q 79 79 65 78 Q 52 79 52 65" />
        <circle cx="65" cy="65" r="40" strokeDasharray="4 6" />
        <circle cx="65" cy="22" r="4.5" />
        <path d="M65 27 L 65 34" />
        <circle cx="24" cy="53" r="4.5" />
        <path d="M28 55 L 36 58" />
        <circle cx="38" cy="99" r="4.5" />
        <path d="M42 96 L 48 90" />
        <circle cx="93" cy="97" r="4.5" />
        <path d="M90 93 L 84 87" />
        <circle cx="104" cy="47" r="4.5" />
        <path d="M100 49 L 92 53" />
      </g>
      <text {...labelProps} x="65" y="69" fontSize="11" textAnchor="middle">
        Li⁺
      </text>
      <text {...labelProps} x="65" y="128" fontSize="9" textAnchor="middle">
        solvation shell
      </text>
    </svg>
  )
}

/** Saturn with a few stars */
export function SaturnSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 130 100" aria-hidden="true" className={className}>
      <g {...strokeProps}>
        <path d="M38 42 Q 40 27 58 26 Q 78 25 82 43 Q 85 62 64 66 Q 42 68 38 42" />
        <path d="M18 60 Q 60 82 104 42" />
        <path d="M18 60 Q 12 54 24 48" />
        <path d="M92 30 Q 100 33 104 42" />
        <path d="M52 40 Q 57 36 62 40" />
        <path d="M62 54 Q 66 51 70 54" />
        <path d="M14 16 L 14 26 M 9 21 L 19 21" />
        <path d="M112 74 L 112 82 M 108 78 L 116 78" />
        <path d="M100 10 L 100 18 M 96 14 L 104 14" />
      </g>
    </svg>
  )
}

/** A planet orbiting a star */
export function OrbitSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 155 95" aria-hidden="true" className={className}>
      <g {...strokeProps}>
        <path
          d="M16 47 Q 17 16 78 15 Q 140 16 140 47 Q 139 76 78 76 Q 16 75 16 47"
          strokeDasharray="5 6"
        />
        <circle cx="52" cy="46" r="8" />
        <path d="M52 32 L 52 27 M 52 60 L 52 65 M 38 46 L 33 46 M 66 46 L 71 46" />
        <path d="M42 36 L 39 33 M 62 36 L 65 33 M 42 56 L 39 59 M 62 56 L 65 59" />
        <circle cx="139" cy="40" r="5" />
        <path d="M136 26 Q 141 29 141 33 M 141 33 L 137 32 M 141 33 L 143 29" />
      </g>
    </svg>
  )
}

/** An Erlenmeyer flask with bubbles */
export function FlaskSketch({ className }: SketchProps) {
  return (
    <svg viewBox="0 0 90 112" aria-hidden="true" className={className}>
      <g {...strokeProps}>
        <path d="M32 8 Q 45 4 58 8" />
        <path d="M36 8 L 36 34 Q 30 60 14 92" />
        <path d="M54 8 L 54 34 Q 60 60 76 92" />
        <path d="M14 92 Q 45 106 76 92" />
        <path d="M26 70 Q 45 78 64 70" />
        <circle cx="38" cy="85" r="3" />
        <circle cx="52" cy="88" r="2.5" />
        <circle cx="46" cy="77" r="2" />
      </g>
    </svg>
  )
}
