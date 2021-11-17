import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PokemonLink from './PokemonLink';
import pokemonService from '../services/pokemon';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1000px;
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
