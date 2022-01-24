// This is an input class. Do not edit.
export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function findKthLargestValueInBst(tree: BST, k: number) {
    const array = this.findKthLargestNodeInBst(tree, k - 1, []);
    console.log(array);
    return array[k - 1];
}

export function findKthLargestNodeInBst(tree: BST, k: number, array: number[]): number[] {
    if (tree !== null) {
        this.findKthLargestNodeInBst(tree.right, k, array);
        if (array.length > k) {
            return array;
        }
        array.push(tree.value);
        this.findKthLargestNodeInBst(tree.left, k, array);
    }
    return array;
}

