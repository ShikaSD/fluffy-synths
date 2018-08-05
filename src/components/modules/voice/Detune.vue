<template>
  <div class="detune">
    <label for="detune">Detune</label>
    <input type="range" min="0" max="100" v-model="detune" />
  </div>
</template>

<script>
import store from '../../../store'

export default {
  props: ['id'],
  data() {
    return {
      detune: 50
    }
  },
  watch: {
    detune(value) {
      store.commit('detune', this)
    }
  }
}
</script>
