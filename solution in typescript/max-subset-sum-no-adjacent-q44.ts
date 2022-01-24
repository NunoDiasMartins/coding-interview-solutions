export function maxSubsetSumNoAdjacent(array: number[]) {
    const numOfSum = Math.round(array.length / 2);
    if (array.length === 0)
        return 0;
    if (array.length === 1)
        return array[0];

    let result: number[] = [array[0], Math.max(array[0], array[1])];
    let i = 2;

    while (i < array.length) {
        result = [result[1], Math.max(array[i] + result[0], result[1])];
        i++;
    }

    return result.pop();
}
