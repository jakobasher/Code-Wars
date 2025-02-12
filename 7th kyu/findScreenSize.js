function findScreenHeight(width, ratio) {
  let n1 = +ratio.split(":")[0]
  let n2 = +ratio.split(":")[1]
  return `${width}x${width*n2/n1}`
}
