export function isMonotonic(array: number[]) {

    if (array.length < 2) {
        return true;
    }
    var index = 1;
    var isIncreasing = array[array.length - 1] - array[0] > 0;
    while (index < array.length) {
        const diff = array[index] - array[index - 1]
        if (isIncreasing && diff < 0) {
            return false;
        } else if (!isIncreasing && diff > 0) {
            return false;
        }
        index++;
    }
    return true;
}
