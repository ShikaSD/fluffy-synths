import { AudioInOut } from '../base'

export default class FilterNode extends AudioInOut {
  constructor(params) {
    super()

    this._node = this.context.createBiquadFilter()

    this._input = this._node
    this._output = this._node

    this._params = Object.assign({
      frequency: 440,
      type: 'lowpass'
    }, params)

    this._updateParams()
  }
  _updateParams() {
    console.log(this._params)
    this._node.frequency.exponentialRampToValueAtTime(this._params.frequency, this.context.currentTime + 0.1)
    this._node.type = this._params.type
  }
}
