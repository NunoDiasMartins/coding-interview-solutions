interface position {
    r: number;
    c: number;
}

export function minimumPassesOfMatrix(matrix: number[][]) {
    const negativesPass: position[][] = [[]];
    const visitedNegativeNodes: Set<string> = new Set<string>();
    let totalOfNegatives = 0;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] > 0) {
                this.getNegativeAdj({ r, c }, matrix, negativesPass[0], visitedNegativeNodes);
            } else if (matrix[r][c] < 0) {
                totalOfNegatives++;
            }
        }
    }
    let num = 0;
    while (negativesPass[num].length > 0) {
        negativesPass.push([]);
        for (let i = 0; i < negativesPass[num].length; i++) {
            this.getNegativeAdj(negativesPass[num][i],
                matrix,
                negativesPass[num + 1],
                visitedNegativeNodes);
        }
        num++;
    }

    return visitedNegativeNodes.size === totalOfNegatives ? num : -1;
}

export function getNegativeAdj({ r, c }: position, matrix: number[][],
    negativeAdj: position[],
    visitedNegativeNodes: Set<String>
) {
    if (r > 0 && matrix[r - 1][c] < 0) {
        const key = `r${r - 1}c${c}`;
        if (!visitedNegativeNodes.has(key)) {
            negativeAdj.push({ r: r - 1, c });
            visitedNegativeNodes.add(key);
        }
    }
    if (c > 0 && matrix[r][c - 1] < 0) {
        const key = `r${r}c${c - 1}`;
        if (!visitedNegativeNodes.has(key)) {
            negativeAdj.push({ r, c: c - 1 });
            visitedNegativeNodes.add(key);
        }
    }
    if (r < matrix.length - 1 && matrix[r + 1][c] < 0) {
        const key = `r${r + 1}c${c}`;
        if (!visitedNegativeNodes.has(key)) {
            negativeAdj.push({ r: r + 1, c });
            visitedNegativeNodes.add(key);
        }
    }
    if (c < matrix[r].length - 1 && matrix[r][c + 1] < 0) {
        const key = `r${r}c${c + 1}`;
        if (!visitedNegativeNodes.has(key)) {
            negativeAdj.push({ r, c: c + 1 });
            visitedNegativeNodes.add(key);
        }
    }
    return negativeAdj;
}