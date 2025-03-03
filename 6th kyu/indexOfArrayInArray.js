var searchArray = function(arrayToSearch, query) {
  if (!Array.isArray(query)) {
    throw new Error()
  }
  if (query.length !== 2) {
    throw new Error()
  }
  if (!Array.isArray(arrayToSearch)) {
    throw new Error()
  }

  for (let i = 0; i < arrayToSearch.length; i++) {
    const subArray = arrayToSearch[i]
    
    if (!Array.isArray(subArray)) {
      throw new Error()
    }

    if (subArray.length !== 2) {
      throw new Error()
    }
  }

  let index = arrayToSearch.findIndex(subArray => 
    subArray.length == query.length && subArray.every((e, i) => e == query[i])
  )
  
  return index !== -1 ? index : -1
};
