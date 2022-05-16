let arr1 = [1,2,3,4,5,6,7,8,9,10];

let k = 0;
let result = [];
for(let i=0;i<2;i++){
    let insideArr = [];
     for(let j= 0;j<5;j++){
         insideArr.push(arr1[k]);
         k++;
     }
     result.push(insideArr);
}
console.log(result);