import React from 'react';
import styled from 'styled-components';

const Type = styled.div`
  padding: 3px 5px 3px 5px;
  border-radius: 5px;
  color: white;
  margin: 3px;
  background-color: ${(props) => {
    switch (props.type) {
      case 'normal':
        return '#A8A77A';
      case 'water':
        return '#6390F0';
      case 'fire':
        return '#EE8130';
      case 'grass':
        return '#7AC74C';
      case 'bug':
        return '#A6B91A';
      case 'flying':
        return '#A98FF3';
      case 'poison':
        return '#A33EA1';
      case 'electric':
        return '#F7D02C';
      case 'ground':
        return '#E2BF65';
      case 'fairy':
        return '#D685AD';
      case 'fighting':
        return '#C22E28';
      case 'psychic':
        return '#F95587';
      case 'ice':
        return '#96D9D6';
      case 'dragon':
        return '#6F35FC';
      case 'rock':
        return '#B6A136';
      case 'ghost':
        return '#735797';
      case 'dark':
        return '#705746';
      case 'steel':
        return '#B7B7CE';
      default:
        return 'white';
    }
  }};
`;

const Holder = styled.div`
  display: flex;
`;

const Types = ({ types }) => {
  return (
    <Holder>
      {types.map((type) => (
        <Type key={type.type.name} type={type.type.name}>
          {type.type.name}
        </Type>
      ))}
    </Holder>
  );
};

export default Types;
