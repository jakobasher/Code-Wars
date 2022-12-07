function objConcat(array){
  return array.reduce((a,c) => ({...a, ...c}), {})
}

// .reduce() adds up all elements in array
// ... spread syntax allows iterible objects to be added, in this case
// Objects keys are overwritten by newer objects with same key
// can try Object.assign({}, ...array), adds objects from source into target 
