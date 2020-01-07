import sort from "./status";
import status from "./sort";

import {combineReducers} from "redux";

const myReducer = combineReducers({
    status:status,
    sort:sort,
});

export default myReducer;