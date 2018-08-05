<template>
  <div class="volume">
    <label for="volume">Volume</label>
    <input type="range" min="0" max="100" v-model="volume" />
  </div>
</template>

<script>
import store from '../../../store'

export default {
  props: ['id'],
  data() {
    return {
      volume: 100
    }
  },
  watch: {
    volume(newVolume) {
      store.commit('volume', this)
    }
  }
}
</script>
