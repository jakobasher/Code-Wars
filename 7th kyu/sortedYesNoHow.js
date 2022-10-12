function isSortedAndHow(array) {
  return array.every((e,i) => i==0 || array[i]>array[i-1]) 
    ? "yes, ascending"
    : array.every((e,i) => i==0 || array[i]<array[i-1]) 
      ? "yes, descending" 
      : "no"
}

// .every() returns true or false if all
