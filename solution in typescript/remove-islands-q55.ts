// O(wh) time and O(wn) space
export function removeIslands(matrix: number[][]) {
    const notIslandNodes = new Set<string>();

    for (let c = 0; c < matrix[0].length; c++) {
        this.addNotIslandsNodes(matrix, 0, c, notIslandNodes);
        this.addNotIslandsNodes(matrix, matrix.length - 1, c, notIslandNodes);
    }
    for (let r = 0; r < matrix.length; r++) {
        this.addNotIslandsNodes(matrix, r, 0, notIslandNodes);
        this.addNotIslandsNodes(matrix, r, matrix[0].length - 1, notIslandNodes);
    }
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            matrix[r][c] = notIslandNodes.has(`r${r}c${c}`)
                ? 1
                : 0;
        }
    }
    return matrix;
}

export function addNotIslandsNodes(matrix: number[][], row: number, col: number, notIslandNodes: Set<String>) {
    if (row >= 0 && row < matrix.length
        && col >= 0 && col < matrix[row].length
        && !notIslandNodes.has(`r${row}c${col}`)
    ) {
        if (matrix[row][col] === 1) {
            notIslandNodes.add(`r${row}c${col}`);
            this.addNotIslandsNodes(matrix, row - 1, col, notIslandNodes);
            this.addNotIslandsNodes(matrix, row + 1, col, notIslandNodes);
            this.addNotIslandsNodes(matrix, row, col + 1, notIslandNodes);
            this.addNotIslandsNodes(matrix, row, col - 1, notIslandNodes);
        }
    }
}