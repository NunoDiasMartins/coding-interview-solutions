export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
    // Write your code here.
    const sortAsc = (a: number, b: number) => a - b;
    arrayOne.sort(sortAsc);
    arrayTwo.sort(sortAsc);
    // This array will contain the index of array two which has the min difference for each element of array one
    // In position 0 it will contain the index of array two where arrayOne position 0 has the min diffence to 0
    const minDifferencesArrayTwoIndex = [];

    for (var i = 0; i < arrayOne.length; i++) {
        var minDiffToZero = this.differenceAbs(arrayOne[i], arrayTwo[0]);
        console.log(arrayOne[i] + " - " + arrayTwo[0] + " = " + minDiffToZero);

        var j = 1;
        var stop = false;
        while (!stop && j < arrayTwo.length) {
            const diff = this.differenceAbs(arrayOne[i], arrayTwo[j]);
            console.log(arrayOne[i] + " - " + arrayTwo[j] + " = " + diff);

            stop = diff > minDiffToZero;
            minDiffToZero = diff;
            j++;
        }
        minDifferencesArrayTwoIndex[i] = j - (stop ? 2 : 1);


    }
    var minDiff = this.differenceAbs(arrayOne[0], arrayTwo[minDifferencesArrayTwoIndex[0]]);
    var minIndex = 0;
    console.log(arrayOne)
    console.log(arrayTwo)

    console.log(minDifferencesArrayTwoIndex)

    for (var i = 1; i < minDifferencesArrayTwoIndex.length; i++) {
        const diff = this.differenceAbs(arrayOne[i], arrayTwo[minDifferencesArrayTwoIndex[i]]);

        if (minDiff > diff) {
            minDiff = diff;
            minIndex = i;
        }
    }
    return [arrayOne[minIndex], arrayTwo[minDifferencesArrayTwoIndex[minIndex]]];
}

export function differenceAbs(a: number, b: number): number {
    return Math.abs(a - b);
}