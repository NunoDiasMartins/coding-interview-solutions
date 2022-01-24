// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value: number): BST {
        if (value >= this.value) {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        } else {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        }
        return this;
    }

    contains(value: number): boolean {
        // Write your code here.
        return value === this.value
            || (this.left !== null && this.left.contains(value))
            || (this.right !== null && this.right.contains(value));
    }

    remove(value: number, parent: BST | null = null): BST {
        if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this)
            }
        } else if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this);
            }
        } else {
            //it mean we found our value
            if (this.right !== null && this.left !== null) {
                this.value = this.right.findLowestValue();
                this.right.remove(this.value, this);
            } else if (parent === null) {
                if (this.left !== null) {
                    this.swapNode(this, this.left);
                } else if (this.right !== null) {
                    this.swapNode(this, this.right);
                } else {
                    //single BST
                }
            } else if (parent.left === this) {
                parent.left = this.left !== null ? this.left : this.right;
            } else if (parent.right === this) {
                parent.right = this.left !== null ? this.left : this.right;
            }
        }



        // Do not edit the return statement of this method.
        return this;
    }

    swapNode(origin: BST, newNode: BST) {
        origin.left = newNode.left;
        origin.right = newNode.right;
        origin.value = newNode.value;
    }

    findLowestValue(): any {
        return this.left !== null
            ? this.left.findLowestValue()
            : this.value;
    }
}
