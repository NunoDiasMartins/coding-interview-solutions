export function firstDuplicateValue(array: number[]) {
    const set = new Set<number>();
    for (var i = 0; i < array.length; i++) {
        if (set.has(array[i])) {
            return array[i];
        }
        set.add(array[i])
    }
    return -1;
}
