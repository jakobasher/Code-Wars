function  calculateAge() {
let [a,b] = [...arguments]
  
    if (a+1==b) return `You are 1 year old.`
    if (a<b) return `You are ${b-a} years old.`
    if (a==b) return `You were born this very year!`
    if (a==b+1) return `You will be born in 1 year.`
    return `You will be born in ${a-b} years.`
}
