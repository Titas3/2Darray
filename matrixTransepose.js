//Matrix Transepose------->>>

let matrix =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

transpose(matrix, 3)
matrix.forEach((inside) => console.log(inside));
function transpose(matrix,n){
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] =temp;
        }
    }
}