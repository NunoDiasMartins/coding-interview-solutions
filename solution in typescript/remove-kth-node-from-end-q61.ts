// This is an input class. Do not edit.
export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {

    let node: LinkedList | null = head;
    for (let i = 0; i < k; i++) {
        node = node!.next;
    }

    let kNode: LinkedList | null = head;

    while (node !== null && node?.next !== null) {
        node = node!.next;
        kNode = kNode!.next;
    }

    if (k > 1) {
        kNode = node === null ? kNode : kNode!.next;
        kNode!.value = kNode!.next!.value;
        kNode!.next = kNode!.next!.next;
    } else {
        kNode!.next = null;
    }

    return head;
}
