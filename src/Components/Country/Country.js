import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({ country }) => {
  console.log(country);
  const { name, capital, area  } = country;
  return (
    <div className='rounded-md border-2 border-rose-500 hover:bg-orange-400 shadow-md hover:shadow-cyan-600'>
      <div className='flex justify-center my-4'>
        <img style={{ height: '250px', width: '400px' }} src={country.flags.png} />
      </div>
      <div>
        <p>Name: {name.common}</p>
        <p>Capital: {capital ? capital[0] : capital}</p>
        <p>Area: {area}</p>
        <button className='my-4 px-2 py-1 rounded bg-cyan-500'>
          <Link to={`/all-country/${name.common}`}>See full info</Link>
        </button>
      </div>
    </div>
  );
};

export default Country;