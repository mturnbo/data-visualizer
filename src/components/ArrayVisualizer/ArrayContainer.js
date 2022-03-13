import React from 'react';
import './array.css';

const ArrayContainer = (props) => {
    return (
        <div className="array-container">
            {props.sub && (
                <div className="sub-index">
                    <div className="array-item-index">{props.index}</div>
                </div>
            )}
            {props.children}
        </div>
    );
};

export default ArrayContainer;
