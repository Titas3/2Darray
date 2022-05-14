//Print Matrix in Spiral Form 2D array:------->
let matrix = [
    [1, 2,  5],
    [6, 9, 10],
    [11, 12, 15]
    ];
   Spiral(matrix, 3, 3);
  
  function Spiral(matrix, m, n) {
      let i,k=0,l=0;
      let last_row =m-1, last_col = n-1;
      while(k<=last_row && l<=last_col ){
          for(i=l;i<=last_col;i++)
          {
              console.log(matrix[k][i]);
          }
          k++;
          for(i=k; i<=last_row;i++)
          {
            console.log(matrix[i][last_col]); 
          }
          last_col --;
          if(k<=last_row)
          {
              for(i=last_col;i>=l;i--)
              {
                console.log(matrix[last_row][i]);
              }
              last_row --;
          }
          if(l<=last_col)
          {
              for(i=last_row;i>=k;i--)
              {
                console.log(matrix[i][l]);
              }
              l++;
          }
      }
    }