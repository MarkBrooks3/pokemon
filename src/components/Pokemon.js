import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MoveList from './PokemonComponents/Moves/MoveList';
import Training from './PokemonComponents/Training';
import Stats from './PokemonComponents/Stats';
import Info from './PokemonComponents/Info';
import pokemonServices from '../services/pokemon';
//TODO: add evolution and maybe pokedex entries

const Pokemon = () => {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [species, setSpecies] = useState({});

  useEffect(() => {
    const setData = async () => {
      const pokemonData = await pokemonServices.getOne(id);
      const speciesData = await pokemonServices.getUrl(pokemonData.species.url);
      setPokemon(pokemonData);
      setSpecies(speciesData);
    };
    setData();
  }, [setSpecies, setPokemon, id]);

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
