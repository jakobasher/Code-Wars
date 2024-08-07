function fizzBuzzCuckooClock(time) {
  let arr = time.split(":")
  let hr = arr[0] <= 12 ? 12 : arr[0]-12
  let min = arr[1]
  if (min=="15" || min=="45") return "Fizz Buzz"
  if (min=="30") return "Cuckoo"
  if (min=="00") return "Cuckoo ".repeat(hr).trim()
  if (min%3==0) return "Fizz"
  if (min%5==0) return "Buzz"
  return "tick"
}
