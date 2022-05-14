let matrix =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
waveForm(matrix, 3, 3)
function waveForm(matrix, n, m){
    let forward = true;
    for (let i=0; i<n;i++){
        for(let j=0;j<m;j++){
        if(forward){
            console.log(matrix[i][j]);
        }
        else{
            console.log(matrix[i][m-j-1]);
        }
    }
    }
    forward =!forward;
}