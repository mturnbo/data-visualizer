import React from 'react';
import ArrayItem from './ArrayItem';
import './array.css';

const ArrayContainer = (props) => {
    const generateArray = () => {
        if (Array.isArray(props.array)) {
            return props.array.map((item, index) => <ArrayItem key={index} index={index} content={item} />);
        }

        return '';
    };

    return <div className="array-container">{generateArray()}</div>;
};

export default ArrayContainer;
