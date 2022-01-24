// This is an input class. Do not edit.
class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function validateBst(tree: BST | null,
    minValue: number = -Infinity,
    maxValue: number = Infinity) {
    if (tree == null) {
        return true;
    }
    if (tree.value < minValue || tree.value >= maxValue) {
        return false;
    }

    return this.validateBst(tree.left, minValue, tree.value)
        && this.validateBst(tree.right, tree.value, maxValue);
}
