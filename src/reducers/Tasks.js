import * as types from "./../constants/ActionTypes";

const data = JSON.parse(localStorage.getItem('lover'));

const initialState = data ? data : [];

const myReducer = (state=initialState,action) => {
    switch(action.type){
        case types.LIST_ALL:
            return state; 
        default:
            return state;
    }
}

export default myReducer;