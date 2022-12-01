function consecutiveDucks(num) {
    return !!(num & --num)
}
// !! force truth of false
// -- subtracts 1 from value before value applied
// & 
