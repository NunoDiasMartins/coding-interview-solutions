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

export function inOrderTraverse(tree: BST | null, array: number[]) {
  if (tree !== null) {
    this.inOrderTraverse(tree.left, array);
    array.push(tree.value);
    this.inOrderTraverse(tree.right, array);
  }
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  if (tree !== null) {
    array.push(tree.value);
    this.preOrderTraverse(tree.left, array);
    this.preOrderTraverse(tree.right, array);
  }
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  if (tree !== null) {
    this.postOrderTraverse(tree.left, array);
    this.postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}
