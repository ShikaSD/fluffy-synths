<template>
  <div>
    <keyboard />

    <div class="modules">
      <div class="module">
        <voice :id="`voice1`" />
      </div>
      <div class="module">
        <voice :id="`voice2`" />
      </div>
      <div class="module">
        <voice :id="`voice3`" />
      </div>
      <div class="module">
        <analyzer :analyzer="analyzer"/>
      </div>
      <div class="module">
        <envelope />
      </div>
    </div>
  </div>
</template>

<script>
import Keyboard from './keyboard/Keyboard.vue'
import Voice from './modules/voice/Voice.vue'
import Analyzer from './modules/analyzer/Analyzer.vue'
import Envelope from './modules/Envelope.vue'

import { add, connect, node } from '../playback'
import MasterNode from '../playback/master.js'

add('master', new MasterNode())

export default {
  components: {
    Keyboard,
    Voice,
    Analyzer, 
    Envelope
  },
  computed: {
    analyzer() {
      return node('master').analyzer()
    }
  },
  mounted() {
    connect('voice1', 'master')
    connect('voice2', 'master')
    connect('voice3', 'master')
  }
}
</script>

<style lang="scss" scoped>
  .modules {
    display: flex;
    flex-direction: row;
    background: lightgray
  }

  .module {
    background: white;
    margin: 10px;
    padding: 10px;
  }
</style>
