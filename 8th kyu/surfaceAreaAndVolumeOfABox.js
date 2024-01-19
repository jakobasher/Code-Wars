function getSize(width, height, depth) {
  return [2*(width*height + width*depth + depth*height), width*height*depth]
}
