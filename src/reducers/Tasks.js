import * as types from "./../constants/ActionTypes";

const data = JSON.parse(localStorage.getItem('lover'));

const initialState = data ? data : [];

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            let newTask = {
                id:guild(),
                name:action.task.name,
                statue:action.task.status
            }
            state.push(newTask);
            localStorage.setItem('lover',JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var guild = () => {
    return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}

export default myReducer;