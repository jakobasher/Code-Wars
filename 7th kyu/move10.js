function moveTen(s){
  let string = "abcdefghijklmnopqrstuvwxyzabcdefghij"
  return s
    .split("")
    .map(e => e=string.indexOf(e)+10)
    .map(el => el = string[el])
    .join("")
}

// .split() string to array
// .map() Fn letter to number
// .indexOf() returns first occurance of +10
// .map() 

// code => "c" => 2nd index in string +10 => 12 => 12th index in string => "m"
