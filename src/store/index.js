import { usersReducer } from "./slices/usersSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});


export * from "./thunks/fetchUsers";
export * from "./thunks/addUser"
export * from "./thunks/removeUser"