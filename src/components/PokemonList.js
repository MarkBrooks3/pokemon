import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGroup } from '../reducers/group';
import PokemonLink from './PokemonLink';

const PokemonList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.group);

  return state.results ? (
    <div>
      {state.results.map((p) => (
        <PokemonLink key={p.name} name={p.name} />
      ))}
      <button onClick={() => dispatch(changeGroup(state.previous))}>
        Previous
      </button>
      <button onClick={() => dispatch(changeGroup(state.next))}>Next</button>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default PokemonList;
