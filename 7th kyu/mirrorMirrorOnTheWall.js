function mirror(data) {
//   if (data.length == 1) return data
  let array1 = [...data].sort((a,b)=>a-b)
  let array2 = [...array1].reverse().slice(1)
  return [...array1,...array2]
}
