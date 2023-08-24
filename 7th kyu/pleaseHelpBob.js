function errBob(string){
  string
    .replace(/([bcdfghjklmnpqrstvwxyz])(\W|$)/g, '$1err$2')
    .replace(/([BCDFGHJKLMNPQRSTVWXYZ])(\W|$)/g, '$1ERR$2')
}
