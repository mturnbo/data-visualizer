import Node from './node.class';

class Tree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    findNode(node, id) {
        if (node.id === id) {
            return node;
        }

        if (node.children.size === 0) {
            return null;
        }

        if (node.children.has(id)) {
            return node.children.get(id);
        }

        node.children.forEach(child => {
            this.findNode(child, id);
        });
    }

    addNode(value, parentId = null) {
        const parentNode = parentId === null ? this.root : this.findNode(parentId);
        const newNode = parentNode.addChild(value);

        return newNode;
    }

    preOrderTraverse() {
        const visited = [];

        const traverse = node => {
            visited.push(node.value);
            node.children.forEach(child => traverse(child));
        };

        traverse(this.root);

        return visited;
    }

    postOrderTraverse() {
        const visited = [];

        const traverse = node => {
            node.children.forEach(child => traverse(child));
            visited.push(node.value);
        };

        traverse(this.root);

        return visited;
    }

    exportTree() {
        const walk = node => {
            const objNode = {
                name: node.value,
                attributes: {
                    id: node.id,
                    value: node.value,
                },
                children: [],
            }
            node.children.forEach(child => {
                const objChild = walk(child);
                objNode.children.push(objChild);
            });

            return objNode;
        }

        const objTree = walk(this.root);

        return objTree;
    }

}

export default Tree;
