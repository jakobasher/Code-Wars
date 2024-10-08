function crossProduct(v1, v2) {
  let x = v1.y * v2.z - v1.z * v2.y
  let y = v1.z * v2.x - v1.x * v2.z
  let z = v1.x * v2.y - v1.y * v2.x
  return new Vector(x, y, z)
}

// [2  0 -1] 2  0
// [0 -2  1] 0 -2
