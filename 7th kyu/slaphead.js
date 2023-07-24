function bald(x){
  let str = "-".repeat(x.length)
  let num = x.split("").filter(e=>e=="/").length || 0
  return num == 0 
    ? [str,"Clean!"] 
    : num==1 
      ? [str,"Unicorn!"] 
      : num < 3
        ? [str,"Homer!"] 
        : num < 6 
          ? [str,"Careless!"] 
          : [str,"Hobo!"]
}
// .repeat() repeat string x times
// .split() return array from string
// .filter() returns copy of array
