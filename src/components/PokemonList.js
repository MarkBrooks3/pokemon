import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PokemonLink from './PokemonLink';
import pokemonService from '../services/pokemon';
//TODO add filter and search

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  border: solid 3px red;
  padding: 3em;
  justify-content: center;
  background-color: white;
`;

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const newData = await pokemonService.getAll();
      setPokemons(newData.results);
    };
    setData();
  }, [setPokemons]);

  return pokemons ? (
    <StyledDiv>
      {pokemons.map((pokemon, index) => (
        <PokemonLink key={index} name={pokemon.name} id={index + 1} />
      ))}
    </StyledDiv>
  ) : (
    <div>Loading...</div>
  );
};

export default PokemonList;
