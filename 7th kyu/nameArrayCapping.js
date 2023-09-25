function capMe(names) {
  return names.map(capitalize);
}

function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
// Broken kata?
// .map() return Fn to capitalize
