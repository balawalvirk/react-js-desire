export const userLogin = (payload) => {
    return {
        type: "LOGIN",
        payload: payload,
    };
};
export const userRole = (payload) => {
    return {
        type: "ROLE",
        payload: payload,
    };
};