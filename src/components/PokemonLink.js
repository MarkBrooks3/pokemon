import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 20px;
  margin: 10px 0px 10px 0px;
  padding: 5px;
  text-decoration: none;
  color: black;
  font-family: VT323;
  font-size: 20px;
  box-shadow: 0px 0px 10px #f0f0f0;
  transition: 500ms ease;
  &:hover {
    box-shadow: 0px 0px 20px #d0d0d0;
    transform: scale(1.05, 1.05);
  }
`;

const Number = styled.div`
  color: gray;
  font-family: Montserrat;
  font-size: 12px;
`;

const StyledImg = styled.img`
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 20px 20px 0px 0px;
  margin: 15px 0px 5px 0px;
`;

const PokemonLink = ({ name, id }) => {
  return (
    <StyledLink to={`/pokemon/${id}`}>
      <StyledImg
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <Number>#{('000' + id).substr(-3)}</Number>
      {name[0].toUpperCase() + name.slice(1)}
    </StyledLink>
  );
};

export default PokemonLink;
