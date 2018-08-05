<template>
  <div class="keyboard">
    <div class="key" v-for="config in keyConfigs" :key="config.index">
      <white-key
        v-if="isWhiteKey(config)"
        v-bind:active="activeKeys.includes(config)"
        v-bind:config="config"
        v-bind:octave="octave"
      />
      <black-key
        v-if="isBlackKey(config)"
        v-bind:active="activeKeys.includes(config)"
        v-bind:config="config"
        v-bind:octave="octave" />
    </div>
  </div>
</template>

<script>
import whiteKey from './WhiteKey.vue'
import blackKey from './BlackKey.vue'
import keyConfig from './KeyConfig'
import resolve from './FrequencyResolver'
import store from '../../store'

export default {
  components: {
    whiteKey,
    blackKey
  },
  created() {
    this.registerKeyboardListeners()
    this.activeConfigCache = new Map()
  },
  destroyed() {
    this.unregisterKeyboardListeners()
  },
  data() {
    return {
      keys: keyConfig,
      activeKeys: [],
      octave: 4
    }
  },
  computed: {
    keyConfigs() {
      return Object.values(this.keys.white)
        .concat(Object.values(this.keys.black))
        .sort((a, b) => a.index - b.index)
    }
  },
  methods: {
    isWhiteKey(config) { return Object.values(this.keys.white).includes(config) },
    isBlackKey(config) { return Object.values(this.keys.black).includes(config) },
    registerKeyboardListeners() {
      window.addEventListener('keydown', this.keyDown)
      window.addEventListener('keyup', this.keyUp)
      window.addEventListener('keypress', this.switchOctave)
    },
    keyDown(e) {
      const config = this.keys.white[e.keyCode] || this.keys.black[e.keyCode]
      if (!config || this.activeKeys.includes(config)) return

      this.activeKeys.push(config)
      const freq = resolve(config, this.octave)
      this.activeConfigCache.set(config, freq)
      store.commit('playNote', freq)
    },
    keyUp(e) {
      const config = this.keys.white[e.keyCode] || this.keys.black[e.keyCode]
      if (!config || !this.activeKeys.includes(config)) return

      this.activeKeys = this.activeKeys.filter(it => it !== config)
      const freq = this.activeConfigCache.get(config) || resolve(config, this.octave)
      this.activeConfigCache.delete(config)
      store.commit('stopNote', freq)
    },
    switchOctave(e) {
      let octaveDiff
      switch (e.keyCode) {
        case 90:
        case 122:
          octaveDiff = -1
          break
        case 88:
        case 120:
          octaveDiff = 1
          break
        default:
          octaveDiff = 0
      }
      this.octave += octaveDiff
    },
    unregisterKeyboardListeners() {
      window.removeEventListener('keydown', this.keyDown)
      window.removeEventListener('keyup', this.keyUp)
      window.removeEventListener('keypress', this.switchOctave)
    }
  }
}
</script>

<style scoped>
.keyboard {
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
