String.prototype.camelCase=function(){
  let arr = this.toString().trim().split(" ")
  let array = arr.map(e => 
    e = e.slice(0,1).toUpperCase() + e.slice(1).toLowerCase()
  )
  return array.join("")
}

// this reference to the object called ??
// .toString() returns element as string
// .trim() returns string with no spaces at begin or end
// .split() returns array from string
// .map() Fn to each element
// .slice() returns a portion of array
// .toUpperCase() returns capital case
// .toLowerCase() returns all lower case
// .join() returns string from array
