const initialValue = {
    isLoggedIn: false,
    role: 'admin'
};

const reducerData = (state = initialValue, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        }
        case "ROLE": {
            return {
                ...state,
                role: action.payload,
            };
        }

        default:
            return state;
    }
};

export default reducerData;
