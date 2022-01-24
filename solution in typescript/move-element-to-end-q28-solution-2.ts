// O (n log(n))
export function moveElementToEnd(array: number[], toMove: number) {
    const sortFunction = (a: number, b: number) => a === toMove ? 1 : -1;
    return array.sort(sortFunction);;
}
