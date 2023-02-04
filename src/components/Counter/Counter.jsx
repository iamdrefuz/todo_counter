import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './counter.css'
const Counter = () => {
    const [count ,setCount] = useState(0)
    function inc(){
        setCount(prev=>prev +1)

    }
    function dec (){
        setCount(prev=>prev -1)
    }
    function rest(){
        setCount(prev=>prev =0)
    }
    return (
        <>
        <Link to="/">Home</Link>
        <div className='counter'>
           <div className='actions-box'> <span className='count'>{count}</span></div>
           <div className='actions'>
           <button className='btn primary' onClick={inc}>Inc</button>
            <button className='btn ' onClick={dec}>Dec</button>
            <button className='btn danger' onClick={rest}>Rest</button>
           </div>

        </div>
        </>
    );
};
export default Counter;