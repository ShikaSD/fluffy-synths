import { AudioInOut } from '../base'

export default class FilterNode extends AudioInOut {
  constructor(params) {
    super()

    this._node = this.context.createBiquadFilter()

    this._input = this._node
    this._output = this._node

    this._params = Object.assign(params, {
      frequency: 0.1,
      type: 'highpass',
      resonance: 1
    })

    this._updateParams()
  }
  _updateParams() {
    this._node.Q.exponentialRampToValueAtTime(this._params.resonance, this.context.currentTime + 0.1)
    this._node.frequency.exponentialRampToValueAtTime(this._params.frequency, this.context.currentTime + 0.1)
    this._node.type = this._params.type
  }
}
