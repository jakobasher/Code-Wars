function totalLicks(env) {
  let values = Object.values(env);
  let total = values.reduce((a,c) => a+c, 0) + 252

  let toughest = ''
  if (values.length > 0) {
    let difficulty = Math.max(...values)
    let challenge = Object.keys(env).find(key => env[key] == difficulty)
    if (difficulty > 0) {
      toughest = ` The toughest challenge was ${challenge}.`
    }
  }

  return `It took ${total} licks to get to the tootsie roll center of a tootsie pop.${toughest}`;
}
