// This is an input class. Do not edit.
export class LinkedList {
    value: number;
    next: LinkedList | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
    let listOne: LinkedList | null = linkedListOne;
    let listTwo: LinkedList | null = linkedListTwo;

    const newListHead = new LinkedList(0);
    let newListTail = newListHead;
    let carry = 0;
    while (listOne !== null || listTwo !== null) {
        let val1 = 0;
        let val2 = 0;
        if (listOne !== null) {
            val1 = listOne.value
            listOne = listOne.next;
        }
        if (listTwo !== null) {
            val2 = listTwo.value
            listTwo = listTwo.next;
        }
        const total = (carry + val1 + val2) % 10;
        carry = Math.trunc((carry + val1 + val2) / 10);
        newListTail.next = new LinkedList(total);
        newListTail = newListTail.next;
    }


    while (carry > 0) {
        newListTail.next = new LinkedList(carry % 10);
        carry = Math.trunc(carry / 10);
        newListTail = newListTail.next;
    }

    return newListHead.next;
}
