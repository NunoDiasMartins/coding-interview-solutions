class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function invertBinaryTree(tree: BinaryTree | null) {
    if (tree !== null) {
        const temp = tree.left;
        tree.left = this.invertBinaryTree(tree.right);
        tree.right = this.invertBinaryTree(temp);
    }
    return tree;
}
