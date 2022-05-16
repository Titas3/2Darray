
// Java script implementation of the above approach
let N = 4;
	
	// Function to find the sum of all diagonal
	// and Boundary elements
	function diagonalBoundarySum(arr){
		let requiredSum = 0;
		
		// Traverse arr[][]
		// Loop from i to N-1 for rows
		for (let i = 0; i < N; i++) {
	
			// Loop from j = N-1 for columns
			for (let j = 0; j < N; j++) {
	
				// Condition for diagonal
				// elements
				if (i == j || (i + j) == N - 1) {
					requiredSum += arr[i][j];
				}
	
				// Condition for Boundary
				// elements
				else if (i == 0 || j == 0 || i == N - 1|| j == N - 1) {
					requiredSum += arr[i][j];
				}
			}
		}
	
		// Print the final Sum
		document.write(requiredSum);
	}
	
	// Driver Code
	
		let arr = [[ 1, 2, 3, 4 ],[ 1, 2, 3, 4 ],
						[1, 2, 3, 4 ],[ 1, 2, 3, 4 ]];
	
		diagonalBoundarySum(arr);
	
        [1, 2, 3, 4, 1],
        [5, 6, 7, 8, 2],
        [9, 10,11,12,13],
        [13,14,15,16,15],
        [11,12,15,19,15]
        