function meeting(s) {
  let str = s
  .toUpperCase()
  .split(';')
  .map(e => e.split(':').reverse().join(', '))
  .sort()
  .join(')(')
  
  return '(' + str + ')'
}
