function alphabetWar(fight) {
  let obj = {w:4,p:3,b:2,s:1,m:4,q:3,d:2,z:1}
  let ls = fight.replace(/[^wpbs]/g, "").split("").map(e=>obj[e]).reduce((a,c)=>a+c,0)
  let rs = fight.replace(/[^mqdz]/g, "").split("").map(e=>obj[e]).reduce((a,c)=>a+c,0)
  return ls > rs
    ? "Left side wins!"
    : ls < rs
      ? "Right side wins!"
      : "Let's fight again!"
}
// .replace() REGEX, ^=not, g=global
// .split() returns array
// .map() Fn to elements
// .reduce() adds all elements, in this case
