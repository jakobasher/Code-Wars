function remove (string) {
  return string
    .split(" ")
    .map(e=> e.replace(/!+$/gi, ''))
    .join(" ")
}
