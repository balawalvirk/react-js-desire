export const userRemember = (payload) => {
    return {
        type: "LOGIN",
        payload: payload,
    };
};

export const setUser = (data) => {
    return {
        type: 'SET_USER',
        payload: data
    }
}