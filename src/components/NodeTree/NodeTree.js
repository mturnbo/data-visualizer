import React, {useState} from "react";
import Tree from './tree.class';
import D3Tree from 'react-d3-tree';

const tree = new Tree(1);
let node = tree.addNode(5);
node.addChild(6);
node.addChild(8);
node.addChild(12);

node = tree.addNode(12);
node.addChild(20);
node.addChild(30);

node = node.addChild(40);
node.addChild(20);
node.addChild(30);

tree.addNode('A');

const preOrder = tree.preOrderTraverse();
const postOrder = tree.postOrderTraverse();

const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
<g>
    <circle cx="0" cy="10" r="15" fill="lightblue" onClick={toggleNode} />
    <text fill="blue" strokeWidth="1" x="20">
        {nodeDatum.name}
    </text>
</g>
);

const NodeTree = (props) => {
    //const [tree, setTree] = useState(new Tree(1));

    const handleNodeClick = (nodeData, evt) => {
        console.log(nodeData, evt);
    }

    return (
        <div id="treeWrapper" style={{ width: '90em', height: '90em' }}>
            <D3Tree
                data={tree.exportTree()}
                orientation="vertical"
                collapsible={false}
                renderCustomNodeElement={renderRectSvgNode}
                pathFunc="straight"
                onNodeClick={handleNodeClick}
            />
            <div>{preOrder}</div>
            <div>{postOrder}</div>
        </div>
    )
};

export default NodeTree;

