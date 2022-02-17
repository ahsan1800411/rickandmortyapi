import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';

const GET_CHARACTER_LOCATION = gql`
  query getCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState('');

  const [getLocations, { loading, data, error }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>
      {error && <h1>Something went wrong</h1>}
      {loading && <h1>Loading...</h1>}
      <ul>
        {data.characters.results.map((ch) => (
          <li>{ch.location.name}</li>
        ))}
      </ul>
    </>
  );
}
