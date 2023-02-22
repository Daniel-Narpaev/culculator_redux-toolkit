import { combineReducers } from "redux";
import authSlice from "./slice/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
import culculatorSlice from "./slice/culculatorSlice";

const rootReduser = combineReducers({
    [culculatorSlice.name]:culculatorSlice.reducer,
    [authSlice.name]:authSlice.reducer,
})
export const store = configureStore({reducer:rootReduser})

