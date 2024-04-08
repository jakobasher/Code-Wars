function cogRpm(cogs) {
  let n = cogs[0] / cogs[cogs.length-1]
  return cogs.length%2==0 ? n*-1 : n
}
