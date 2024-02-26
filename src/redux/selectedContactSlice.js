import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedContact : ""
}

export const selectedContactSlice= createSlice({
    name: 'SelectedContacts',
    initialState,
    reducers:{
        setSelectedContact: (state, action) => {
            state.selectedContact = action.payload
        },
        setNewMsgInSelectedContact: (state, action) => {
            state.selectedContact.Messages.push(action.payload.msgArr)
        },
    }
})

export const {setSelectedContact,setNewMsgInSelectedContact} = selectedContactSlice.actions

export default selectedContactSlice.reducer