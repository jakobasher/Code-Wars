function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) => {
    let lastNameA = a.split(' ').pop()
    let lastNameB = b.split(' ').pop()
    if (lastNameA < lastNameB) return -1
    if (lastNameA > lastNameB) return 1
    return 0
  })
}
