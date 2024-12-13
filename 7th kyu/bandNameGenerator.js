function bandNameGenerator(str) {
  if (str[0] !== str.slice(-1)) {
    return `The ${str[0].toUpperCase()}${str.slice(1,)}`
  }
  return str[0].toUpperCase() + str.slice(1,).toLowerCase() + str.slice(1,).toLowerCase()
}
