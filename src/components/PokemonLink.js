import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPokemon } from '../reducers/pokemons';

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
    <Link to={`/pokemon/${pokemon.id}`}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </Link>
  ) : (
    <div />
  );
};

export default PokemonLink;
