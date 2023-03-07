import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;