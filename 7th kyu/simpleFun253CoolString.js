function coolString(s) {
  return !/[a-z]{2,}|[A-Z]{2,}|[^a-zA-Z]/.test(s)
}
