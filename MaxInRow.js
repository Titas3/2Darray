//   in matrix find maximum value in evry row ---->
  
  
  let matrix = [
    [-1, -9, -8, -22],
    [10, 11, 12, 13],
    [20, 21, 22, 23]
   ]
   console.log(maxInARow(matrix, matrix.length, matrix[0].length));
   function maxInARow(matrix, m, n) {
    let result = [];
    for(let insideMatrix of matrix) {
        let max = Number.MIN_SAFE_INTEGER;
        for(let value of insideMatrix) {
            max = value > max ? value : max;
        }
        result.push(max);
    }
    return result;
}
