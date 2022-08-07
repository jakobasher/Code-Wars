function solution(string) {  
  
    return string.split("").map(e => e == e.toUpperCase() ? " "+e : e).join("")


}

// .split() string to array
// .map() function each element
// .toUpperCase() Upper case
// .join() array to string








// First try 

// function solution(string) {  
//     let newString = ""
//     for (let i = 0; i<string.length; i++) {
//       if (string[i] == string[i].toUpperCase()) {
//         newString += " "+string[i]
//       } else {
//         newString += string[i]
//       }
//     } 
//     return newString
// }
