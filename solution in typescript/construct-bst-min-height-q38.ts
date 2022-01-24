/**
 *
 * the solution it is O( n.log(n)) because of the insertion method.
 * I could make it O(n) if I didn't used the insert and just create new BST and assign the left and right nodes.
 */

export function minHeightBst(array: number[]) {
    array.sort((a, b) => a - b);

    const middleIndex = Math.trunc(array.length / 2);
    const bst = new BST(array[middleIndex])


    if (array.length > 1) {
        this.minHeightBst_aux(bst, array, 0, middleIndex - 1);
        if (array.length > 2) {
            this.minHeightBst_aux(bst, array, middleIndex + 1, array.length - 1);
        }
    }

    return bst;
}

export function minHeightBst_aux(bst: BST, array: number[], startIndex: number, endIndex: number) {
    if (endIndex - startIndex < 2) {
        bst.insert(array[endIndex])
        if (endIndex - startIndex === 1) {
            bst.insert(array[startIndex])
        }
        return;
    }
    const index = Math.trunc((endIndex - startIndex) / 2) + startIndex;

    bst.insert(array[index]);
    this.minHeightBst_aux(bst, array, startIndex, index - 1);
    this.minHeightBst_aux(bst, array, index + 1, endIndex);
}

export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value: number) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}



