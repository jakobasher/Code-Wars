function getRectangleString(width, height) {
  let rectangle = ""
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      if (i == 1 || i == height || j == 1 || j == width) {
        rectangle += "*"
      } else {
        rectangle += " "
      }
    }
    rectangle += "\r\n"
  }
  return rectangle
}
//
