function findArr(arrA, arrB, rng, wanted) {
  let freqA = {}
  let freqB = {}
    
  arrA.forEach(num => {
    freqA[num] = (freqA[num] || 0) + 1;
  })
  arrB.forEach(num => {
    freqB[num] = (freqB[num] || 0) + 1;
  })

  let commonElements = []
  
  for (let num in freqA) {
    if (freqB[num] && freqA[num] > 1 && freqB[num] > 1) {
      commonElements.push(Number(num))
    }
  }

  let result = commonElements.filter(num => {
    return num >= rng[0] && num <= rng[1] && 
      (wanted === "odd" ? num % 2 !== 0 : num % 2 === 0);
    })

  return result.sort((a, b) => a - b)
}
