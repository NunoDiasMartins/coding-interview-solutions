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

export class Node {
    biggestDiameter: number;
    longestPath: number;

    constructor(total: number, longest: number) {
        this.biggestDiameter = total;
        this.longestPath = longest;
    }
}

export function binaryTreeDiameter_aux(tree: BinaryTree | null, biggerDiameter: Node | null = null): Node {
    if (tree === null) {
        return new Node(0, 0);
    }

    const left = this.binaryTreeDiameter_aux(tree.left);
    const right = this.binaryTreeDiameter_aux(tree.right);

    const currentNodeDiameter = left.longestPath + right.longestPath;
    const currentlongest = Math.max(left.longestPath, right.longestPath) + 1;
    const biggestDiameter = Math.max(currentNodeDiameter, left.biggestDiameter, right.biggestDiameter);

    return new Node(biggestDiameter, currentlongest);

}
export function binaryTreeDiameter(tree: BinaryTree) {
    if (tree === null) return 0;

    const biggestDiameter = this.binaryTreeDiameter_aux(tree).biggestDiameter;

    return biggestDiameter;
}
