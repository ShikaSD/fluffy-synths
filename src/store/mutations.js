import { node } from '../playback'

export default {
  playNote(state, freq) {
    state.inputs.forEach(id => node(id).playNote(freq))
  },
  stopNote(state, freq) {
    state.inputs.forEach(id => node(id).stopNote(freq))
  },
  adsr(state, vm) {
    node(vm.id).params({
      adsr: {
        attack: vm.attack * 0.01 * 3 + 1e-30,
        decay: vm.decay * 0.01 * 3 + 1e-30,
        sustain: vm.sustain * 0.01 + 1e-30,
        release: vm.release * 0.01 * 3 + 1e-30
      }
    })
  },
  osc(state, vm) {
    node(vm.id).params({
      oscillator: {
        type: vm.type
      }
    })
  },
  volume(state, vm) {
    node(vm.id).params({
      volume: vm.volume * 0.01
    })
  },
  detune(state, vm) {
    console.log(vm.detune, (vm.detune * 0.01 - 0.5) * 1200)
    node(vm.id).params({
      oscillator: {
        detune: (vm.detune * 0.01 - 0.5) * 2400
      }
    })
  }
}
