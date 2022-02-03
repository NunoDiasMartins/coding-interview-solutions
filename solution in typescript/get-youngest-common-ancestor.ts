// This is an input class. Do not edit.
class AncestralTree {
    name: string;
    ancestor: AncestralTree | null;

    constructor(name: string) {
        this.name = name;
        this.ancestor = null;
    }
}
// O(d) time and O(n) space , where d is the depth of the ancestral tree and n is the total of nodes in the tree
export function getYoungestCommonAncestor(
    topAncestor: AncestralTree,
    descendantOne: AncestralTree,
    descendantTwo: AncestralTree,
) {
    const knownAncestors = new Set<string>();
    let one: AncestralTree | null = descendantOne;
    let two: AncestralTree | null = descendantTwo;

    while (one?.name !== topAncestor.name || two?.name !== topAncestor.name) {
        if (one !== null) {
            if (knownAncestors.has(one.name)) {
                return one;
            }
            knownAncestors.add(one.name);
            one = one.ancestor;
        }
        if (two !== null) {
            if (knownAncestors.has(two.name)) {
                console.log(two.name);
                return two;
            }
            knownAncestors.add(two.name);
            two = two.ancestor;
        }
    }
    return topAncestor;
}
