function rpsls(pl1,pl2){
  let rules = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["paper", "spock"],
    "spock": ["rock", "scissors"]
  }
  if (pl1 == pl2) { return "Draw!" }
  if (rules[pl1].includes(pl2)) { return "Player 1 Won!" }
  return "Player 2 Won!"
}
