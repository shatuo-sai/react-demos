import { createStore } from 'redux';
const React = require('react');
const ReactDOM = require('react-dom');

const Count = React.createClass({
    render() {
        return (
            <div>
                <p>{this.props.value}</p>

                <button onClick={this.props.onAdd}>+</button>
                <button onClick={this.props.onCrement}>-</button>
            </div>
        );
    }
});

const reducer = (state=0, action) => {
    switch (action.type) {
        case 'ADD': return state + 1;
        case 'CREMENT': return state - 1;
        default : return state;
    }
};

const store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <Count
            value = {store.getState()}
            onAdd = {() => store.dispatch({type: "ADD"})}
            onCrement = {() => store.dispatch({type: "CREMENT"})}
        />,
        document.getElementById("J_Page")
    );
};

store.subscribe(render);

render();