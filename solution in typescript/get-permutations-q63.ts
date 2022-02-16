export function getPermutations(array: number[]) {
    const permutations: number[][] = [];
    if (array.length === 1) {
        return [[array[0]]];
    }
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        array.splice(i, 1);

        const possiblePermutations = this.getPermutations(array);
        //append the element to the begin
        possiblePermutations.forEach((p: number[]) => {
            p.unshift(element);
        });

        permutations.push(...possiblePermutations);
        //putting back the element
        array.splice(i, 0, element);
    }
    return permutations;
}
