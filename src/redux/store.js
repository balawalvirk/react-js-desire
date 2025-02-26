
// import { createStore, applyMiddleware, compose } from 'redux';
// import { thunk } from 'redux-thunk';
// import reducerData from './reducers/reducer';

// export default function configureStore(initialState) {
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     return createStore(
//         reducerData,
//         initialState,
//         composeEnhancers(applyMiddleware(thunk))
//     );
// }
import { applyMiddleware, compose, createStore } from "redux";
import reducerData from './reducers/reducer'; // Make sure your reducer includes rememberMe
import { thunk } from "redux-thunk";
import CryptoJS from "crypto-js";

// Function to save user state to localStorage
const saveToLocalStorage = (state) => {
    // Only save to localStorage if rememberMe is true
    if (state.rememberMe && state.user) {
        const serializedUid = CryptoJS.AES.encrypt(
            JSON.stringify(state.user),
            "my-secret-key"
        ).toString();
        localStorage.setItem("user", serializedUid);
    } else {
        localStorage.removeItem("user");
    }
};

// Function to check if there's any user data in localStorage
const checkLocalStorage = () => {
    const serializedUid = localStorage.getItem("user");
    if (serializedUid === null) return undefined;

    const decryptedData = CryptoJS.AES.decrypt(serializedUid, "my-secret-key").toString(CryptoJS.enc.Utf8);
    const user = JSON.parse(decryptedData);
    return {
        user,
        rememberMe: user.rememberMe || false,
    };
};

// Create store with middlewares and reducers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    reducerData,
    checkLocalStorage(), // Initialize state based on localStorage
    composeEnhancers(applyMiddleware(thunk))
);

// Subscribe to store changes and save to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

// Export the store
export default store;
