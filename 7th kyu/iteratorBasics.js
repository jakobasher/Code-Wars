let counter = {
  [Symbol.iterator]: function* () {
    let i = 0
    while (true) {yield ++i}
  }
}
