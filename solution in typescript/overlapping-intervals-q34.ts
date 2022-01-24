export function mergeOverlappingIntervals(array: number[][]) {
    const result: number[][] = [];
    array.sort((intervalOne, intervalTwo) => intervalOne[0] - intervalTwo[0]);
    var overlapInterval = [array[0][0], array[0][1]];
    for (var i = 1; i < array.length; i++) {
        if (overlapInterval[1] >= array[i][0]) {
            overlapInterval[1] = Math.max(overlapInterval[1], array[i][1]);
        } else {
            result.push(overlapInterval);
            overlapInterval = [array[i][0], array[i][1]];
        }
    }
    result.push(overlapInterval);
    return result;
}
