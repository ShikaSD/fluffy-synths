const audioContext = new AudioContext()

export class AudioBase {
  constructor() {
    this.context = audioContext
    this._params = {}
  }
  params(params) {
    this._params = Object.assign(this._params, params)
    this._updateParams()
  }
  _updateParams() { }
}

export class AudioOut extends AudioBase {
  constructor() {
    super()

    this._output = null
  }

  /**
   * @returns {AudioNode} output node
   */
  output() {
    return this._output
  }
}

export class AudioIn extends AudioBase {
  constructor() {
    super()

    this._input = null
  }

  /**
   * @returns {AudioNode} input node
   */
  input() {
    return this._input
  }
}

export class AudioInOut extends AudioOut {
  constructor() {
    super()

    this._input = null
    this._output = null
  }

  /**
   * @returns {AudioNode} input node
   */
  input() {
    return this._input
  }

  /**
   * @returns {AudioNode} output node
   */
  output() {
    return this._output
  }
}
