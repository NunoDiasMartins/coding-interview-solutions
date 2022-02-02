//O(wh) space and time
export function riverSizes(matrix: number[][]) {
    const resultArray: number[] = [];
    const visitedNodes: Set<String> = new Set<string>();
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (visitedNodes.has(r + '' + c)) {
                continue;
            }
            if (matrix[r][c] === 1) {
                resultArray.push(this.getRiverLength(matrix, r, c, visitedNodes));
            }
        }
    }
    return resultArray;
}

export function getRiverLength(matrix: number[][], row: number, col: number, visitedNodes: Set<String>) {
    const key = row + '' + col;

    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[row].length
        || visitedNodes.has(key) || matrix[row][col] === 0)
        return 0;

    visitedNodes.add(key);
    return 1
        + this.getRiverLength(matrix, row - 1, col, visitedNodes)
        + this.getRiverLength(matrix, row + 1, col, visitedNodes)
        + this.getRiverLength(matrix, row, col - 1, visitedNodes)
        + this.getRiverLength(matrix, row, col + 1, visitedNodes);
}