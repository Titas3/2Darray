let matrix = [
    [-1, 2, 2, 3],
    [5, 4, 4, 4],
    [6, 6, 6, 7]
   ]
   console.log(uniqueElement(matrix, matrix.length, matrix[0].length));


function uniqueElement(matrix) {
    let obj = {};
    for(let insideMatrix of matrix) {
        for(let value of insideMatrix) {
            if(obj[value]) {
                obj[value] = obj[value] + 1;
            } else {
                obj[value] = 1;
            }
        }
    }
    /*
    */
    for(let [key, value] of Object.entries(obj)) {
        if(value === 1) {
            console.log(key);
        }
    }
}