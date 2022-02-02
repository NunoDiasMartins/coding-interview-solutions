// O (V+E) time and O(V) Space
export class Node {
    name: string;
    children: Node[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string): Node {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array: string[]) {
        const vertices: Node[] = [this];
        let index = 0; // I could avoid to have always a O(V) on space if used the shift instead of index.
        while (index < vertices.length) {
            array.push(vertices[index].name);
            vertices.push(...vertices[index].children); // this would be the O(E)
            index++;
        }
        return array;
    }
}
