// O(n) time | O(1) space
export function hasSingleCycle(array: number[]) {
    const arrSize = array.length;
    const totalIndex = (arrSize * (arrSize + 1)) / 2
    let sumIndex = 0;
    let index = 0;
    do {
        sumIndex += index + 1;
        index = this.calculateCircularIndex(index + array[index], arrSize);
    } while (sumIndex < totalIndex && index !== 0);

    return sumIndex === totalIndex && index === 0;
}

export function calculateCircularIndex(newIndex: number, size: number) {
    if (newIndex >= 0) {
        return newIndex % size;
    }
    return (size - (Math.abs(newIndex) % size)) % size;
}