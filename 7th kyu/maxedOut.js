function maxedOut(arr) {
    let sum = arr.reduce((a,c) => a + Math.pow(c, 3), 0)
    let maxInteger = Number.MAX_SAFE_INTEGER
    return sum <= maxInteger ? sum : "You've pushed me to the max!"
}
// Number.MAX_SAFE_INTEGER represents 253^2 – 1
