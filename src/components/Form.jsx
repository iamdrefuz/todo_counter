import React, {useState} from 'react';

const Form = (props) => {
    const {addTodo} = props
    const [value,setValue]=useState('') 
    function onSubmit (e){
        e.preventDefault()
        if(value !== '' && !!value.trim()){
          addTodo(value)
        }
        setValue('')
     }
 
    return (
        <form onClick={onSubmit}>
            <input className='input' placeholder='Enter Todo' onChange = {(event)=>setValue(event.target.value)} value={value} />
            <button className='btn'>Add</button>
        </form>
    );
};


export default Form;