import React from 'react';
import './TodoItem.css'
import {Checkbox} from "@material-ui/core";
function TodoItem({name, done, id}) {
     const handleChange = () => {
     };
    return (
        <div className='todoItem'>
             <Checkbox
                 checked={done}
                 onChange={handleChange}
                 color='primary'
                 inputProps={{ 'aria-label': 'primary checkbox' }}
             />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    );
}

export default TodoItem;