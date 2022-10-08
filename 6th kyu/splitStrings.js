function solution(str){
   let array = []
   for(let i=0; i<str.length+1; i++) {
     if(i%2!==0){
       let letter1 = str[i-1]
       let letter2 = str[i]!==undefined ? str[i] : "_"
       array.push(letter1+letter2)
     }
   }
   return array
}

// .push() add element to end of array
