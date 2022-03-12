import React from 'react';
import ArrayContainer from './ArrayContainer';
import ArrayItem from './ArrayItem';
import './array.css';

const ArrayVisualizer = (props) => {
    const generateArray = (item, index) => {
        if (Array.isArray(item)) {
            return <ArrayContainer key={index}>{item.map((item, index) => generateArray(item, index))}</ArrayContainer>;
        } else {
            return <ArrayItem key={index} index={index} content={item} />;
        }
    };

    const arrayContent = Array.isArray(props.array) ? props.array.map((item, index) => generateArray(item, index)) : '';

    return (
        <div className="array-visualizer">
            Array with {props.array.length} Items <br />
            <ArrayContainer>{arrayContent}</ArrayContainer>
        </div>
    );
};

export default ArrayVisualizer;
