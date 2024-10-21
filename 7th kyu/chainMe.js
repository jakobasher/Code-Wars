function chain(input, fs) {
  let result = input
  for (funct of fs) {
    result = funct(result)
  } return result;
}

function add(num) {
  return num+1
}
function mult(num) {
  return num+30
}
