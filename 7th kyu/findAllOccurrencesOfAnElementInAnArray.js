const findAll = (array, n) => {
  return array.map((e,i)=> e == n ? i : null).filter(e => e !== null)
}
// .map() Fn to each elemenet
// .filter() returns filtered array
// If true equals index, else null then filter all
