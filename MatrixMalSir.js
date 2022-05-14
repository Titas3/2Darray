let result = multiplyMatrix(
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    2,
    3,
    3,
    3
)

result.forEach((inside) => console.log(inside))
function multiplyMatrix(matrix1, matrix2, r1, c1, r2, c2) {
    let result = Array.from(Array(r1), function() {
        return new Array(c2);
    });
    for(let i=0;i<r1;i++) {
        for(let j=0;j<c2;j++) {
            let sum = 0;
            for(let k=0;k<r2;k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}