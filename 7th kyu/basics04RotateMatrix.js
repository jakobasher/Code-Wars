function rotateMatrix(matrix) {
    let n = matrix.length
    let m = matrix[0].length

    let arr = []
    for (let j = m-1; j>=0; j--) {
        let row = []
        for (let i=0; i<n; i++) {
            row.push(matrix[i][j])
        }
        arr.push(row)
    }
    return arr
}
