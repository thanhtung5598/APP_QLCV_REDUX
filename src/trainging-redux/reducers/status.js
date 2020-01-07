var initialState = false

var myReducer = (state=initialState,action) =>{ 
    if(action.type==='Toggle'){
       state = !state;
    }
    return state;
}

export default myReducer;