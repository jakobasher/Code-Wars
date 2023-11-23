function whatNumberIsIt(n){
  return `Input number is ${n == Number.POSITIVE_INFINITY ? `Number.POSITIVE_INFINITY` 
    : n == Number.NEGATIVE_INFINITY ? `Number.NEGATIVE_INFINITY` 
    : n == Number.MAX_VALUE ? `Number.MAX_VALUE`
    : n == Number.MIN_VALUE ? `Number.MIN_VALUE`
    : Number.isNaN(n) ? `Number.NaN` 
    : n}`
}
// Number.POSITIVE_INFINITY represents the negative Infinity value
// Number.NEGATIVE_INFINITY represents the positive Infinity value
// Number.MAX_VALUE represents the max numeric value
// Number.MIN_VALUE represents the min numeric value
// Number.isNaN() determines whether the passed value is the number
