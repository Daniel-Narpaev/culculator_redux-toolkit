import { combineReducers, createStore } from "redux";
import { culculatorReducer } from "./culculator/culculatorReduser";
import { AuthReduser } from "./auth/AuthReduser";

const rootReduser = combineReducers({
    culculator: culculatorReducer,
    auth:AuthReduser,
})
export const store = createStore(rootReduser)

store.subscribe(()=>{
    console.log('store changed', store.getState());
})