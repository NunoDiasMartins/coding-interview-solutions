export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
    const numOfCoins = new Array(n + 1).fill(-1);
    numOfCoins[0] = 0;
    for (const denom of denoms) {
        let currentAmount = 1;
        while (currentAmount < numOfCoins.length) {
            if (currentAmount >= denom && numOfCoins[currentAmount - denom] > -1) {
                const newWay = 1 + numOfCoins[currentAmount - denom];
                numOfCoins[currentAmount] = numOfCoins[currentAmount] > 0
                    ? Math.min(newWay, numOfCoins[currentAmount])
                    : newWay;
            }
            currentAmount++;
        }
    }
    return numOfCoins[n];
}
