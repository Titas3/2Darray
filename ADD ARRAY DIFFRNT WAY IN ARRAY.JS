/* Approach - 2
Intuition:
We can reduce it by applying column wise addition on two rows at a
time. I.e.
On using reduce, we will apply same logic with the next row

[3,4,5]
[3,4,2]
 [6,8,7]
+[2,3,4]
—-------
[8,11,11]
Again using reduce we add this with next row
[8,11,11]
+[4,4,4]
—---------
[12,15,15] */

//M = Rows, N = Columns
let M=4,N=3

//A = 2DArray
const A = [[3,4,5],[3,4,2],[2,3,4],[4,4,4]]


var col_sum = A.reduce((A, B) => A.map((X, idx) => X + B[idx])); // Logic to fetch the sum

//print the solution
console.log(col_sum); //12,15,15