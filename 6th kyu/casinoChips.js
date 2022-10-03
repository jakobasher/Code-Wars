function solve(arr){
    let [a,b,c] = arr.sort((a,b)=>a-b)
    let num1 = a+b
    let num2 = Math.floor((a+b+c)/2)
    return Math.min(num1,num2)
}

// .sort() sorts array
// Math.floor() rounds down
// Math.min() returns lowest value
