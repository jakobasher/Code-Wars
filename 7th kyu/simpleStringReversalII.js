function solve(st,a,b){
 return (
    st.slice(0,a)
   +st.slice(a,b+1).split("").reverse().join("")
   +st.slice(b+1)
 )
}
// .slice() returns portion of array
// .split() returns array 
// .reverse() reverses array index
// .join() returns string
// Split string into 3, reverse middle
