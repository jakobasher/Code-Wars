function solve(arr){
    for (let i=0; i<arr.length; i++) {
      if (!arr[i] == arr.includes((-1)*arr[i]))
        return arr[i]
    }
};
// .includes() returns t/f
