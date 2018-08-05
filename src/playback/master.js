import { AudioIn } from './base'

export default class MasterNode extends AudioIn {
  constructor() {
    super()

    this._gainNode = this.context.createGain()
    this._analyzer = this.context.createAnalyser()
    this._gainNode.connect(this._analyzer)
    this._analyzer.connect(this.context.destination)

    this._input = this._gainNode

    this._params = {
      volume: 1.0
    }
    this._updateParams()
  }
  analyzer() {
    return this._analyzer
  }
  _updateParams() {
    this._gainNode.gain.value = this._params.volume
  }
}
