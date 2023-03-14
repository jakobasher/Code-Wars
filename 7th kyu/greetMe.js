var greet = function(name) {
  return `Hello ${name[0].toUpperCase()+name.slice(1).toLowerCase()}!`
};
// `` Template literals, ${} for interpolation
// .toUpperCase() returns string as all cap
// .toLowerCase() returns string as all lower cap
// .slice() returns portion of string
