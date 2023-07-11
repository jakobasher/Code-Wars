function noRepeat(str) {  
  for (let i of str) 
    if (str.split(i).length == 2) 
      return i
}
// for loop to iterible throw each letter
// .split() splits string at letter, if array=2, return letter
