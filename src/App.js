import React from 'react';
import './App.css';
import Input from "./components/input";
import TodoItem from "./components/TodoItem";
import {useSelector} from "react-redux";
import {selectTodoList } from "./features/TodoSlice";

function App() {
    const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
        <div className='app-container'>
            <Input/>
            <div className='todo-container'>
                {
                    todoList.map(item => (
                        <TodoItem
                            name={item.item}
                            done={item.done}
                            id={item.id}
                        />
                    ))
                }

            </div>

        </div>
    </div>
  );
}

export default App;
