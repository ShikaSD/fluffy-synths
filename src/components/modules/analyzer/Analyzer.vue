<template>
  <div class="analyzer">
    <canvas width="300" height="150"/>
  </div>
</template>

<script>
import draw from './AnalyzerDrawer'
import {scaleCanvas} from '../../../utils/canvasScaler.js'

export default {
  props: ['analyzer'],
  data() {
    return {
      shouldUpdate: true
    }
  },
  mounted() {
    this.draw()
  },
  beforeDestroy() {
    this.shouldUpdate = false
  },
  methods: {
    draw() {
      const element = this.$el
      const canvas = element.querySelector('canvas')
      scaleCanvas(canvas)
      const ctx = canvas.getContext('2d')

      const data = new Float32Array(this.analyzer.fftSize)
      const oldData = new Float32Array(this.analyzer.fftSize)

      // now scale the context to counter
      // the fact that we've manually scaled
      // our canvas element
      // ctx.scale(ratio, ratio)

      const drawInternal = () => {
        requestAnimationFrame(drawInternal)

        if (!this.shouldUpdate) return

        this.analyzer.getFloatTimeDomainData(data)
        draw(ctx, canvas.width, canvas.height, data, oldData)
        oldData.set(data)
      }

      drawInternal()
    }
  }
}
</script>

<style lang="scss" scoped>
.analyzer {
}
</style>
