let matrix = [
  [0, 0, -1],
  [0, -1, 0],
  [0, 0,  0],
];

//m ----> no of rows
//n ----> no of colums

bombExplode(matrix, matrix.length, matrix[0].length);
matrix.forEach((inside) => console.log(inside));
function bombExplode(matrix, m, n) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === -1) {
        if (j > 0 && matrix[i][j - 1] !== -1) {
          matrix[i][j - 1] += 1;
        }
        if (j < n - 1 && matrix[i][j + 1] !== -1) {
          matrix[i][j + 1] += 1;
        }
        if (i > 0 && matrix[i - 1][j] !== -1) {
          matrix[i - 1][j] += 1;
        }
        if (i < m - 1 && matrix[i + 1][j] !== -1) {
          matrix[i + 1][j] += 1;
        }
      }
    }
  }
}
