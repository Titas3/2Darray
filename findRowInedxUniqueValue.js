// 2. Find the row index which has maximum no. of unique elements in a matrix efficiently.


function MAX_VALUE(n, m, v) {
    let s = new Set();
    
    let max_ans = Number.MAX_VALUE;
    let cnt = -1;
    for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
    s.add(v[i][j]);
    }
    let size = s.size;
    if (cnt < size) {
    size = cnt;
    max_ans = Math.min(max_ans, i);
    }
    s.clear();
    }
    return max_ans;
    }
    
    
    
    let arr
    = [[1, 2, 13, 4, 5],
      [1, 2, 2, 4, 17],
      [1, 3, 11, 3, 1]];

    let n = arr.length;
    
    let m = arr[0].length;

    console.log(MAX_VALUE(n, m, arr));