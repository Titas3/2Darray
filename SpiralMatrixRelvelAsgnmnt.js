function spiralPrint(f, h, arr) {
	let i, e = 0, g = 0;
	/*
		e - starting row index
		f - ending row index
		g - starting column index
		h - ending column index
		i - iterator
	*/

	while (e < f && g < h) {
		// print the first row 
		for (i = g; i < h; ++i) {
			console.log(arr[e][i] + ' ');
		}
		e++;

		// print the last column 
		for (i = e; i < f; ++i) {
			console.log(arr[i][h - 1] + ' ');
		}
		h--;

		// print the last row 
		if (e < f) {
			for (i = h - 1; i >= g; --i) {
				console.log(arr[f - 1][i] + ' ');
			}
			f--;
		}

		// print the first column 
		if (g < h) {
			for (i = f - 1; i >= e; --i) {
				console.log(arr[i][g] + ' ');
			}
			g++;
		}
	}
}

// input 2D Array
let arr = [ [1, 2, 3, 4, 5, 6],
			[7, 8, 9, 10, 11, 12],
			[13, 14, 15, 16, 17, 18]
		];
let r = arr.length;
let c = arr[0].length;

//execute logic
spiralPrint(r, c, arr);

