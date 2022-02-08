// O(n) time and O(1) space
export function validStartingCity(distances: number[], fuel: number[], mpg: number) {

    let milesRemaining = 0;

    let milesRemainingCity = 0;
    let minRemainingFuelCityIndex = 0;
    for (let i = 1; i < distances.length; i++) {

        milesRemaining += fuel[i - 1] * mpg - distances[i - 1];

        if (milesRemaining < milesRemainingCity) {
            milesRemainingCity = milesRemaining;
            minRemainingFuelCityIndex = i;
        }
    }
    return minRemainingFuelCityIndex;
}
