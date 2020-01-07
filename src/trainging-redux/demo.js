import { createStore } from "redux";
import { status,Sort } from "./action/index"; // action
import myReducer from './reducers/index'; // reducers

const store = createStore(myReducer); 
console.log("Default : " , store.getState());

store.dispatch(status({
    status : true
}))
console.log("After-Toggle : " , store.getState());

store.dispatch(Sort({
    by:'name',
    value:-1
}));
console.log("Sort : " , store.getState());
