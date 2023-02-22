import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    result: 0,
}
 export const culculatorSlice = createSlice({
    name:'culculator',
    initialState,
    reducers:{
        add(state, action){
         state.result += action.payload 
        },
        subtract(state, action){
            state.result -= action.payload
        },
        multiply(state, action){
            state.result *= action.payload
        },
        divide(state, action){
            state.result /= action.payload
        },
    }
 })

 export  const culculatorActions = culculatorSlice.actions

 export default culculatorSlice