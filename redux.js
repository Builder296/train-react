const redux = require('redux');

// initial state
const initialState = {
    count: 0
}

// 'reducer' + 'state'
const reducer = (state = initialState, action) => {
    // action
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREASE':
            return {
                ...state,
                count: state.count - 1
            }
        case 'SET':
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}

// add state into 'store'
const store = redux.createStore(reducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch({type: ''});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'DECREASE'});
store.dispatch({type: 'INCREASE'});
store.dispatch({type: 'DECREASE'});
store.dispatch({type: 'SET', payload: 999});

