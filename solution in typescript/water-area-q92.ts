export function waterArea(heights: number[]) {
    let initialWallIndex = heights.findIndex(x => x > 0);
    if (initialWallIndex === -1)
        return 0;
    let result = 0;
    let previousWallAreas = 0;
    let i = heights.length - 1;
    let maxFromEnd = 0;
    let maxIndex = i;
    //find the max wall from right to left
    for (; i > 0; i--) {
        if (heights[i] > maxFromEnd) {
            maxFromEnd = heights[i];
            maxIndex = i;
        }
    }

    i = initialWallIndex + 1;

    while (i <= maxIndex) {
        if (heights[initialWallIndex] < heights[i] || i === maxIndex) {
            const minHeight = Math.min(heights[initialWallIndex], heights[i]);
            const area = minHeight * (i - initialWallIndex - 1) - previousWallAreas;
            result += area;
            previousWallAreas = 0;
            initialWallIndex = i;
        } else {
            previousWallAreas += heights[i]
        }
        i++;
    }

    initialWallIndex = -Infinity;
    previousWallAreas = 0;
    i = heights.length;

    console.log("half result " + result);
    while (i > maxIndex) {
        i--;
        if (heights[i] === 0) {
            continue;
        }
        if (initialWallIndex < i) {
            initialWallIndex = i;
            continue;
        }
        if (heights[initialWallIndex] <= heights[i] || i === maxIndex) {
            const minHeight = Math.min(heights[initialWallIndex], heights[i]);
            const area = minHeight * (initialWallIndex - i - 1) - previousWallAreas;
            result += area;
            previousWallAreas = 0;
            initialWallIndex = i;
        } else {
            previousWallAreas += heights[i]
        }
    }


    return result;
}
