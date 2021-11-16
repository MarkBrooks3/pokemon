import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setSpecies } from '../reducers/species';
import { addPokemon } from '../reducers/pokemons';
import MoveList from './PokemonComponents/Moves/MoveList';
import Training from './PokemonComponents/Training';
import Stats from './PokemonComponents/Stats';
import Info from './PokemonComponents/Info';
//TODO: add evolution and maybe pokedex entries

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

  return pokemon && species.growth_rate ? (
    <div>
      {console.log('Pokemon', pokemon)}
      {console.log('species', species)}

      <h1>{pokemon.name}</h1>
      <MoveList moves={pokemon.moves} />
      <Training
        happiness={species.base_happiness}
        exp={pokemon.base_experience}
        catchRate={species.capture_rate}
        growth={species.growth_rate.name}
      />
      <Stats stats={pokemon.stats} />
      <Info
        color={species.color}
        numbers={species.pokedex_numbers}
        types={pokemon.types}
        genera={species.genera}
        height={pokemon.height}
        weight={pokemon.weight}
        abilities={pokemon.abilities}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Pokemon;
