function spoonerize(words) {
    let array = words.split(" ")
    return array[1][0]+array[0].slice(1) + " " + array[0][0]+array[1].slice(1)
}
// .split() return as array
// .slice() returns portion of string
