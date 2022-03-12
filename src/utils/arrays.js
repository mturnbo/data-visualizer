export const permutations = (arr) => {
    let perms = [];

    if (arr.length === 0) return [];
    if (arr.length === 1) return [arr];

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const other = arr.slice(0, i).concat(arr.slice(i + 1));
        const otherPerms = permutations(other);

        for (let j = 0; j < otherPerms.length; j++) {
            perms.push([current].concat(other));
        }
    }

    return perms;
};
