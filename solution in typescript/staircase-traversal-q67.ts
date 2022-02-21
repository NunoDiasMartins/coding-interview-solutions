export function staircaseTraversal(height: number, maxSteps: number, memory: number[] = [1, 1]) {
    if (memory.length > height) {
        return memory[height];
    }
    let total = 0;
    for (let i = 1; i <= maxSteps && height - i >= 0; i++) {
        total += this.staircaseTraversal(height - i, maxSteps, memory);
    }
    memory.push(total);
    return total
}
