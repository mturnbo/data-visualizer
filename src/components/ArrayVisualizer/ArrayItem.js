import React from 'react';
import classNames from 'classnames';
import './array.css';

const ArrayItem = (props) => {
    return (
        <div
            className={classNames({
                'array-item': true,
                'array-item-highlight': props.highlight,
            })}
        >
            <div className="array-item-index">{props.index}</div>
            <div className="array-item-content">{props.content}</div>
        </div>
    );
};

export default ArrayItem;
