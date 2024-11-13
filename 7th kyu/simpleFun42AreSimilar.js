function areSimilar(A, B) {
  return A.filter((e, i) => e!==B[i]).length < 3 && `${A.sort()}` == `${B.sort()}`
}
//
