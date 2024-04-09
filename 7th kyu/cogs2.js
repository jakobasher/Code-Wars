function cogRpm(cogs, n) {
  let arr = [1, -1]
  return [arr[n % 2] * cogs[n] / cogs[0], arr[(cogs.length-n+1)%2] * cogs[n] / cogs[cogs.length-1]]
}
