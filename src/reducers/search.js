import * as types from "./../constants/ActionTypes";
var initialState = '';

const myReducer = (state=initialState,action)=>{
    switch(action.type){
        case types.TASK_SEARCH:
            return action.keyword;
        default:
            return state;
    }
}

export default myReducer;