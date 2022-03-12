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

export function maxPathSum(tree: BinaryTree) {
    if (tree === null)
        return 0;

    const maxPaths = this.maxPathSumAux(tree);

    return maxPaths[1];

}
export function maxPathSumAux(tree: BinaryTree): number[] {
    if (tree === null)
        return [-Infinity, -Infinity];

    const leftSubTreeResult = this.maxPathSumAux(tree.left);
    const rightSubTreeResult = this.maxPathSumAux(tree.right);
    const sumValueWithSubTree = tree.value + Math.max(rightSubTreeResult[0], leftSubTreeResult[0], 0);
    const totalSubTree = tree.value + Math.max(rightSubTreeResult[0], 0) + Math.max(leftSubTreeResult[0], 0);
    return [sumValueWithSubTree, Math.max(totalSubTree, rightSubTreeResult[0], rightSubTreeResult[1], leftSubTreeResult[0], leftSubTreeResult[1])];
}
