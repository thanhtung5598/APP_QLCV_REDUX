import { combineReducers } from "redux";
import Tasks from "./Tasks";
import isDisplayForm from "./isDisplayForm";
import taskEditting from "./taskEditting";

const myReducer = combineReducers({
    Tasks,
    isDisplayForm,
    taskEditting
});

export default myReducer;


