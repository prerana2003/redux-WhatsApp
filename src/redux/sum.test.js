import { sum } from "./newMsg";

it('sum of 1+2 should be 3', ()=>{  
    const mockCallBack = jest.fn(sum);
    mockCallBack(sum(1,2))
    expect(mockCallBack.mock.calls[0][0]).toBe(3)
})

it('should add string',()=>{
    const result = sum("1","2");
    expect(result).toBe(3)
})