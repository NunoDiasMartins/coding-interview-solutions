export enum Direction {
    East = 'EAST',
    West = 'WEST',
}

export function sunsetViews(buildings: number[], direction: Direction) {
    const cumulativeFactor = direction === Direction.East ? -1 : 1;
    let index = direction === Direction.East ? buildings.length - 1 : 0;
    const finalIndex = direction === Direction.East ? -1 : buildings.length;
    let previousMaxHeight = 0;
    const result = [];
    while (index !== finalIndex) {
        if (buildings[index] > previousMaxHeight) {
            result.push(index);
            previousMaxHeight = buildings[index];
        }
        index += cumulativeFactor;
    }
    if (direction === Direction.East) result.reverse();
    return result;
}
