export function numbersInPi(pi: string, numbers: string[]) {

    const min = this.numbersInPiAux(pi, numbers, 0);
    return min === Infinity ? -1 : min;
}
export function numbersInPiAux(pi: string, numbers: string[], count: number) {

    const subPis = this.getAllSubPiFromMatches(pi, numbers);
    let min = Infinity;
    for (const subPi of subPis) {
        if (subPi === '')
            return count;
        min = Math.min(this.numbersInPiAux(subPi, numbers, count + 1), min);
    }

    return min;
}


export function getAllSubPiFromMatches(subpi: string, numbers: string[]) {
    const matches = numbers.filter(number => subpi.startsWith(number));
    return matches.map(match => subpi.slice(match.length));
}

