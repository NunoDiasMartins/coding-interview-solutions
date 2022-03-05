type Range = [number, number];

export function subarraySort(array: number[]): Range {

    let previousValue = array[0]; 3
    let i = 1;
    while (i < array.length && previousValue <= array[i]) {
        previousValue = array[i];
        i++;
    }

    if (i === array.length)
        return [-1, -1];

    let subArrayMinValue = array[i];
    for (let j = i; j < array.length; j++) {
        if (subArrayMinValue > array[j])
            subArrayMinValue = array[j];
    }

    while (--i >= 0 && array[i] > subArrayMinValue);
    const startIndex = i === -1 ? 0 : i + 1;


    let endIndex = array.length;
    while (--endIndex > startIndex
        && array[endIndex - 1] <= array[endIndex]);

    let biggerValue = array[endIndex - 1];

    while (endIndex < array.length && array[endIndex] < biggerValue) endIndex++;

    return [startIndex, endIndex - 1];
}
