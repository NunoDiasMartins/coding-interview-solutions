export function longestPalindromicSubstring(string: string) {
    let biggestPalindrome = string[0];
    let sizeOfBiggestPalindrome = 1;
    for (let i = 0; i < string.length; i++) {
        for (let j = string.length - 1; i <= j && sizeOfBiggestPalindrome < j - i + 1; j--) {
            if (string[i] === string[j]) {
                const possiblePalindrome = string.substring(i, j + 1);
                if (this.isPalindromic(possiblePalindrome)) {
                    biggestPalindrome = possiblePalindrome;
                    sizeOfBiggestPalindrome = j - i + 1;
                }
            }
        }
    }
    return biggestPalindrome;
}

export function isPalindromic(string: string) {
    let i = 0;
    const length = string.length;
    while (string[i] === string[length - 1 - i] && i < length) {
        i++;
    }
    return length === i;
}