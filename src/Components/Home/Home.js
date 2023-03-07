import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='m-6 space-y-9 text-3xl'>
        <h1>This is Home Page</h1>
        <p>Let's dive into country details:</p>
      </div>
      <button className='text-white text-xl rounded-md px-3 py-2 bg-sky-600'>
        <Link to='/all-countries'>Click here to go</Link>
      </button>
    </div>
  );
};

export default Home;