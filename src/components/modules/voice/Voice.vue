<template>
  <div class="voice">
    <oscillator :id="id"/>
    <adsr :id="id"/>
    <biquad-filter :id="id" />
    <volume :id="id" />
    <detune :id="id" />
  </div>
</template>

<script>
import { add } from '../../../playback'
import Oscillator from './Oscillator.vue'
import Adsr from './Adsr.vue'
import Volume from './Volume.vue'
import Detune from './Detune.vue'
import BiquadFilter from './Filter.vue'
import Voice from '../../../playback/voice'
import store from '../../../store'

export default {
  props: ['id'],
  components: {
    Oscillator,
    Adsr,
    Volume,
    Detune,
    BiquadFilter
  },
  created() {
    add(this.id, new Voice())
    store.state.inputs.push(this.id)
  },
  destroyed() {
  }
}
</script>
