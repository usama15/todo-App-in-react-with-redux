import React from 'react'
import './input.css'
import {useDispatch} from "react-redux";
import {saveTodo} from "../features/TodoSlice";

const Input = () => {
    const [input, setInput] = React.useState('');
    const Dispatch = useDispatch()
    const addTodo = () => {
        console.log(`Adding ${input}`)
        Dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
    }
    return (
        <div className='input'>
            <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default Input
