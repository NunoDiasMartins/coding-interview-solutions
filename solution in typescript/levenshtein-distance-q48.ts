// O(nm) time | O(nm) space
export function levenshteinDistanceSolutionOne(str1: string, str2: string) {
	const array: number [][] = [Array.from(Array(str2.length+1).keys())];
  for(let r = 1; r < str1.length + 1; r++) {
		const currentRow = [r];
		for(let c = 1; c < str2.length + 1; c++) {
			if(str1[r-1] === str2[c-1]) {
				currentRow.push(array[r - 1][c - 1]);	
			}else {
 				currentRow.push(1 + Math.min(currentRow[c - 1], array[r - 1][c], array[r - 1][c - 1]));
			}
		}
		array.push(currentRow);
	}
  return array[str1.length][str2.length];
}

// O(nm) time | O(Min(n,m) space
export function levenshteinDistanceSolution2(str1: string, str2: string) {
	const bigStr = str1.length >= str2.length ? str1 : str2;  
	const smallStr = str1.length >= str2.length ? str2 : str1;
	let previousRow: number [] = Array.from(Array(smallStr.length + 1).keys());

  for(let r = 1; r < bigStr.length + 1; r++) {
		const currentRow: number[] = [ r ];
		for(let c = 1; c < smallStr.length + 1; c++) {
			if(bigStr[r-1] === smallStr[c-1]) {
				currentRow.push(previousRow[c - 1]);	
			} else {
 				currentRow.push(1 + Math.min(currentRow[c - 1], previousRow[c], previousRow[c - 1]));
			}
		}
		previousRow = currentRow;
	}
  return previousRow[smallStr.length];
}
