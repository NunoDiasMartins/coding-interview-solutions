export function powerset(array: number[]) {
    const result = [[]];
    if (array.length > 0)
        result.push(...this.powerSetAux(array));
    return result;
}

export function powerSetAux(array: number[], index = 0) {
    const powerSet: number[][] = [[array[index]]];
    if (array.length - 1 === index) {
        return powerSet;
    }

    const element = array[index];
    let innerPowerSet = this.powerSetAux(array, index + 1);
    innerPowerSet.forEach((p: number[]) => {
        powerSet.push(p);
        powerSet.push(p.concat(element));
    });
    return powerSet;
}
