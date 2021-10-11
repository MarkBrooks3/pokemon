import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setSpecies } from '../reducers/species';
import { addPokemon } from '../reducers/pokemons';
//TODO: add alot of details for single pokemon page view

const Pokemon = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => {
    return state.pokemons.find((p) => p.id === Number(id));
  });
  const species = useSelector((state) => state.species);

  useEffect(() => {
    if (!pokemon) {
      dispatch(addPokemon(id));
    } else {
      dispatch(setSpecies(pokemon.species.url));
    }
  }, [pokemon, dispatch, id]);

  return pokemon ? (
    <div>
      {pokemon.name}
      {console.log(pokemon)}
      {console.log(species)}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Pokemon;
