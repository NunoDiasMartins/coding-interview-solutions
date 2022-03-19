type Disk = [number, number, number];

export function diskStacking(disks: Disk[]) {
    const array: Disk[][] = [];
    // the first element will be the max height and the other number will be previous Index
    const maxs: number[][] = [];
    disks.sort((a, b) => b[0] - a[0]);
    let max = -1;
    let maxIndex = -1;
    for (let i = 0; i < disks.length; i++) {
        this.buildHighestStack(i, disks, maxs);
        if (max < maxs[i][0]) {
            max = maxs[i][0];
            maxIndex = i;
        }
    }

    if (max === -1)
        return [[-1, -1, -1]];


    const result: Disk[] = [];
    let index = maxIndex;

    do {
        result.push(disks[index]);
        index = maxs[index][1];
    } while (index !== -1);

    return result;
}

export function buildHighestStack(index: number, disks: Disk[], maxs: number[][]) {
    let max = -1;
    let maxIndex = -1;
    for (let i = index - 1; i >= 0; i--) {
        const possibleNewMax = maxs[i][0] + disks[index][2];
        if (possibleNewMax < max)
            continue;
        if (this.candDiskFitTogether(disks[i], disks[index])) {
            max = possibleNewMax;
            maxIndex = i;
        }
    }
    if (max === -1) {
        max = disks[index][2];
    }
    maxs.push([max, maxIndex])
}

export function candDiskFitTogether(diskBottom: Disk, diskTop: Disk): boolean {
    for (let i = 0; i < diskBottom.length; i++) {
        if (diskBottom[i] <= diskTop[i])
            return false;
    }
    return true;
}