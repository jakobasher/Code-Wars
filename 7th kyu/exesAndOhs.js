function XO(str) {
    let os = str.toLowerCase().split("").filter(e => e == "o").length
    let xs = str.toLowerCase().split("").filter(e => e == "x").length
    
    return os == xs ? true : false
}

// .filter() filter array
// .split() string to array
