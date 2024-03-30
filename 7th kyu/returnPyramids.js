function pyramid(n){
    return [...Array(n - 1).keys()]
        .map(i => " ".repeat(n-i-1) + "/" + " ".repeat(i*2) + "\\\n")
        .join("") + "/" + "_".repeat(n*2-2) + "\\\n"
}
