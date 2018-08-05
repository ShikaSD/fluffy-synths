const A4_FREQ = 440
const SEMI_TONES_IN_OCTAVE = 12
const BASE_OCTAVE = 4

export default function(noteConfig, octave) {
  const semiTones = (octave + noteConfig.relativeOctave - BASE_OCTAVE) * SEMI_TONES_IN_OCTAVE + noteConfig.semiTones
  const freq = A4_FREQ * Math.pow(2, semiTones / 12)
  return freq
}
