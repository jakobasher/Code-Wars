function testResult(array) {
  let average = array.reduce((a,c)=>a+c,0) / array.length
  let obj = {"h":0, "a":0, "l":0}
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 8) {
      obj.h++
    } else if (array[i] < 7) {
      obj.l++
    } else {
      obj.a++
    }
  }
  if (array.every(e=>e>8)) return [+average.toFixed(3), obj, "They did well"]
  return [+average.toFixed(3), obj]
}
