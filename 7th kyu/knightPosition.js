function possiblePositions(str) {
  const ord = str.charCodeAt(0), num = str.charCodeAt(1), from = String.fromCharCode
  return [
    from(ord + 1).concat(from(num + 2)),
    from(ord + 2).concat(from(num + 1)),
    from(ord + 1).concat(from(num - 2)),
    from(ord + 2).concat(from(num - 1)),
    from(ord - 1).concat(from(num + 2)),
    from(ord - 2).concat(from(num + 1)),
    from(ord - 1).concat(from(num - 2)),
    from(ord - 2).concat(from(num - 1))
  ].filter(x => /[a-h][1-8]/.test(x)).sort()
}
