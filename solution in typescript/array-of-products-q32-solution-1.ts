export function arrayOfProducts(array: number[]) {
    //O(n^2) solution
    const result = [];
    for (var i = 0; i < array.length; i++) {
        var product = 1;
        for (var j = 0; j < array.length; j++) {
            if (j !== i) {
                product *= array[j];
            }
        }
        result.push(product);
    }
    return result;
}
