import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import taskEditting from "./taskEditting";
import filterTable from "./filterTable";

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    taskEditting,
    filterTable
});

export default myReducer;


