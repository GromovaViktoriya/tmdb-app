import { setupListeners } from "@reduxjs/toolkit/query"
import {appReducer, appSlice} from "@/app/model/app-slice.ts";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [appSlice.name]: appReducer,
    },
})

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch