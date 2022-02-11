// This is an input class. Do not edit.
export class Node {
    value: number;
    prev: Node | null;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node: Node) {
        if (node === null)
            return;
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        if (node.prev !== null)
            node.prev.next = node.next;
        if (node.next !== null)
            node.next.prev = node.prev;

        this.head.prev = node;
        node.next = this.head;
        node.prev = null;
        this.head = node;
    }

    setTail(node: Node) {
        if (node === null)
            return;
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        if (node.prev !== null)
            node.prev.next = node.next;
        if (node.next !== null)
            node.next.prev = node.prev;

        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;
    }

    insertBefore(node: Node, nodeToInsert: Node) {

        if (nodeToInsert.prev !== null)
            nodeToInsert.prev.next = node.next;
        if (nodeToInsert.next !== null)
            nodeToInsert.next.prev = node.prev;

        nodeToInsert.prev = node.prev;
        if (node.prev !== null)
            node.prev.next = nodeToInsert;

        node.prev = nodeToInsert;
        nodeToInsert.next = node;
    }

    insertAfter(node: Node, nodeToInsert: Node) {
        // Write your code here.
    }

    insertAtPosition(position: number, nodeToInsert: Node) {
        // Write your code here.
    }

    removeNodesWithValue(value: number) {
        // Write your code here.
    }

    remove(node: Node) {
        // Write your code here.
    }

    containsNodeWithValue(value: number) {
        // Write your code here.
        return false;
    }
}
