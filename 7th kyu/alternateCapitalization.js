function capitalize(s){
  let str1 = s.toUpperCase().split("").map((e,i)=>i%2==0?e:e.toLowerCase()).join("")
  let str2 = s.toLowerCase().split("").map((e,i)=>i%2==0?e:e.toUpperCase()).join("")
  return [str1, str2]
};
