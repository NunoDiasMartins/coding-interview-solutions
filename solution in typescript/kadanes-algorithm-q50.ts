// time O(n)) , space O(1)
export function kadanesAlgorithmBestSolution(array: number[]) {
    if (array.length === 0) {
        return 0;
    }
    let maximumSum = array[0];
    let previousMax = maximumSum;
    for (let i = 1; i < array.length; i++) {
        previousMax = Math.max(array[i], array[i] + previousMax);
        maximumSum = Math.max(maximumSum, previousMax);
    }
    return maximumSum;
}

// time O(nLog(n)) , space O(n)
export function kadanesAlgorithm(array: number[]) {
    if (array.length === 0) {
        return 0;
    }

    let maximumSum = array[0];
    let previousSums: number[] = [array[0]];
    for (let i = 1; i < array.length; i++) {
        for (let c = 0; c < previousSums.length; c++) {
            previousSums[c] += array[i];
            maximumSum = Math.max(maximumSum, previousSums[c]);
        }
        previousSums.unshift(array[i]);
        maximumSum = Math.max(maximumSum, previousSums[0]);

    }
    return maximumSum;
}
