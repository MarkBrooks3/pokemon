import React from 'react';
import { useSelector } from 'react-redux';
import PokemonLink from './PokemonLink';

const PokemonList = () => {
  const state = useSelector((state) => state.pokemonList);

  return state.results ? (
    <div>
      {state.results.map((p) => (
        <PokemonLink key={p.name} name={p.name} />
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default PokemonList;
