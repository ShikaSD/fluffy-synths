<template>
  <div class="oscillator">
    <select v-model="type">
      <option value="sine">sine</option>
      <option value="sawtooth">sawtooth</option>
      <option value="square">square</option>
      <option value="triangle">triangle</option>
    </select>
  </div>
</template>

<script>
import store from '../../../store'

export default {
  props: ['id'],
  data() {
    return {
      type: 'sine'
    }
  },
  watch: {
    type: function(newType) {
      store.commit('osc', this)
    }
  }
}
</script>
