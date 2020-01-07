import { combineReducers } from "redux";
import Tasks from "./Tasks";
import isDisplayForm from "./isDisplayForm";

const myReducer = combineReducers({
    Tasks,
    isDisplayForm
});

export default myReducer;


