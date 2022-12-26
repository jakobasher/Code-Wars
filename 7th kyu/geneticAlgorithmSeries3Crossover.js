const crossover = (chromosome1, chromosome2, index) => {
  let chrom1Half1 = chromosome1.slice(0,index)
  let chrom1Half2 = chromosome1.slice(index)
  let chrom2Half1 = chromosome2.slice(0,index)
  let chrom2Half2 = chromosome2.slice(index)
  return [chrom1Half1+chrom2Half2, chrom2Half1+chrom1Half2]
}
// .slice() returns portion between array, or portion after
// .substring() try next time
