export function reverseWordsInString(string: string) {
    const words: string[] = [];

    let i = string.length - 1;
    let isPreviousSymbolWhiteSpace = string[i] === ' ';
    let endIndex = i;
    while (i >= 0) {
        const isWhiteSpace = string[i] === ' ';
        if (isPreviousSymbolWhiteSpace && !isWhiteSpace || !isPreviousSymbolWhiteSpace && isWhiteSpace) {
            words.push(string.substring(i + 1, endIndex + 1));
            endIndex = i;
        }
        isPreviousSymbolWhiteSpace = isWhiteSpace;
        i--;
    }
    words.push(string.substring(i, endIndex + 1));

    return words.join('');
}
