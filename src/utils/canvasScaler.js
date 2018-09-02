export function getScale(canvas) {
  
}

export function scaleCanvas(canvas) {
  const ctx = canvas.getContext('2d')
  const devicePixelRatio = window.devicePixelRatio || 1
  const backingStoreRatio = 
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1

  const ratio = devicePixelRatio / backingStoreRatio

  var oldWidth = canvas.width
  var oldHeight = canvas.height

  canvas.width = oldWidth * ratio
  canvas.height = oldHeight * ratio

  canvas.style.width = oldWidth + 'px'
  canvas.style.height = oldHeight + 'px'
}
