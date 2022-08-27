function solve(s){
    let upper = s.split("").filter(e => e == e.toUpperCase()).length
    let lower = s.split("").filter(e => e == e.toLowerCase()).length
    let allUpper = s.toUpperCase()
    let allLower = s.toLowerCase()

    return upper > lower ? allUpper : allLower
  
  
}

// .split() string to array
// .filter() array to filtered array
// .toLowerCase()
// .toUpperCase()
