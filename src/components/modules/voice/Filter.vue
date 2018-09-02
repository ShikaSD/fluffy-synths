<template>
  <div class="filter">
    <select name="type" v-model="type">
      <option>highpass</option>
      <option>lowpass</option>
    </select>
    <input name="frequency" type="range" min="0" max="40" v-model="frequency"/>
  </div>
</template>

<script>
import store from '../../../store'

export default {
  props: ['id'],
  data() {
    return {
      type: 'lowpass',
      frequency: 9
    }
  },
  watch: {
    type: function (type) {
      store.commit('filter', this)
    },
    frequency: function (frequency) {
      store.commit('filter', this)
    }
  }
}
</script>

<style>

</style>
