import { generateUniqueId } from 'utils/utils';

class Node {
    constructor(value, parent = null) {
        this.id = generateUniqueId();
        this.value = value;
        this.parent = parent;
        this.children = new Map();
    }

    addChild(value) {
        const newNode = new Node(value, this.id);
        this.children.set(newNode.id, newNode);

        return newNode;
    }

    removeChild(id) {
        this.children.delete(id);
    }
}

export default Node;
