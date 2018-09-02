<template>
  <div class="envelope">
    <canvas width="300" height="150" v-on:mousemove="captureCoordinates"/>
  </div>
</template>

<script>
// import { scaleCanvas } from '../../utils/canvasScaler'

export default {
  data() {
    return {
      shouldUpdate: true,
      x: 150,
      y: 75
    }
  },
  mounted() {
    this.draw()
  },
  beforeDestroy() {
    this.shouldUpdate = false
  },
  methods: {
    captureCoordinates(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    draw() {
      const element = this.$el
      const canvas = element.querySelector('canvas')
      // scaleCanvas(canvas)
      const ctx = canvas.getContext('2d')
      const width = canvas.width
      const height = canvas.height

      const drawInternal = () => {
        requestAnimationFrame(drawInternal)

        if (!this.shouldUpdate) return

        ctx.clearRect(0, 0, width, height)

        const x = Math.min(width, Math.max(0, this.x))
        const y = Math.min(height, Math.max(0, this.y))

        ctx.lineWidth = 2
        ctx.strokeStyle = '#000000'

        ctx.beginPath()
        ctx.moveTo(0, height)
        ctx.lineTo(x, y)
        ctx.lineTo(width, height)

        ctx.stroke()

        // ctx.fill
      }

      drawInternal()
    }
  }
}
</script>

<style>
  
</style>
