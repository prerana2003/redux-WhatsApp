import {addNewMsg} from './newMsg';

it('parameter should be object, object should contain 3 properties, object properties should not be null', ()=>{
    const mockCallBack = jest.fn(addNewMsg)

    const myMessage = {"Msg":'hii', "type":"sent", "time":"1:00pm"}
   
    mockCallBack(myMessage)

    expect(typeof(mockCallBack.mock.calls[0][0])).toEqual('object')

    expect(typeof(mockCallBack.mock.calls[0][0].Msg)).toEqual('string')

    expect(typeof(mockCallBack.mock.calls[0][0].type)).toEqual('string')

    expect(typeof(mockCallBack.mock.calls[0][0].time)).toEqual('string')

    expect(mockCallBack.mock.calls[0][0].Msg).not.toBe(null)

    expect(mockCallBack.mock.calls[0][0].type).not.toBe(null)

    expect(mockCallBack.mock.calls[0][0].time).not.toBe(null)

    expect(Object.keys(mockCallBack.mock.calls[0][0]).length).toBe(3)
})
