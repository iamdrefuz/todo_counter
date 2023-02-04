import React from 'react';
import Item from './Item';
const List = (props) => {
    const {todos, complateTodo,deleteTodo} = props
    return (
        <>
            <ul>
                {
                    todos.map((todo, index)=>{
                        return <Item deleteTodo={deleteTodo} todos={todos} key={todo.id} todo={todo}/>
                    })
                }
            </ul>
        </>
    );
};
export default List;