export const increment = amount => {
    return {
        type: 'INCREMENT_COUNTER',
        payload: amount
    };
};

export const setInitial = amount => {
    return {
        type: 'SET_INITIAL',
        payload: amount
    };
};
