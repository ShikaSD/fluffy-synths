<template>
<div class="adsr">
  <div class="input">
    <label for="attack">Attack</label>
    <input name="attack" type="range" min="0" max="100" v-model="attack"/>
  </div>

  <div class="input">
    <label for="decay">Decay</label>
    <input name="decay" type="range" min="0" max="100" v-model="decay"/>
  </div>

  <div class="input">
    <label for="sustain">Sustain</label>
    <input name="sustain" type="range" min="0" max="100" v-model="sustain"/>
  </div>

  <div class="input"> 
    <label for="release">Release</label>
    <input name="release" type="range" min="0" max="100" v-model="release"/>
  </div>

</div>
</template>

<script>
import store from '../../../store'

export default {
  props: ['id'],
  data() {
    return {
      attack: 0,
      decay: 0,
      sustain: 100,
      release: 0
    }
  },
  watch: {
    attack: function(attack) {
      store.commit('adsr', this)
    },
    decay: function(decay) {
      store.commit('adsr', this)
    },
    sustain: function(sustain) {
      store.commit('adsr', this)
    },
    release: function(release) {
      store.commit('adsr', this)
    }
  }
}
</script>

<style lang="scss" scoped>
  .adsr {
    input {
     // transform: rotate(270deg)
    }
  }
</style>

