import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addPokemon } from '../reducers/pokemons';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 175px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 20px;
  margin: 5px;
  text-decoration: none;
  color: black;
  font-family: VT323;
`;

const StyledImg = styled.img`
  height: 150px;
  background-color: white;
  border-radius: 20px 20px 0px 0px;
`;

const PokemonLink = ({ name }) => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) =>
    state.pokemons.find((p) => p.name === name)
  );

  useEffect(() => {
    if (!pokemon) {
      dispatch(addPokemon(name));
    }
  }, [pokemon, name, dispatch]);

  return pokemon ? (
    <StyledLink to={`/pokemon/${pokemon.id}`}>
      <StyledImg src={pokemon.sprites.front_default} alt={pokemon.name} />
      {pokemon.name}
      {console.log(pokemon)}
    </StyledLink>
  ) : (
    <div />
  );
};

export default PokemonLink;
