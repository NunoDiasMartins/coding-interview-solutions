export function cycleInGraph(edges: number[][]) {
    for (let v: number = 0; v < edges.length; v++) {
        if (this.cycleInGraphAux(edges, v, new Set<number>()))
            return true;
    }
    return false;
}
export function cycleInGraphAux(edges: number[][], v: number, visitedNodes: Set<number>) {

    visitedNodes.add(v);
    for (let g = 0; g < edges[v].length; g++) {
        const next: number = edges[v][g];
        if (visitedNodes.has(next)) {
            return true;
        }
        let clone = new Set<number>([...visitedNodes]);
        clone.add(next);
        if (this.cycleInGraphAux(edges, next, clone)) {
            return true;
        }
    }
    return false;
}

