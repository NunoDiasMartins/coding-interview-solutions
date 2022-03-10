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

// time O(h) where h is the height of the three
export function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
    const isNodeTreeDescendant = this.findDescendant(nodeTwo, nodeThree.value);
    const isNodeOneDescendant = this.findDescendant(nodeTwo, nodeOne.value);

    if (isNodeTreeDescendant && isNodeOneDescendant || !isNodeTreeDescendant && !isNodeOneDescendant)
        return false;

    return isNodeTreeDescendant
        ? this.findDescendant(nodeOne, nodeTwo.value)
        : this.findDescendant(nodeThree, nodeTwo.value);
}

export function findDescendant(node: BST | null, descendantValue: number): boolean {
    if (node === null)
        return false;

    if (node.value === descendantValue) {
        return true;
    }

    if (node.value > descendantValue) {
        return this.findDescendant(node.left, descendantValue);
    } else {
        return this.findDescendant(node.right, descendantValue);
    }

}
// time O(d) where d is the distance between node One and  node Three 
export function validateThreeNodesBest(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {

    return this.findDescendantWithNodeMiddle(nodeOne, nodeThree.value, nodeTwo.value)
        || this.findDescendantWithNodeMiddle(nodeThree, nodeOne.value, nodeTwo.value);
}

export function findDescendantWithNodeMiddle(node: BST | null, descendantValue: number, middleValue: number, itPassedByMiddleValue = false): boolean {
    if (node === null)
        return false;

    if (node.value === descendantValue) {
        return itPassedByMiddleValue;
    }
    if (node.value > descendantValue) {
        return this.findDescendantWithNodeMiddle(node.left, descendantValue, middleValue, itPassedByMiddleValue || node.value === middleValue);
    } else {
        return this.findDescendantWithNodeMiddle(node.right, descendantValue, middleValue, itPassedByMiddleValue || node.value === middleValue);
    }

}