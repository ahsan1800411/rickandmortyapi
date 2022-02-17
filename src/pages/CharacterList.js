import React from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';

export default function CharacterList() {
  const { data, error, loading } = useCharacters();

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className='character'>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt='' />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
