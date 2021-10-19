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
  margin: 10px 0px 10px 0px;
  padding: 5px;
  text-decoration: none;
  color: black;
  font-family: VT323;
  font-size: 20px;
  box-shadow: 0px 0px 10px #f0f0f0;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 20px #d0d0d0;
    transform: scale(1.05, 1.05);
  }
`;

const Number = styled.div`
  color: gray;
  font-family: Montserrat;
  font-size: 12px;
`;

const StyledImg = styled.img`
  height: 150px;
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  margin: 15px 0px 5px 0px;
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
      <Number>#{pokemon.id}</Number>
      {console.log(pokemon)}
    </StyledLink>
  ) : (
    <div />
  );
};

export default PokemonLink;
