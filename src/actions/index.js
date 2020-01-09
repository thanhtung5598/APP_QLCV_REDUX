import * as types from "./../constants/ActionTypes";

export const listALL = () =>{
    return {
        type:types.LIST_ALL
    }
}
export const saveTask = (task) =>{
    return {
        type:types.ADD_TASK,
        task
    }
}

export const toggleForm = () => {
    return{
        type:types.TOGGLE_FORM
    }
} 
export const openForm = () => {
    return{
        type:types.OPEN_FORM
    }
}  
export const closeForm = () => {
    return{
        type:types.CLOSE_FORM
    }
}  

export const updateStatus = (id) => {
    return {
        type:types.UPDATE_STATUS_TASKS,
        id
    }
}

export const deleteTask = (id) =>{
    return {
        type:types.DELETE_TASK,
        id
    }
}

export const editTask = (task) =>{
    return{
        type:types.EDIT_TASK,
        task
    }
}

export const filterTask = (filter) =>{
    return{
        type:types.FILTER_TASK,
        filter
    }
}