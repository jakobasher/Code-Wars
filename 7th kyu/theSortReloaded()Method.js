Array.prototype.sortReloaded=function (dir="asc") {
  if (dir == "asc") return this.slice().sort((a,b)=>a-b)
  if (dir == "desc") return this.slice().sort((a,b)=>b-a)
  return false
}
