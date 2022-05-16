Array.prototype.reshape = function(rows, cols) {
    var copy = this.slice(0); // Copy all elements.
    this.length = 0; // Clear out existing array.
  
    for (var r = 0; r < rows; r++) {
      var row = [];
      for (var c = 0; c < cols; c++) {
        var i = r * cols + c;
        if (i < copy.length) {
          row.push(copy[i]);
        }
      }
      this.push(row);
    }
  };
  
  m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
  
  m1.reshape(2, 5); // Reshape array in-place.
  
  console.log(m1);







