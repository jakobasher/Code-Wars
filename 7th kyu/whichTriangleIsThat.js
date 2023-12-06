var typeOfTriangle = function (a, b, c) {
  let arr = [a,b,c]
  if (arr.every(e => typeof e !== "number")) {
    return "Not a valid triangle"
  }
  let n = [...new Set(arr)].length
  if (a+b > c && b + c > a && a + c > b) {
    return n == 1 ? "Equilateral" : n == 2 ? "Isosceles" : "Scalene"
  }
    return "Not a valid triangle"
}
// .every() return true if all true
