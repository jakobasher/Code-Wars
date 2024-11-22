function apparently(string) {
   return string.replace(/(and|but\b)(?!\s+apparently\b)/g, '$1 apparently')
}
