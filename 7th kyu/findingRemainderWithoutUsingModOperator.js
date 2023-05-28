function remainder (D, d) {
  return D >= d ? remainder(D-d,d) : D
}
// recurssion, loop until not true
