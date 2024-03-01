import { setNewMessage } from './contactsSlice';
import {addNewMsg} from './newMsg';


test('should receive object as parameter', ()=>{
    const mockCallBack = jest.fn(setNewMessage)

    const myMessage = {"Msg":'hii', "type":"sent", "time":"1:00pm"}
    const index = 2;

    mockCallBack(index,myMessage)

    console.log(mockCallBack.mock.calls)

    expect(mockCallBack.mock.calls).toHaveLength(1)
})

test('should receive object as parameter', ()=>{
    const mockCallBack = jest.fn(addNewMsg)

    const myMessage = {"Msg":'hii', "type":"sent", "time":"1:00pm"}

    mockCallBack(myMessage)

    expect(typeof(mockCallBack.mock.calls[0][0])).toEqual('object')
})


test('parameter should contain 3 properties', ()=>{
    const mockCallBack = jest.fn(addNewMsg)

    const myMessage = {"Msg":'hii', "type":"sent", "time":"1:00pm"}

    mockCallBack(myMessage)

    expect(Object.keys(mockCallBack.mock.calls[0][0]).length).toBe(3)
})


test('no any parameter property should be null', ()=>{
    const mockCallBack = jest.fn(addNewMsg)

    const myMessage = {"Msg":'hii', "type":"sent", "time":"1:00pm"}

    mockCallBack(myMessage)

    expect(mockCallBack.mock.calls[0][0].Msg).not.toBe(null)
    expect(mockCallBack.mock.calls[0][0].type).not.toBe(null)
    expect(mockCallBack.mock.calls[0][0].time).not.toBe(null)
})


test('object should contain msg, type and time in string format', ()=>{
    const mockCallBack = jest.fn(addNewMsg)

    const myMessage = {"Msg":'hii', "type":"sent", "time":"1:00pm"}

    mockCallBack(myMessage)

    expect(typeof(mockCallBack.mock.calls[0][0].Msg)).toEqual('string')
    expect(typeof(mockCallBack.mock.calls[0][0].type)).toEqual('string')
    expect(typeof(mockCallBack.mock.calls[0][0].time)).toEqual('string')
})