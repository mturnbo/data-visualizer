import React from 'react';

class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            lastAdded: null,
            lastRemoved: null,
        };

        this.isEmpty = this.isEmpty.bind(this);
        this.hasRoom = this.hasRoom.bind(this);
        this.numItems = this.numItems.bind(this);
        this.addData = this.addData.bind(this);
    }

    isEmpty() {
        return this.state.data.length === 0;
    }

    hasRoom() {
        return this.state.data.length < this.props.maxSize;
    }

    numItems() {
        return this.state.data.length;
    }

    addData(item) {
        if (this.hasRoom()) {
            console.log('base:addData');
            if (!item) {
                item = Math.floor(Math.random() * 100);
            }
            const newData = [...this.state.data, item];
            this.setState({
                data: newData,
                lastAdded: item,
            });
        }
    }
}

export default Base;
