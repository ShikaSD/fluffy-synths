import { AudioOut } from '../base'
import OscillatorNode from './oscillator.js'
import AdsrNode from './adsr'
import Volume from './volume'
import FilterNode from './filter'

export default class Voice extends AudioOut {
  constructor(params) {
    super()

    this._params = Object.assign({
      volume: 1.0,
      oscillator: {
        type: 'sine',
        frequency: 440
      },
      adsr: {
        attack: 1e-30,
        sustain: 1.0,
        decay: 1e-30,
        release: 1e-30
      },
      filter: {
        type: 'highpass',
        frequency: 440
      }
    }, params)

    this._filter = new FilterNode(this._params.filter)
    this._volume = new Volume()

    this._filter.output().connect(this._volume.input())

    this._voices = new Map()
    this._updateParams()

    this._output = this._volume.output()
  }
  /**
   * @param {number} frequency 
   */
  playNote(frequency) {
    if (this._voices.get(frequency)) return

    const osc = new OscillatorNode(Object.assign(this._params.oscillator, {
      frequency: frequency
    }))
    const adsr = new AdsrNode(this._params.adsr)
    osc.output().connect(adsr.input())
    adsr.output().connect(this._filter.input())

    this._voices.set(frequency, {
      oscillator: osc,
      adsr: adsr
    })
  }
  /**
   * @param {number} frequency 
   * @param {number} atTime 
   */
  stopNote(frequency) {
    const voice = this._voices.get(frequency)
    if (!voice) return

    const osc = voice.oscillator
    const adsr = voice.adsr

    const oscStop = adsr.stop(this.context.currentTime)
    osc.stop(oscStop + 1)
    osc.output().onended = function () { 
      adsr.output().disconnect()
      osc.output().disconnect()
    }

    this._voices.delete(frequency)
  }
  params(params) {
    const oscillator = Object.assign(this._params.oscillator, params.oscillator)
    const adsr = Object.assign(this._params.adsr, params.adsr)
    const filter = Object.assign(this._params.filter, params.filter)

    this._params = Object.assign(this._params, params)
    this._params.adsr = adsr
    this._params.oscillator = oscillator
    this._params.filter = filter

    this._updateParams()
  }
  _updateParams() {
    this._volume.params(this._params)
    this._filter.params(this._params.filter)
  }
}
