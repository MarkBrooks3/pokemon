import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addPokemon } from '../reducers/pokemons';
//TODO: add alot of details for single pokemon page view

const Pokemon = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => {
    return state.pokemons.find((p) => p.id === Number(id));
  });

  useEffect(() => {
    if (!pokemon) {
      dispatch(addPokemon(id));
    }
  }, [pokemon, dispatch, id]);

  return pokemon ? (
    <div>
      {pokemon.name}
      {console.log(pokemon)}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Pokemon;
