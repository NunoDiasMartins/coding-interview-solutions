export function sortStack(stack: number[]) {
    return stack.length === 0 ? [] : this.sortStackAux(stack, stack.pop());
}

export function sortStackAux(stack: number[], previousElement: number): number[] {
    if (stack.length === 0) {
        stack.push(previousElement);
        return stack;
    }
    const currentElement: number = stack.pop()!;
    const min = Math.min(previousElement, currentElement);
    const max = Math.max(previousElement, currentElement);
    this.sortStackAux(stack, min);

    if (stack[stack.length - 1] > max) {
        this.sortStackAux(stack, max);
    } else {
        stack.push(max);
    }
    return stack;
}