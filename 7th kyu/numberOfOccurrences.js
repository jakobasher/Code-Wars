Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    return this.filter(e=>e==element).length
  }
});
// .filter() returns copy of array
// this
