import * as types from "./../constants/ActionTypes";

const data = JSON.parse(localStorage.getItem('lover'));

const initialState = data ? data : [];

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
var guild = () => {
    return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}
var findIndex = (tasks,id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            return result = index;
        }
    })
    return result;
}

const myReducer = (state = initialState, action) => {
    let index;
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
        case types.UPDATE_STATUS_TASKS:
            index= findIndex(state,action.id);
            state[index] = {
                ...state[index], // clone ra
                status:!state[index].status
            };
            localStorage.setItem('lover', JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            index = findIndex(state,action.id);
            state.splice(index, 1);
            localStorage.setItem('lover', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}



export default myReducer;