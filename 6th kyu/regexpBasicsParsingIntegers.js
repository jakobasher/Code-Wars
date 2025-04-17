String.prototype.toInteger=function(){
  return /^[+-]?\d+$/.test(this)
    ? parseInt(this) 
    :/^[+-]?0x[\dA-Fa-f]+$/.test(this)
      ? parseInt(this,16) 
      : /^[+-]?0o[0-7]+$/.test(this)
        ? parseInt(this.replace(/0o/,""),8)
        :/^[+-]?0b[01]+$|^\d+0b$/.test(this) 
          ? parseInt(this.replace(/0b/,""),2) 
          : null
}
