function findTheMissingTree(trees) {
  let arr = trees.map(e => trees.filter((v,i) => trees[i] == e).length)
  return trees[arr.indexOf(Math.min(...arr))]
}
