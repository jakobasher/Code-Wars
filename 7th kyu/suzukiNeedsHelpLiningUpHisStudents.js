function lineupStudents(students){
  let names = students.split(" ")
  names.sort((a,b) => b.length-a.length)
  names.sort((a,b) => a.length == b.length ? b.localeCompare(a) : 0)
  return names
}
// .split() returns array from string
// .sort() b-a sort in descending order, .localeCompare() compares value string
