export function groupAnagrams(words: string[]) {
    const existingAnagrams = new Set<number>()
    const result: string[][] = [];
    for (let i = 0; i < words.length; i++) {
        if (existingAnagrams.has(i))
            continue;

        const anagramsForCurrentWord: string[] = [words[i]];
        for (let j = i + 1; j < words.length; j++) {
            if (existingAnagrams.has(j))
                continue;

            if (this.isAnagram(words[i], words[j])) {
                existingAnagrams.add(j);
                anagramsForCurrentWord.push(words[j]);
            }
        }
        result.push(anagramsForCurrentWord);

    }

    // Write your code here.
    return result;;
}



export function isAnagram(stringOne: string, stringTwo: string): boolean {
    if (stringOne.length !== stringTwo.length)
        return false;

    const mapper = new Map<string, number>();

    for (let i = 0; i < stringOne.length; i++) {
        const charOne = stringOne[i];
        const charTwo = stringTwo[i];
        if (charOne === charTwo)
            continue;

        const occCharOne = mapper.get(charOne) ?? 0;
        const occCharTwo = mapper.get(charTwo) ?? 0;
        if (occCharOne + 1 === 0) {
            mapper.delete(charOne);
        } else {
            mapper.set(charOne, occCharOne + 1);
        }
        if (occCharTwo - 1 === 0) {
            mapper.delete(charTwo);
        } else {
            mapper.set(charTwo, occCharTwo - 1);
        }
    }

    return mapper.size === 0;
}

