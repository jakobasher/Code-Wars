function wordValue(a) {
  let array = a.map((e, i) => e
                    .split(" ")
                    .join("")
                    .split("")
                    .map(letter => /[a-z]/.test(letter) ? letter.charCodeAt() - 96 : 0)
                    .reduce((a, c) => a + c, 0)
  )
  return array.map((e,i)=>e*(i+1))
}
// .map() Fn to each element
// .split() return as array
// .join() return as string
// .test() returns t/f
// .charCodeAt() returns ASCII
// .reduce() adds all array elemenets, in this case
