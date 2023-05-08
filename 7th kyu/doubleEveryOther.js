function doubleEveryOther(a) {
  return a.map((e,i) => i%2==1 ? e*2 : e)
}
// .map() Fn to each element, if odd index, double
