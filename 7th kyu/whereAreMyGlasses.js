function findGlasses(arr){
  return arr.findIndex(e => /O-+O/.test(e));
}
