import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MoveList from './PokemonComponents/Moves/Moves';
import Training from './PokemonComponents/Training';
import Stats from './PokemonComponents/Stats';
import Info from './PokemonComponents/Info';
import { getOne, getUrl } from '../services/pokemon';
import styled from 'styled-components';
import Breeding from './PokemonComponents/Breeding';
import Evolution from './PokemonComponents/Evolutions';
import PreviousAndNext from './PokemonComponents/PreviousAndNext';
//TODO: add evolution and maybe pokedex entries

const Page = styled.div`
  border: 3px solid red;
  border-radius: 10px;
  padding: 0 3em;
  display: grid;
  grid-template:
    'title title title ' 100px
    'image  info  training' auto
    'image  info  breeding' auto
    'stats stats . ' auto
    'moves moves moves' auto / 1fr 1fr 1fr;
  background-color: white;
`;

const Title = styled.h1`
  grid-area: title;
  justify-self: center;
`;

const Image = styled.img`
  grid-area: image;
  width: 100%;
`;

const Pokemon = () => {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [species, setSpecies] = useState({});

  useEffect(() => {
    const setData = async () => {
      const pokemonData = await getOne(id);
      const speciesData = await getUrl(pokemonData.species.url);
      setPokemon(pokemonData);
      setSpecies(speciesData);
    };
    setData();
  }, [setSpecies, setPokemon, id]);

  return pokemon && species.growth_rate ? (
    <Page color={species.color}>
      {console.log('Pokemon', pokemon)}
      {console.log('species', species)}

      <PreviousAndNext id={id} />
      <Title>{pokemon.name}</Title>
      <Image
        alt={pokemon.name}
        src={pokemon.sprites.other['official-artwork'].front_default}
      />
      <Breeding
        eggGroups={species.egg_groups}
        genderRate={species.gender_rate}
        name={pokemon.name}
        hatchCounter={species.hatch_counter}
      />
      <Training
        happiness={species.base_happiness}
        exp={pokemon.base_experience}
        catchRate={species.capture_rate}
        growth={species.growth_rate.name}
      />
      <Info
        color={species.color}
        numbers={species.pokedex_numbers}
        types={pokemon.types}
        genera={species.genera}
        height={pokemon.height}
        weight={pokemon.weight}
        abilities={pokemon.abilities}
      />
      <Stats stats={pokemon.stats} />
      <Evolution url={species.evolution_chain.url} />
      <MoveList moves={pokemon.moves} />
    </Page>
  ) : (
    <div>Loading...</div>
  );
};

export default Pokemon;
