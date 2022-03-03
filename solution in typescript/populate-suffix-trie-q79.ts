interface TrieNode {
    [key: string]: TrieNode | boolean;
}

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
export class SuffixTrie {
    root: TrieNode;
    endSymbol: string;

    constructor(string: string) {
        this.root = {};
        this.endSymbol = '*';
        this.populateSuffixTrieFrom(string);
    }

    populateSuffixTrieFrom(string: string) {
        for (let i = 0; i < string.length; i++) {
            this.populateSuffixTrieFromAux(string.slice(i))
        }
    }

    populateSuffixTrieFromAux(string: string) {
        let node: TrieNode = this.root;

        for (let i = 0; i < string.length; i++) {
            const char = string[i];
            if (!(char in node)) node[char] = {};
            node = node[char] as TrieNode;
        }
        node[this.endSymbol] = true;

    }

    contains(string: string) {
        let node = this.root;
        for (let char of string) {
            if (!node[char])
                return false;
            node = node[char] as TrieNode;

        }

        return node[this.endSymbol] === true;
    }
}
