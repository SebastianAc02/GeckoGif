
import { useForm } from "../useForm";
import { render, renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ExperimentOutlined } from "@ant-design/icons";


const setup = (params)=>
 renderHook(()=> 
 useForm(params))

test('should change keyword', ()=>{
    const {result} =setup()

    act(()=>{
        result.current.update_keyword('batman')
    })

    
    expect (result.current.keyword).toBe('batman')
})

test('should use initial values',()=>{
    const {result } =setup({
        initialKeyword : 'matrix'
    })

    expect(result.current.keyword).toBe('matrix')

})


test('should update correctly times when used twice',()=>{
    const {result } = setup({
        initialKeyword : 'matrix'
    })

    act(()=>{
        result.current.update_keyword('b')
        result.current.update_keyword('ba')
    })


    expect(result.current.keyword).toBe('ba')
    expect(result.current.times).toBe(0)
    

})