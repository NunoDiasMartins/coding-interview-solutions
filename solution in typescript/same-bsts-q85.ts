export function sameBsts(arrayOne: number[], arrayTwo: number[]) {
    if (arrayOne.length === 0 && arrayTwo.length === 0)
        return true;

    if (arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length)
        return false;

    let left: number[][] = [[], []];
    let right: number[][] = [[], []];
    for (let i = 1; i < arrayOne.length; i++) {
        if (arrayOne[i] < arrayOne[0]) {
            left[0].push(arrayOne[i])
        } else {
            right[0].push(arrayOne[i])
        }
        if (arrayTwo[i] < arrayOne[0]) {
            left[1].push(arrayTwo[i])
        } else {
            right[1].push(arrayTwo[i])
        }
    }

    return this.sameBsts(left[0], left[1]) && this.sameBsts(right[0], right[1]);
}

