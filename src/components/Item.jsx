import React, { useState } from 'react';
import './todo.css'
const Item = (props) => {
    const {todo,complateTodo, deleteTodo ,todos} = props
    const [num, setNum] = useState (0)
    return (
            <li>
                <div className='item'>
                <span>{todo.title}</span>
                <button className='btn primary' onClick={()=> deleteTodo(todo.id)}> del</button>
                </div>
            </li>
    );
};
export default Item;