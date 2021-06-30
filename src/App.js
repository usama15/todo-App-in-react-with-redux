import React from 'react';
import './App.css';
import Input from "./components/input";
import TodoItem from "./components/TodoItem";

function App() {
    const todoList =[{
        item: 'todo',
        done: false,
        id: 83918723,
    },{
        item: 'todo2',
        done: true,
        id: 234269,
    }
    ]
  return (
    <div className="app">
        <div className='app-container'>
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
            <Input/>
        </div>
    </div>
  );
}

export default App;
