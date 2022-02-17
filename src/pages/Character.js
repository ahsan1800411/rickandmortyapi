import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from './../hooks/useCharacter';

export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacterById(id);

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div>
      <h1>{data.character.name}</h1>
      <img
        src={data.character.image}
        alt={data.character.name}
        height='550px'
        width='550px'
      />
      {data.character.episode.map((ep) => {
        return (
          <>
            <h2>{ep.name}</h2>
            <p>{ep.episode}</p>
          </>
        );
      })}
    </div>
  );
}
