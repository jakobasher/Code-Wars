class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }
  guess(n) {
    if (!this.lives) throw 'No more guesses'
    if (n == this.number) return true
    this.lives--
    return false
  }
}
// The constructor takes in 2 fixed parameters
// The guess method checks lives first then checks number
