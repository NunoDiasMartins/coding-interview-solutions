// O(n)
export function moveElementToEnd(array: number[], toMove: number) {
    var i = 0, j = array.length - 1;
    while (i < j) {
        if (array[i] === toMove) {
            if (array[j] === toMove) {
                j--;
            } else {
                array[i] = array[j];
                array[j] = toMove;
                i++;
            }
        } else {
            i++;
        }

    }
    return array;
}
