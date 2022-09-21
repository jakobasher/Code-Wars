function solution(number){
  let result = ""
  
  while(number>0){
      if(number>=1000){
         result += "M"
         number -= 1000
      } else if(number>=500){
         if(number>=900){
            result += "CM"
            number -= 900
         } else {
            result += "D"
            number -= 500
         }
         } else if(number>=100){
            if(number>=400){
               result += "CD"
               number -= 400
            } else {
               result += "C"
               number -= 100
            }
         } else if(number>=50){
            if(number>=90){
               result += "XC"
               number -= 90
            } else {
               result += "L"
               number -= 50
            }
         } else if(number>=10){
            if(number>=40){
               result += "XL"
               number -= 40
            } else {
               result += "X"
               number -= 10
            }
         } else if(number>=5){
            if(number>=9){
               result += "IX"
               number -= 9
           } else {
               result += "V"
               number -= 5
            }
         } else {
            if(number>=4){
               result += "IV"
               number -= 4
         } else {
            result += "I"
            number -= 1
         }
      }
   }
   return result
}

// while() loops if true
