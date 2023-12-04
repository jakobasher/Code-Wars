function shuffleIt(arr, ...swap){
  for (let i=0; i<swap.length; i++) {
    let a = swap[i][0];
    let b = swap[i][1];
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }
  return arr
}
// Line 5 reverse values at same time without need for temp var
