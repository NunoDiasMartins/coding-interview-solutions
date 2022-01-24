// This is an input class. Do not edit.
export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
    parent: BinaryTree | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
    if (node.right !== null) {
        let mostLeftNode = node.right;
        while (mostLeftNode.left !== null) {
            mostLeftNode = mostLeftNode.left;
        }
        return mostLeftNode;
    }
    let parentNode = node.parent;
    let previousVisitedNode = node;
    while (parentNode !== null && parentNode.left !== previousVisitedNode) {
        previousVisitedNode = parentNode;
        parentNode = parentNode.parent;
    }
    return parentNode;
}
