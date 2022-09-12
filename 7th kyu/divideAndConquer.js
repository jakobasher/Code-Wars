function divCon(x){
  let xInt = x.filter(e => Number.isInteger(e)).reduce((a,c) => a+c, 0)
  let xStr = x.filter(e => typeof e === 'string').map(Number).reduce((a,c) => a+c, 0)
  
  return xInt-xStr
}

//   let xInt = x.filter(e => typeof e === 'number').reduce((a,c) => a+c, 0) // also would of worked

// .filter() returns sub array
// Number          // rarely used?
// .isInteger() returns true or false
// .reduce() sums up array
// typeof returns string
