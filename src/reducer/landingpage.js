import {combineReducers} from 'redux';

const counterReducer = (count = [], action) => {

    if (action.type === 'SET_INITIAL') {
        count = action.payload;
        return count;

    }
    if (action.type === 'ADD_CONTENT') {
        count = count.concat(action.payload);
        console.log(count);
        return count;

    }
    return count;
};


export default combineReducers({
    count: counterReducer,
});

