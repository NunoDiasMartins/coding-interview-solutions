export function minNumberOfJumps(array: number[]) {
    const minJumps: number[] = Array(array.length).fill(Infinity);
    minJumps[0] = 0;
    const lastIndex = array.length - 1;
    for (let i = 0; i <= lastIndex; i++) {
        const value = array[i];
        const currentNumJumps = minJumps[i];
        for (let x = 1; x <= value && x + i <= lastIndex; x++) {
            const targetIndex = i + x;
            const currentJumpsInTheTarget = minJumps[targetIndex];
            minJumps[targetIndex] = Math.min(currentJumpsInTheTarget, currentNumJumps + 1);
        }
    }
    return minJumps[lastIndex];
}
