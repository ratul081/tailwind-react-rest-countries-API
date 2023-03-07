import React from 'react';
import { NavLink } from 'react-router-dom';
import { GlobeAltIcon } from '@heroicons/react/24/solid'


const Header = () => {
  return (
    <div className='py-2 bg-teal-300'>
      <div className='flex justify-center space-x-32'>
        <NavLink to='/'><GlobeAltIcon className='h-7 w-6'></GlobeAltIcon></NavLink>
        <NavLink className={({ isActive }) => isActive ? 'bg-red-500 px-1 rounded' : undefined} to='/home'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'bg-red-500 px-1 rounded' : undefined} to='/all-countries'>All Country</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'bg-red-500 px-1 rounded' : undefined} to='/search'>Search</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'bg-red-500 px-1 rounded' : undefined} to='/about'>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'bg-red-500 px-1 rounded' : undefined} to='/contact-us'>Contact us</NavLink>
      </div>
    </div>
  );
};

export default Header;