let matrix = [
    [00, 01, 02, 03],
    [10, 56, 12, 13],
    [20, 21, 22, 23]
    ]

console.log(searchElement(matrix, matrix.length, matrix[0].length, 56))

function searchElement(matrix, m, n, element) {
    let i=0;
    let j=n-1;
    while(j >= 0 && i < m) {
        if(matrix[i][j] === element) {
            return [i,j];
        } else if(matrix[i][j] < element) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}