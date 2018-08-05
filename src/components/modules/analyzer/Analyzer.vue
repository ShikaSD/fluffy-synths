<template>
  <div class="analyzer">
    <canvas width="300px" height="150px"/>
  </div>
</template>

<script>
import draw from './AnalyzerDrawer'

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
      const ctx = canvas.getContext('2d')
      const data = new Float32Array(this.analyzer.fftSize)
      const oldData = new Float32Array(this.analyzer.fftSize)

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
  width: 300px;
  height: 150px;

  canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
