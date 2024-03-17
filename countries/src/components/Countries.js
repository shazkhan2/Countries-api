import React, { useState, useEffect } from 'react';

export const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data.json');
        const data = await response.json();
        setCountriesData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countriesData.map(country => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};
