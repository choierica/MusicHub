export const setInitial = amount => {
    return {
        type: 'SET_INITIAL',
        payload: amount
    };
};

export const addContent = content => {
    return {
        type: 'ADD_CONTENT',
        payload: content
    };
};

export const deleteContent = content => {
    return {
        type: 'DELETE_CONTENT',
        payload: content
    };
};

export const deleteAllContent = content => {
    return {
        type: 'DELETE_ALL'
    };
};
