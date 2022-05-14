let matrix = [
    [2, 0, 0, 0],
    [0, 18, 0, 0],
    [0, 0, 23, 0],
    [0, 0, 0, 28]
]

console.log(diagonalMatrix(matrix, matrix.length, matrix[0].length));
function diagonalMatrix(matrix, m, n) {
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(i!==j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}