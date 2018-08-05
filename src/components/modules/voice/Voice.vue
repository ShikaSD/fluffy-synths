<template>
  <div class="voice">
    <oscillator :id="id"/>
    <adsr-filter :id="id"/>
    <volume :id="id" />
    <detune :id="id" />
  </div>
</template>

<script>
import { add } from '../../../playback'
import Oscillator from './Oscillator.vue'
import AdsrFilter from './AdsrFilter.vue'
import Volume from './Volume.vue'
import Detune from './Detune.vue'
import Voice from '../../../playback/voice'
import store from '../../../store'

export default {
  props: ['id'],
  components: {
    Oscillator,
    AdsrFilter,
    Volume,
    Detune
  },
  created() {
    add(this.id, new Voice())
    store.state.inputs.push(this.id)
  },
  destroyed() {
  }
}
</script>
