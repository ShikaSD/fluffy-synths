import { AudioInOut } from '../base.js'

export default class Volume extends AudioInOut {
  constructor() {
    super()

    this._node = this.context.createGain()

    this._input = this._node
    this._output = this._node

    this._params = {
      volume: 1.0
    }
    this._updateParams()
  }
  _updateParams() {
    this._node.gain.value = this._params.volume
  }
}
