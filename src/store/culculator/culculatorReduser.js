export const culculattorActionTypes = {
    ADD:'ADD',
    SUBTRACT:'SUBTRACT',
    MULTIPLY:'MULTIPLY',
    DIVIDE:'DIVIDE',
}
const inittialState = {
    result: 0,
}
 export const culculatorReducer = (state = inittialState, action) => {
    switch (action.type) {
        case culculattorActionTypes.ADD:
                return {
                ...state,
                result:state.result + action.payload
               } 
        case culculattorActionTypes.SUBTRACT:
                return {
                ...state,
                result:state.result - action.payload
               } 
        case culculattorActionTypes.MULTIPLY:
                return {
                ...state,
                result:state.result * action.payload
               } 
        case culculattorActionTypes.DIVIDE:
                return {
                ...state,
                result:state.result / action.payload
               }  
        default:
            return state;
    }
   
}
