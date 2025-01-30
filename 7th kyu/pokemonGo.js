function pidgeyCalc ( pidgeys, candy ) {
  let xp = 0
  while (pidgeys > 0) {
    if (candy >= 12) {
      xp = xp+500
      candy = candy-12
      pidgeys--
      candy++
    } else {
      pidgeys--
      candy++
    }
  }
  return xp
}
