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
        if (node === this.tail) {
            this.tail = node.prev;
        }
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

        if (node === this.head) {
            this.head = node.next;
        }
        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;

    }

    insertBefore(node: Node, nodeToInsert: Node) {
        if (nodeToInsert.prev !== null)
            nodeToInsert.prev.next = nodeToInsert.next;
        if (nodeToInsert.next !== null)
            nodeToInsert.next.prev = nodeToInsert.prev;

        if (nodeToInsert === this.head)
            this.head = nodeToInsert.next;

        if (nodeToInsert === this.tail)
            this.tail = nodeToInsert.prev;


        nodeToInsert.prev = node.prev;
        if (node.prev !== null)
            node.prev.next = nodeToInsert;
        else //it is the head
            this.head = nodeToInsert;

        node.prev = nodeToInsert;
        nodeToInsert.next = node;
    }

    insertAfter(node: Node, nodeToInsert: Node) {
        if (nodeToInsert.prev !== null)
            nodeToInsert.prev.next = nodeToInsert.next;

        if (nodeToInsert === this.head)
            this.head = nodeToInsert.next;

        if (nodeToInsert.next !== null)
            nodeToInsert.next.prev = nodeToInsert.prev;

        if (nodeToInsert === this.tail)
            this.tail = nodeToInsert.prev;

        nodeToInsert.next = node.next;
        if (node.next !== null)
            node.next.prev = nodeToInsert;
        else //it is the tail
            this.tail = nodeToInsert;

        node.next = nodeToInsert;
        nodeToInsert.prev = node;

    }

    insertAtPosition(position: number, nodeToInsert: Node) {
        let nodePosition = this.head;

        for (let i = 1; i < position; i++) {
            if (nodePosition === null)
                return; //index is not possible;
            nodePosition = nodePosition.next;
        }

        if (nodePosition === null) {
            this.head = nodeToInsert;
            this.tail = nodeToInsert;
            return;
        }
        this.insertBefore(nodePosition, nodeToInsert)
    }

    removeNodesWithValue(value: number) {
        let nodePosition = this.head;
        while (nodePosition !== null) {
            if (nodePosition.value === value) {
                this.remove(nodePosition);
            }
            nodePosition = nodePosition.next;
        }
    }

    remove(node: Node) {
        if (node.prev === null)
            this.head = node.next;
        else
            node.prev.next = node.next;

        if (node.next === null)
            this.tail = node.prev;
        else
            node.next.prev = node.prev;
    }

    containsNodeWithValue(value: number) {
        let nodePosition = this.head;
        while (nodePosition !== null) {
            if (nodePosition.value === value) {
                return true;
            }
            nodePosition = nodePosition.next;
        }
        return false;
    }
}
