import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const AllCountries = () => {
  const countries = useLoaderData()
  return (
    <div className='m-12 grid grid-cols-3 gap-8 '>
      {
        countries.map(country=>
          <Country
          key={country.cca3}
          country={country}
          ></Country>
        )
      }  
    </div>
  );
};

export default AllCountries;