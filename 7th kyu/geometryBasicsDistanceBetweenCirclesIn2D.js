function distanceBetweenCircles(a, b){
    let x = a.center.x - b.center.x
    let y = a.center.y - b.center.y
    let c = Math.sqrt(x**2 + y**2)
    let d = c - a.radius - b.radius
    return d > 0 ? d : 0
}
