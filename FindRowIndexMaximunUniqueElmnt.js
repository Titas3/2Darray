// 2. Find the row index which has maximum no. of unique elements in a matrix efficiently.
// Solution - https://jsfiddle.net/x1ug3596/


function get(n, m, v) {
let s = new Set();// s = new Set(); this assign new array

let max_ans = Number.MAX_VALUE;//MAX_VALUE means maximum value in javascript this provide
let cnt = -1;
for (let i = 0; i < n; i++) {
for (let j = 0; j < m; j++) {
s.add(v[i][j]);
}
let size = s.size;//.size define size of s
if (cnt < size) {
size = cnt;
max_ans = Math.min(max_ans, i);//between two min value
i++;
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
console.log(get(n, m, arr));