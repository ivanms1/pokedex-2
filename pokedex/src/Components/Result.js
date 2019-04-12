import React from 'react';


function Result({ pokemon, entry }) {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      <p>{entry[0].flavor_text}</p>
      <div>
        {pokemon.types.map(type => <p key={type.type.name}>{type.type.name}</p>)}
      </div>
    </div>
  )
}

export default Result;