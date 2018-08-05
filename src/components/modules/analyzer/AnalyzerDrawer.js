export default function (ctx, width, height, data, oldData) {
  ctx.clearRect(0, 0, width, height)

  ctx.lineWidth = 2
  ctx.strokeStyle = '#000000'
  ctx.beginPath()

  const step = width * 1.0 / data.length
  let x = 0

  let start = 0
  //  let it = start
  //  
  // while (it < oldData.length) {
  //   // Search for beginning
  //   while (it < oldData.length && oldData[it] !== data[0]) it++

  //   // Check if tail match
  //   let tailMatches = (it < oldData.length)
  //   for (let i = it; i < oldData.length; i++) {
  //     if (oldData[i] !== data[i - it]) {
  //       tailMatches = false
  //       break
  //     }
  //   }

  //   if (tailMatches) {
  //     start = it
  //     break
  //   } else {
  //     it++
  //   }
  // }

  for (let i = start; i < data.length; i++) {
    const value = data[i] * 10.0
    const y = value + height / 2

    if (i === start) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }

    x += step
  }

  // ctx.lineTo(width, height / 2)
  ctx.stroke()
}
