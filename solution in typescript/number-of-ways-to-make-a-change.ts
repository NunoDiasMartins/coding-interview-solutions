export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
    const ways: number[] = new Array(n + 1).fill(0);
    ways[0] = 1;
    let dIndex = 0;
    while (dIndex < denoms.length && denoms[dIndex] <= n) {
        let demon = denoms[dIndex];
        for (let amount = 0; amount < ways.length; amount++) {
            if (demon <= amount) {
                ways[amount] += ways[amount - demon];
            }
        }
        dIndex++;
    }
    return ways[n];
}
