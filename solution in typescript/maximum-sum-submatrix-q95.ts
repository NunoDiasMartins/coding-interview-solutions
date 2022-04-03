export function maximumSumSubmatrix(matrix: number[][], size: number) {
    const sumHeightMatrix = matrix.map(array => this.getSumArrayForSizeElements(array, size));
    let maxValue = -Infinity;
    for (let i = 0; i < sumHeightMatrix[0].length; i++) {
        maxValue = Math.max(this.getMaxFromSumArrayForSizeElementsByCol(sumHeightMatrix, i, size), maxValue);
    }
    return maxValue;
}


export function getSumArrayForSizeElements(array: number[], size: number): number[] {
    let resultArray = [array[0]];
    for (let i = 1; i < size; i++) {
        resultArray[0] += array[i];
    }
    for (let i = 1; i <= array.length - size; i++) {
        resultArray[i] = resultArray[i - 1] - array[i - 1] + array[i + size - 1];
    }
    return resultArray;
}

export function getMaxFromSumArrayForSizeElementsByCol(matrix: number[][], col: number, size: number): number {
    let currentValue = matrix[0][col];
    for (let i = 1; i < size; i++) {
        currentValue += matrix[i][col];
    }
    let maxValue = currentValue;

    for (let i = 1; i <= matrix.length - size; i++) {
        currentValue = currentValue - matrix[i - 1][col] + matrix[i + size - 1][col];
        maxValue = Math.max(currentValue, maxValue);
    }
    return maxValue;
}

 