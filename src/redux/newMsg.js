import { setNewMessage } from "./contactsSlice";
import { setNewMsgInSelectedContact } from "./selectedContactSlice";

const addNewMsg = ({newMsg}) =>{
    return (dispatch,getState)=>{
        const state = getState();
        const contactIndex = state.contacts.contacts.findIndex((obj)=> obj["ID"]===state.selectedContact.selectedContact["ID"])
        const msgArr = [...state.selectedContact.selectedContact.Messages]
        msgArr.push(newMsg)
        dispatch(setNewMessage({contactIndex:contactIndex,msgArr:newMsg}))
        dispatch(setNewMsgInSelectedContact({contactIndex:contactIndex,msgArr:newMsg}))
    }
}

export function sum(a,b){
    return parseInt(a)+parseInt(b);
}

export default addNewMsg;