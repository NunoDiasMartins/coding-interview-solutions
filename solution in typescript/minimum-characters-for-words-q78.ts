interface occur { currenctOccurence: number, maxOccurences: number, currentWordIndex: number };

export function minimumCharactersForWords(words: string[]) {
    const map = new Map<string, occur>();

    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        for (let char of word) {
            if (map.has(char)) {
                const obj = map.get(char);
                this.addOccurence(obj, index);
            } else {
                map.set(char, { currenctOccurence: 1, maxOccurences: 1, currentWordIndex: index })
            }
        }
    }
    const result = [];
    for (const [key, value] of map) {
        for (let i = 0; i < value.maxOccurences; i++) {
            result.push(key);
        }
    }
    return result;
}

export function addOccurence(obj: occur, wordIndex: number) {
    if (obj.currentWordIndex !== wordIndex) {
        obj.currentWordIndex = wordIndex;
        obj.currenctOccurence = 1;
        return obj;
    }
    obj.currenctOccurence++;
    if (obj.maxOccurences < obj.currenctOccurence)
        obj.maxOccurences = obj.currenctOccurence;

    return obj;

}
