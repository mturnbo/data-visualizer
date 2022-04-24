export const generateUniqueId = (length = 4) => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16);
    }

    length = length < 1 ? 1 : length > 6 ? 6 : length;
    let id = [];
    for (let i = 0; i < length; i++) {
        id.push(s4());
    }

    return id.join('-');
};
