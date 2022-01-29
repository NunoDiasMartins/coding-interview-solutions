// O(nm) time and O(n) space, where n is the width and m is the height
export function numberOfWaysToTraverseGraph(width: number, height: number) {
  const array = new Array(width).fill(1);
  for (let r = 1; r < height; r++) {
    for (let c = 1; c < width; c++) {
      array[c] += array[c - 1];
    }
  }
  return array[width - 1];
}
