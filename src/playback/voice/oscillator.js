import { AudioOut } from '../base.js'

export default class OscillatorNode extends AudioOut {
  constructor(params) {
    super()

    this._oscillator = this.context.createOscillator()
    this._oscillator.start()

    this._output = this._oscillator

    this._params = Object.assign({
      type: 'sine',
      frequency: 440,
      detune: 0.0
    }, params)
    this._updateParams()
  }

  stop(time) {
    this._oscillator.stop(time)
  }

  _updateParams() {
    this._oscillator.type = this._params.type
    this._oscillator.frequency.value = this._params.frequency
    this._oscillator.detune.value = this._params.detune
  }
}
