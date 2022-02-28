// O(n^2) time
export function nextGreaterElementLowePerformance(array: number[]) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(this.findNextBigElement(array, array[i], i));
    }
    return result;
}

export function findNextBigElement(array: number[], element: number, index: number) {
    let i = index;
    do {
        i = (i + 1) % array.length;
    } while (i !== index && array[i] <= element);

    return i === index ? -1 : array[i];
}
