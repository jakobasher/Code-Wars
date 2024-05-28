function sentence(arrayOfObjects) {
  return arrayOfObjects
      .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
      .map(item => item[Object.keys(item)[0]])
      .join(' ')
}
