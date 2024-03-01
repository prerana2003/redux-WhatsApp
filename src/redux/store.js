import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import logger from "redux-logger";

export const store = configureStore({
    reducer:{
        contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})