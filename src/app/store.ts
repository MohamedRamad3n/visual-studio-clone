import { configureStore } from "@reduxjs/toolkit";
import filTreeReducer from "./features/fileTreeSlice"
export const store = configureStore({
    reducer: {
        fileTree: filTreeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
