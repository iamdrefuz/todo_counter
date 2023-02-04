import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
       <>
       <Link to='/counter'>Counter</Link>
       <Link to='/todo'>Todo</Link>
         <div className='home' >
            <div>Hello World !</div>
        </div>
       </>
    );
};


export default Home;