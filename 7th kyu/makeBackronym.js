//preload variable: dict

var makeBackronym = function(string){
  return string
    .toUpperCase()
    .split("")
    .map(e => e=dict[e])
    .join(" ")
};
// .toUpperCase() return string as all capital
// .split() returns array
// .map() Fn to each element in array, return letter corresponding to object, in this case
// .join("") returns string
