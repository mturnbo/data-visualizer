import React from 'react';
import './array.css';

const ArrayItem = (props) => {
    return (
        <div className="array-item">
            <div className="array-item-index">{props.index}</div>
            <div className="array-item-content">{props.content}</div>
        </div>
    );
};

export default ArrayItem;
