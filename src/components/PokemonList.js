import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonLink from './PokemonLink';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');

  const getPokemon = async (url) => {
    const response = await axios.get(url);
    setPokemon(response.data.results);
    setNext(response.data.next);
    setPrevious(response.data.previous);
  };

  useEffect(() => {
    getPokemon('https://pokeapi.co/api/v2/pokemon');
  }, []);

  return (
    <div>
      {pokemon.map((p) => (
        <PokemonLink key={p.name} url={p.url} />
      ))}
      {previous ? (
        <button onClick={() => getPokemon(previous)}>Prev</button>
      ) : (
        <div />
      )}
      {next ? <button onClick={() => getPokemon(next)}>Next</button> : <div />}
    </div>
  );
};

export default PokemonList;
