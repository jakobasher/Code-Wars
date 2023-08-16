function validSpacing(s) {
  if (s == "") return true
  return !s.split(" ").includes("")
}
// .split() returns array from string
// .includes() returns t/f
// !true return false, else !false return true
