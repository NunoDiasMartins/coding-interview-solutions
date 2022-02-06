// O(nlog(n)) time and O(n) space
export function taskAssignment(k: number, tasks: number[]) {
    const sortedTasksByValue: { value: number, index: number }[] = tasks.map((task: number, index: number) => {
        return { value: task, index };
    }).sort((a, b) => b.value - a.value);
    const result: number[][] = [];
    const middleOfArray = sortedTasksByValue.length / 2;
    for (let i = 0; i < sortedTasksByValue.length / 2; i++) {
        result.push([sortedTasksByValue[i].index, sortedTasksByValue[sortedTasksByValue.length - 1 - i].index]);
    }
    return result;
}
