// This is an input class. Do not edit.
export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function heightBalancedBinaryTree(tree: BinaryTree) {
    this.getHeightBalancedBinaryTree(tree);
    return this.getHeightBalancedBinaryTree(tree) !== Infinity;
}

export function getHeightBalancedBinaryTree(tree: BinaryTree) {
    if (tree === null) {
        return 0;
    }
    const leftHeight = this.getHeightBalancedBinaryTree(tree.left);
    const rightHeight = this.getHeightBalancedBinaryTree(tree.right);
    const diff = Math.abs(leftHeight - rightHeight);
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return Infinity;
    }
    return Math.max(leftHeight, rightHeight) + 1;
}
