import React, { Component } from 'react';

class Count extends Component {
    render() {
        const {count, onAddClick, onCrement} = this.props;

        return (
            <div>
                <p>{count}</p>
                <button onClick={onAddClick}>+</button>
                <button onClick={onCrement}>-</button>
            </div>
        )
    }
}

export default Count;