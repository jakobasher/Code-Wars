function numberJoy(n) {
    let num = n
      .toString()
      .split("")
      .map(Number)
      .reduce((a,c)=>a+c,0)
    let reverse = num
      .toString()
      .split("")
      .reverse()
      .map(Number)
      .join("")
    return num * parseInt(reverse) == n ? true : false
}

// .toString() returns string
// .split () returns array
// .map() returns array
// .reduce() returns integer, in this case
// .reverse() returns array
// .join() returns string
// parseInt() returns integer
