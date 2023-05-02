function count(string) {
  let count = {}
  for (let i of string) {
    count[i] = (count[i]||0) + 1
  }
  return count;
}
// for of loop, increments if exist else creates
