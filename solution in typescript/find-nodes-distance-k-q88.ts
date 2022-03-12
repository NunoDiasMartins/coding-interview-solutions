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

export function findNodesDistanceK(tree: BinaryTree, target: number, k: number) {
    const pathToTargetNodeOnLeft: BinaryTree[] = this.getNodesPathToK(tree.left, target);
    const pathToTargetNodeOnRight: BinaryTree[] = this.getNodesPathToK(tree.right, target);

    if (target === tree.value) {
        return this.getAllValuesAtLevelK(tree, k);
    }

    if (!pathToTargetNodeOnLeft && !pathToTargetNodeOnRight)
        return [];

    const reversePath: BinaryTree[] = pathToTargetNodeOnLeft ?? pathToTargetNodeOnRight;
    const otherBranch = pathToTargetNodeOnLeft ? tree.right : tree.left;
    const result = this.getAllValuesAtLevelK(reversePath[0], k);

    let i = 1;
    while (i < reversePath.length && i <= k) {
        console.log(i + '----------');
        console.log(reversePath[i]);

        if (k - i === 0) {
            result.push(reversePath[i].value);
            break;
        }

        const branchToConsider = reversePath[i - 1] === reversePath[i].left
            ? reversePath[i].right
            : reversePath[i].left;

        result.push(...this.getAllValuesAtLevelK(branchToConsider, k - i - 1));
        i++;
    }

    if (reversePath.length === 1 && k === 1) {
        // it is a direct child from the route and K it is just one
        result.push(tree.value);
    } else if (i < k) {
        result.push(...this.getAllValuesAtLevelK(otherBranch, k - i - 1));
    }

    return result;
}

export function getAllValuesAtLevelK(tree: BinaryTree, k: number): number[] {
    if (tree === null) {
        return [];
    }
    if (k === 0) {
        return [tree.value];
    }

    return this.getAllValuesAtLevelK(tree.left, k - 1).concat(this.getAllValuesAtLevelK(tree.right, k - 1))
}


export function getNodesPathToK(tree: BinaryTree, target: number): BinaryTree[] | null {
    if (tree === null)
        return null;

    if (tree.value === target) {
        return [tree];
    }

    const left = this.getNodesPathToK(tree.left, target);

    if (left !== null) {
        left.push(tree);
        return left;
    }

    const right = this.getNodesPathToK(tree.right, target);
    if (right !== null) {
        right.push(tree);
        return right;
    }

    return null;

}
