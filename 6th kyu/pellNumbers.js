function pell(n) {
	let array = [BigInt(0), BigInt(1)]
  for (let i = 2; i<201; i++) {
    array.push(BigInt(2)*array[array.length-1]+array[array.length-2])
  }
	return array[n]
}

// .push() adds element to end of array
// BigInt(0) or 0n used to represent very large numbers, cannot be mixed with non BigInt numbers, does not work with Math methods
// for loop, under 200 in this case...
