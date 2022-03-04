export function fourNumberSum(array: number[], targetSum: number) {
    const twoNumberSumHash: { [key: string]: number[][] } = {};
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i === j)
                continue;
            const sum = array[i] + array[j];
            if (twoNumberSumHash[sum])
                twoNumberSumHash[sum].push([i, j]);
            else
                twoNumberSumHash[sum] = [[i, j]];
        }
    }
    const result: number[][] = [];
    const existingResults: Set<string> = new Set();
    for (const [sum, allIndexCombinationsForSum] of Object.entries(twoNumberSumHash)) {
        const diff = targetSum - Number(sum);
        const allIndexCombinationsForDiff = twoNumberSumHash[diff];
        if (Array.isArray(allIndexCombinationsForDiff)) {
            for (const sumIndex of allIndexCombinationsForSum) {
                const [i, j] = sumIndex;
                const validIndexArrays = allIndexCombinationsForDiff.filter(index => !index.includes(i) && !index.includes(j));
                for (const indexArray of validIndexArrays) {
                    const entry = [array[i], array[j], array[indexArray[0]], array[indexArray[1]]];
                    entry.sort((a, b) => b - a);
                    if (!existingResults.has(entry.toString()))
                        result.push([array[i], array[j], array[indexArray[0]], array[indexArray[1]]]);
                    existingResults.add(entry.toString());
                }
            }
        }
    }
    return result;
}
