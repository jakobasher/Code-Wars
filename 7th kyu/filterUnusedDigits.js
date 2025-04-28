function unusedDigits() {
  let str = [...arguments].map(e=>e.toString()).join("")
  let digitsToRemove = new Set(str);
  return [..."0123456789"].filter(char => !digitsToRemove.has(char)).join('');
  return str
}
