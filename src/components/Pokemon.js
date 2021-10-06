import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addPokemon } from '../reducers/detailedPokemon';

const Pokemon = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => {
    return state.detailedList.find((p) => p.id === Number(id));
  });

  useEffect(() => {
    if (!pokemon) {
      dispatch(addPokemon(id));
    }
  }, [pokemon, dispatch, id]);

  return pokemon ? <div>{pokemon.name}</div> : <div>Loading...</div>;
};

export default Pokemon;
