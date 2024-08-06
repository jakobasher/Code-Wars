obfuscate = function(email) {
  return email.replaceAll("@"," [at] ").replaceAll(".", " [dot] ")
}
