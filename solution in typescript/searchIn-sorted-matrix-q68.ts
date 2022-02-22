type Range = [number, number];

export function searchInSortedMatrix(matrix: number[][], target: number): Range {
    let c = 0, r = 0;
    while (r < matrix.length) {

        const currentValue = matrix[r][c];
        if (currentValue === target)
            return [r, c];
        if (currentValue > target) {
            r++;
            c = this.findNextColumnIndex(matrix[r], c - 1, target);
        } else {
            if (c < matrix[r].length - 1)
                c++;
            else
                r++;
        }

    }
    return [-1, -1];
}

/*
 * It will return the column index of the next row that is equal or smaller than the target value
 */
export function findNextColumnIndex(row: number[], endIndex: number, target: number): number {
    if (row === undefined)
        return 0;
    let i = Math.min(endIndex, row.length - 1);
    while (endIndex > 0 && row[i] >= target) {
        i--;
    }
    return i;
}