import * as types from "./../constants/ActionTypes";
var initialState = {
    by:'name',
    value:1
};

const myReducer = (state=initialState,action)=>{
    switch(action.type){
        case types.TASK_SORT:
            return {
                by:action.sort.by,
                value:action.sort.value
            };
        default:
            return state;
    }
}

export default myReducer;