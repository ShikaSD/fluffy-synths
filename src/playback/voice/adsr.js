import { AudioInOut } from '../base'

export const MIN_ADSR_VALUE = 1e-20

export default class AdsrNode extends AudioInOut {
  constructor(params) {
    super()

    this._node = this.context.createGain()

    this._node.gain.value = MIN_ADSR_VALUE
    this._node.gain.linearRampToValueAtTime(1.0, this.context.currentTime + params.attack)
    this._node.gain.linearRampToValueAtTime(params.sustain, this.context.currentTime + params.attack + params.decay)

    this._input = this._node
    this._output = this._node

    this._params = params
  }
  /**
   * @returns time to delay next node
   */
  stop(time) {
    time = Math.max(MIN_ADSR_VALUE, time)
    const endTime = time + this._params.release
    this._node.gain.cancelAndHoldAtTime(time)
    this._node.gain.linearRampToValueAtTime(MIN_ADSR_VALUE, endTime)
    return endTime
  }
}
