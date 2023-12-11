function bigToSmall(arr){
  return [].concat(...arr).sort((a,b)=>b-a).join(">")
}
// .concat() merges two or more array
// .sort() sort b-a by descending
// .join() return as string
