export function validIPAddresses(string: string, numberOfSplits: number = 3, append: string = '') {
    if ((numberOfSplits + 1) * 3 < string.length)
        return [];

    if (numberOfSplits === 0) {
        return this.isValidStringIp(string) ? [append + string] : [];
    }
    let i = 1;
    const combinations = [];
    while (i <= string.length && i <= 3) {
        const ipSection = string.substring(0, i);
        if (!this.isValidStringIp(ipSection))
            break;
        const appendString = append + ipSection + '.';
        combinations.push(
            ...this.validIPAddresses(string.substring(i), numberOfSplits - 1, appendString)
        );
        i++;
    }
    return combinations;
}

export function isValidStringIp(string: string) {
    if (string.length === 0 || string.length > 3)
        return false;
    const number = Number(string);
    if (number > 255)
        return false;
    if (string.length > 1 && string[0] === '0')
        return false;

    return true;

}