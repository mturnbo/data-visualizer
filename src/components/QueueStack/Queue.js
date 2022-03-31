import React from 'react';
import ArrayVisualizer from '../ArrayVisualizer/';
import Base from './Base';

class Queue extends Base {
    enqueue(item) {
        this.addData(item);
    }

    dequeue() {
        const newData = [...this.state.data];
        const removed = newData.shift();
        this.setState({
            data: newData,
            lastRemoved: removed,
        });
    }

    render() {
        return (
            <div>
                <h2>Queue</h2>
                <button onClick={() => this.enqueue()}>Enqueue</button>
                <button onClick={() => this.dequeue()}>Dequeue</button>
                <div>Last Added {this.state.lastAdded}</div>
                <div>Last Removed {this.state.lastRemoved}</div>
                <ArrayVisualizer array={this.state.data} />
            </div>
        );
    }
}

export default Queue;
