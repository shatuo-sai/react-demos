import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

import Count from './component/counter.jsx'

import createLogger from 'redux-logger';
const logger = createLogger();

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: () => { dispatch({type: 'ADD'}) },
        onCrement: () => { dispatch({type: 'CREMENT'}) }
    }
};

function counter(state = {count: 0}, action) {
    const count = state.count;

    switch (action.type) {
        case 'ADD' :
            return {count: count + 1};
        case 'CREMENT':
            return {count: count - 1};;
        default :
            return state
    }
}

const store = createStore(
    counter,
    applyMiddleware(logger)
);


const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Count);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById("J_Page")
);