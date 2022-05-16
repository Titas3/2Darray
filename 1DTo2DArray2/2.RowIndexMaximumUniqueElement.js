// Find the row index which has maximum no. of unique elements in a matrix efficiently.

function rowWithMaxUnique(matrix){
    let max = Number.MAX_SAFE_INTEGER;
    let indexNo;

    for(let i=0;i<matrix.lenght;i++){
        let insideMatrix = matrix[i];
        let tempObj = {};
        for(let value of insideMatrix){
            if(tempObj[value]){
                    tempObj[value]= tempObj[value] + 1;
                } 
                else 
                {
                    tempObj[value]=1;
                }
            }
        }

        let count = 0;
        for(let[key,value] of Object.entries(tempObj)){
            if(value === 1){
                count++;
            }
        }
        if(max < count){
            max = count;
            indexNo =i;
        }
          return indexNo;
        
    }
