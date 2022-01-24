type Triplet = [number, number, number];
type Element = {
    number: number,
    left: number,
    right: number
}
export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
    const newArray = array.sort((a, b) => a - b).map((value, index): Element => {
        return {
            number: value,
            left: index + 1,
            right: array.length - 1
        }
    });

    const result: Triplet[] = [];
    for (var i = 0; i < newArray.length - 2; i++) {
        const element: Element = newArray[i];
        while (element.left < element.right) {
            const sum = newArray[i].number + array[element.left] + array[element.right];

            if (sum === targetSum) {
                result.push([element.number, array[element.left], array[element.right]])
                element.right--;
                element.left++;
            } else if (sum > targetSum) {
                element.right--;
            } else {
                element.left++;
            }
        }
    }
    return result;
}
