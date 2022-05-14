let matrix = [
[00, 01, 02, 03],
[10, 11, 12, 13],
[20, 21, 22, 23]
]

console.log(columnWiseSum(matrix, matrix.length, matrix[0].length));
function columnWiseSum(matrix, m, n) {
    let result = [];
    for(let j=0;j<n;j++) {
        let sum = 0;
        for(let i=0;i<m;i++) {
            sum+=matrix[i][j];
        }
        result.push(sum);
    }
    return result;
}