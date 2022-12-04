Number.prototype.add = function(e) { return this+e }
Number.prototype.sub = function(e) { return this-e }
Number.prototype.mul = function(e) { return this*e }
Number.prototype.div = function(e) { return this/e }
Number.prototype.pow = function(e) { return Math.pow(this,e) }
Number.prototype.sqr = function(e) { return Math.pow(this,0.5) }

// Math.pow() returns basee raised to exponent
// Math.sqrt() returns square root
// Number.prototype mechanism used to inherit features
