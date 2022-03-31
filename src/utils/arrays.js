export const permutations = (arr) => {
    let perms = [];
    let l = arr.length;

    if (l === 0) return [];
    if (l === 1) return [arr];

    for (let i = 0; i < l; i++) {
        const current = arr[i];
        const other = arr.slice(0, i).concat(arr.slice(i + 1));
        const otherPerms = permutations(other);

        for (let j = 0; j < otherPerms.length; j++) {
            perms.push([current].concat(otherPerms[j]));
        }
    }

    return perms;
};
