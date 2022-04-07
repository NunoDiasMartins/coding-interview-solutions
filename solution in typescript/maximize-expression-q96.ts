export function maximizeExpression(array: number[]) {
    if (array.length < 4)
        return 0;

    const abCalculations: number[][] = this.getAllCombinations(array, 0, array.length - 2);
    const cdCalculations: number[][] = this.getAllCombinations(array, 2, array.length);

    const cdMaxs: number[] = this.getAllMaxValues(array, 2, array.length);

    let max = -Infinity;
    for (let i = 0; i < abCalculations.length; i++) {

        for (let j = 0; j < abCalculations[i].length; j++) {
            const maxs = cdMaxs.slice(i + j);
            const value = Math.max(...maxs) + abCalculations[i][j];

            max = Math.max(value, max)
        }
    }
    console.log(abCalculations);
    console.log(cdCalculations);

    console.log(cdMaxs);
    return max;
}

export function getAllCombinations(array: number[], startIndex: number, endIndex: number): number[][] {
    const result: number[][] = [];
    for (let i = startIndex; i < endIndex; i++) {
        result.push(this.getPossibleValues(array, i, endIndex));
    }
    return result;
}

export function getAllMaxValues(array: number[], startIndex: number, endIndex: number): number[] {
    const result: number[] = [];
    for (let i = startIndex; i < endIndex - 1; i++) {
        result.push(this.getMaxValue(array, i, endIndex));
    }
    return result;
}

export function getPossibleValues(array: number[], startIndex: number, endIndex: number): number[] {
    const result: number[] = [];
    for (let i = startIndex + 1; i < endIndex; i++) {
        result.push(array[startIndex] - array[i]);
    }
    return result;
}

export function getMaxValue(array: number[], startIndex: number, endIndex: number): number {
    let max = -Infinity;

    for (let i = startIndex + 1; i < endIndex; i++) {
        max = Math.max(array[startIndex] - array[i], max);
    }
    return max;
}
