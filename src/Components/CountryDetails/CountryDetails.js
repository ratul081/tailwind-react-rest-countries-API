import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
  const countryDetails = useLoaderData()[0];
  const { altSpellings, area, borders, capital, capitalInfo, car, cca2, cca3, ccn3, cioc, coatOfArms, continents, currencies, demonyms, fifa, flag, flags, gini, idd, independent, landlocked, languages, latlng, maps, name, population, region, startOfWeek, status, subregion, timezones, tld, translations, unMember, } = countryDetails;
  console.log(countryDetails);
  return (
    <div className='m-8'>
      <p className='text-6xl'>{name.common}</p>
      <div className='text-start m-4 space-y-3'>
        <p>
          {name.common} is a {continents ? continents[0] : continents} country with a rich history and diverse culture. It is the second largest country in the world, spanning a total area of {area} square kilometers. {name.common} is bordered by the {borders ? borders[0] : borders}.
        </p>
        <p>
          {name.common} has a federal parliamentary democracy as its form of government, with the capital city located in {capital ? capital[0] : capital}. The country is divided into ten provinces and three territories, each with their own distinct political and cultural identities.
        </p>
        <p>
          The {Object.values(demonyms.eng)[0]} economy is one of the largest in the world, with a strong focus on natural resources such as oil, gas, and minerals. The official currency of {name.common} is the {Object.values(currencies)[0].name} and symbol is {Object.values(currencies)[0].symbol}. In addition to its natural resources, {name.common} is also known for its strong manufacturing, technology, and financial sectors.
        </p>
        <p>
          {name.common} is a country with a rich cultural heritage, with {Object.values(languages)[0]} as its official languages. The country is known for its multiculturalism, with a diverse population made up of people from all over the world. Indigenous cultures are an important part of {name.common}'s cultural heritage, with First Nations, Inuit, and Métis communities contributing to the country's rich tapestry of traditions and customs.
        </p>
        <p>
          As of 2023, {name.common}'s population is approximately {population} people. The country has a strong healthcare system and education system, with high levels of social welfare and equality. The country is known for its progressive policies on issues such as LGBTQ+ rights and climate change.
        </p>
        <p>
          {unMember ? `${name.common} is a member of various international organizations, including the United Nations, the G7, and NATO. The country has strong relationships with its neighbors, the United States and Mexico, and is also a key player in global trade and diplomacy.` : `There was no information found about ${name.common}'s membership.`}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;