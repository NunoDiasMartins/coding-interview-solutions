export function spiralTraverse(array: number[][]) {
    var l = 0;
    var c = 0;
    var increment = [0, 1];
    var result = [];
    const maxC = array[0].length;
    const maxL = array.length;
    var factor = 0;
    while (result.length < maxL * maxC) {
        result.push(array[l][c]);

        if (increment[1] + c === maxC - factor) {

            increment = [1, 0];
        } else if (increment[1] + c - factor === - 1) {
            increment = [-1, 0];

        } else if (increment[0] + l === maxL - factor) {
            increment = [0, -1];
        }
        //check if did the loop
        if (l === 1 + factor && c === factor) {
            factor++; //one loop around the array was done
        }

        if (increment[0] + l - factor === -1) {
            increment = [0, 1];
        }

        l += increment[0];
        c += increment[1];
    }
    return result;
}
