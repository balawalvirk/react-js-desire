// import { applyMiddleware, createStore } from "redux";

// import { thunk } from 'redux-thunk'
// import reducerData from "./reducers/reducer";

// const store = createStore(reducerData, {}, applyMiddleware(thunk))

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import reducerData from './reducers/reducer';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        reducerData,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}
