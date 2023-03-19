function periodIsLate(last, today, cycleLength) {
  return (today.getTime() - last.getTime()) / 86400000 > cycleLength
}
// .getTime() returns time as ms based on 1970
