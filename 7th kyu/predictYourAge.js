function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let age = [...arguments].map(e=>e*e).reduce((a,c)=>a+c,0)
     
    
  return Math.floor(Math.sqrt(age,2)/2)

}

// ... add arguments to 
// arguments 
// .map()
// .reduce()
