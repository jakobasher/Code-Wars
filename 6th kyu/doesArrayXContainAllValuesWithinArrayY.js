Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
  for (let i=0; i<a.length; i++) {
    if (!this.includes(a[i])) {
      return false
    }
  }
  return true
} } );
// .includes() returns true if element is in array, ! if false returns true in this case
