function generateLink(user) {
  let str = encodeURIComponent(user)
  return `http://www.codewars.com/users/${str}`
}
