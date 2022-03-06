//O(nlog(n)) time, O(1) space
export function largestRange(array: number[]): [number, number] {
    array.sort((a, b) => a - b);
    let currentRange: [number, number] = [array[0], array[0]];
    let biggerRange: [number, number] = [array[0], array[0]];

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1] + 1 || array[i] === array[i - 1]) {
            currentRange[1] = array[i];
        } else {

            if (biggerRange[1] - biggerRange[0] < currentRange[1] - currentRange[0]) {
                biggerRange = [currentRange[0], currentRange[1]];
            }

            currentRange[0] = array[i];
            currentRange[1] = array[i];
        }
    }
    if (biggerRange[1] - biggerRange[0] < currentRange[1] - currentRange[0]) {
        biggerRange = [currentRange[0], currentRange[1]];
    }

    return biggerRange;
}

// O(n) time, O(n) space
export function largestRangeOptimized(array: number[]): [number, number] {
    let nums: { [key: string]: boolean } = {};


    for (let i = 0; i < array.length; i++) {
        nums[array[i]] = false;
    }

    let longestLength = 0;
    let biggerRange: [number, number] = [array[0], array[0]];

    for (const num of array) {
        if (nums[num]) continue;

        let currentLength = 1;
        let leftNum = num - 1;
        let rightNum = num + 1;

        while (leftNum in nums) {
            nums[leftNum] = true;
            currentLength++;
            leftNum--;
        }
        while (rightNum in nums) {
            nums[rightNum] = true;
            currentLength++;
            rightNum++;
        }

        if (longestLength < currentLength) {
            longestLength = currentLength;
            biggerRange = [leftNum + 1, rightNum - 1];
        }

    }


    return biggerRange;
}
