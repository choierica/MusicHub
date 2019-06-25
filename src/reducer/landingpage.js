import {combineReducers} from 'redux';

const counterReducer = (count = [], action) => {

    if (action.type === 'SET_INITIAL') {
        count = action.payload;
        return count;

    }
    if (action.type === 'ADD_CONTENT') {
        count = count.concat(action.payload);
        return count;
    }
    if (action.type === 'DELETE_CONTENT') {
        count = count.filter(item => (item._id !== action.payload))
        return count;
    }
    return count;
};


export default combineReducers({
    count: counterReducer,
});

