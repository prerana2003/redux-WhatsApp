import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import logger from "redux-logger";
import selectedContactReducer from "./selectedContactSlice";

export const store = configureStore({
    reducer:{
        contacts: contactsReducer,
        selectedContact : selectedContactReducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})