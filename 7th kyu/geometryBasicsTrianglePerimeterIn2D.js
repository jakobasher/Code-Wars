function trianglePerimeter(triangle){
  let sideAB = Math.hypot(triangle.a.x - triangle.b.x, triangle.a.y - triangle.b.y)
  let sideBC = Math.hypot(triangle.b.x - triangle.c.x, triangle.b.y - triangle.c.y)
  let sideCA = Math.hypot(triangle.c.x - triangle.a.x, triangle.c.y - triangle.a.y)
  return sideAB + sideBC + sideCA
}
