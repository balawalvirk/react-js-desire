const initialValue = {
    rememberMe: false,
    user: null
};

const reducerData = (state = initialValue, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                rememberMe: action.payload,
            };
        }

        case "SET_USER": {
            return {
                ...state,
                user: action.payload,
            };
        }

        default:
            return state;
    }
};

export default reducerData;
