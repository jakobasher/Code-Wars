function average(scores) {
    let average = scores.reduce((a,c)=> a+c,0) / scores.length
    return Math.round(average)
}
// .reduce() adds all elements, in this case
// Math.round() round to nearest
