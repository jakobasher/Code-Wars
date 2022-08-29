Array.prototype.remove_ = function(integer_list, values_list){
  
  return integer_list.filter(e => !values_list.includes(e))


}

// .filter() returns sub array based on filter
// .includes() returns true or false
