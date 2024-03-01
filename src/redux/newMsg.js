import { setNewMessage } from "./contactsSlice";

const addNewMsg = ({newMsg,id}) =>{
    return (dispatch,getState)=>{
        const state = getState();
        const contactIndex = id-1
        const msgArr = [...state.contacts.contacts[contactIndex].Messages]
        msgArr.push(newMsg)
        dispatch(setNewMessage({contactIndex:contactIndex,msgArr:msgArr}))
    }
}

export function sum(a,b){
    return parseInt(a)+parseInt(b);
}

export default addNewMsg;