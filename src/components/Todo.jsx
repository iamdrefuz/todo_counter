import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import List from './List';
import Nav from './Nav';
import './todo.css'
const Todo = () => {
    const [todos, setTodos] = useState([
      {
        id : 1,
        title : "Feruzbek Jumaboyev",
      },
      {
        id : 2,
        title : "John Doe",
      }
  ])

    function addTodo(title){
        const todo ={
          id:todos.length+1,
          title
        }
        setTodos([...todos,todo])
      }
      function deleteTodo(id){
        setTodos(todos.filter((todo)=> {
          if(todo.id !== id){
            return  todo
          }
          return
        }))
      }

      
    return (<>
     <Link to="/">Home</Link>
        <div className='todo'>
        
          <Form addTodo={addTodo}/>
            <List todos={todos}  deleteTodo={deleteTodo}/>
        </div></>
    );
};

export default Todo;