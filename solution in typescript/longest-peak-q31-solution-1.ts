export function longestPeak(array: number[]) {
    var longestPeak = 0;
    var currentPeak = 1;
    var isStartDecreasing = false;
    var i = 1;
    while (i < array.length && array[i] <= array[i - 1]) {
        i++;
    }
    for (; i < array.length; i++) {
        currentPeak++;
        if (isStartDecreasing) {
            if (array[i] >= array[i - 1]) {

                if (longestPeak < currentPeak - 1) {
                    longestPeak = currentPeak - 1;
                }
                isStartDecreasing = false;
                currentPeak = 1;
                if (array[i] > array[i - 1]) currentPeak = 2;
            }

        } else {
            if (array[i] === array[i - 1]) {
                currentPeak = 1;
                while (i < array.length && array[i] <= array[i - 1]) {
                    i++;
                }
                i--; //reposition to latest lower number next in the array
            } else if (array[i] < array[i - 1]) {
                isStartDecreasing = true;
            }
        }
    }
    return longestPeak < currentPeak && isStartDecreasing ? currentPeak : longestPeak;
}
