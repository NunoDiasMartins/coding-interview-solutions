export function balancedBrackets(string: string) {
    const stack: string[] = [];
    for (let bracket of string) {
        switch (bracket) {
            case ')':
                if (stack.pop() !== '(') {
                    return false;
                }
                break;
            case ']':
                if (stack.pop() !== '[') {
                    return false;
                }
                break;
            case '}':
                if (stack.pop() !== '{') {
                    return false;
                }
                break;
            case '[':
            case '(':
            case '{':
                stack.push(bracket);
        }
    }

    return stack.length === 0;
}


