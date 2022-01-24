// TO(n^2) the optimal solution would be O(n)
export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number, left: BST | null = null, right: BST | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

export function reconstructBst(preOrderTraversalValues: number[],
    currentIndex: number = 0,
    endIndex: number = preOrderTraversalValues.length): BST | null {
    if (currentIndex === endIndex)
        return null;

    const currentValue = preOrderTraversalValues[currentIndex];
    var rightBranchIndex = currentIndex + 1;
    while (rightBranchIndex < endIndex &&
        currentValue > preOrderTraversalValues[rightBranchIndex]) {
        rightBranchIndex++;
    }

    const bst = new BST(currentValue,
        this.reconstructBst(preOrderTraversalValues, currentIndex + 1, rightBranchIndex),
        this.reconstructBst(preOrderTraversalValues, rightBranchIndex, endIndex)
    );
    return bst;
}
