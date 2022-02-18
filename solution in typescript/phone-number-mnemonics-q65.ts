export function phoneNumberMnemonics(phoneNumber: string, index = 0) {
    // Write your code here.
    const currentMnemonics = this.getChars(phoneNumber[index]);
    if (index === phoneNumber.length - 1) {
        return currentMnemonics;
    }
    const result: string[] = [];
    currentMnemonics.forEach((letter: string) => {
        result.push(...this.phoneNumberMnemonics(phoneNumber, index + 1).map(
            (innerString: string) => letter.concat(innerString)
        ));
    });
    return result
}

export function getChars(char: string): string[] {
    switch (char) {
        case '2':
            return ['a', 'b', 'c'];
        case '3':
            return ['d', 'e', 'f'];
        case '4':
            return ['g', 'h', 'i'];
        case '5':
            return ['j', 'k', 'l'];
        case '6':
            return ['m', 'n', 'o'];
        case '7':
            return ['p', 'q', 'r', 's'];
        case '8':
            return ['t', 'u', 'v'];
        case '9':
            return ['w', 'x', 'y', 'z'];
        default:
            return [char];
    }
}