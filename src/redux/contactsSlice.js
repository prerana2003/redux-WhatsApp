import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contacts: require('../contacts.json').contacts
}

export const contactsSlice= createSlice({
    name: 'contacts',
    initialState,
    reducers:{
        setNewMessage: (state, action) => {
            state.contacts[action.payload.contactIndex].Messages=action.payload.msgArr
        },
    }
}) 

export const {setNewMessage} = contactsSlice.actions

export default contactsSlice.reducer

