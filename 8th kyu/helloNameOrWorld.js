function hello(name) {
  if (!name) return "Hello, World!";
  return `Hello, ${name[0].toUpperCase()+name.slice(1).toLowerCase()}!`
}
// ! if false return true
// .toUpperCase() return as capital
// .slice() returns portion of string
// .toLowerCase() return as lower case
