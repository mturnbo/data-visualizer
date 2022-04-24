import React from 'react';
import ArrayVisualizer from 'components/ArrayVisualizer/';
import Base from './Base';

class Stack extends Base {
    push(item) {
        this.addData(item);
    }

    pop() {
        const newData = [...this.state.data];
        const removed = newData.pop();
        this.setState({
            data: newData,
            lastRemoved: removed,
        });
    }

    render() {
        return (
            <div>
                <h2>Stack</h2>
                <button onClick={() => this.push()}>Push</button>
                <button onClick={() => this.pop()}>Pop</button>
                <div>Last Added {this.state.lastAdded}</div>
                <div>Last Removed {this.state.lastRemoved}</div>
                <ArrayVisualizer array={this.state.data} />
            </div>
        );
    }
}

export default Stack;
