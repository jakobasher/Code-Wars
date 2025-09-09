function diff(s1, s2){
  return new Set(Array.from(s1).filter(v => !s2.has(v)));
}
