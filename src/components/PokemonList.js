import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeGroup } from '../reducers/group';
import PokemonLink from './PokemonLink';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1000px;
`;

const PokemonList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.group);

  return state.results ? (
    <div>
      <StyledDiv>
        {state.results.map((p) => (
          <PokemonLink key={p.name} name={p.name} />
        ))}
      </StyledDiv>
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
