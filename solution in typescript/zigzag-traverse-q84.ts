export function zigzagTraverse(array: number[][]) {
    const result: number[] = [];
    const currentPosition: [number, number] = [0, 0];
    let incrementPosition: [number, number] = [1, -1];
    const n = array.length;
    const m = array[0].length;


    while (currentPosition[0] !== n - 1 || currentPosition[1] != m - 1) {
        const [l, c] = currentPosition;
        console.log(currentPosition);
        result.push(array[l][c]);
        let newL = l + incrementPosition[0];
        let newC = c + incrementPosition[1];

        if (newL === - 1 && newC < m) {
            newL = 0;
            incrementPosition = [1, -1];
        } else if (newC === - 1 && newL < n) {
            newC = 0;
            incrementPosition = [-1, 1];
        } else if (newL === n) {
            newL = n - 1;
            newC = newC + 2;
            incrementPosition = [-1, 1];
        } else if (newC === m) {
            newC = m - 1;
            newL = newL + 2;
            incrementPosition = [1, -1];
        }
        currentPosition[0] = newL;
        currentPosition[1] = newC;
    }
    result.push(array[n - 1][m - 1]);

    return result;
}

