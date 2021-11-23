import React from 'react';
import Types from './Types';
import styled from 'styled-components';
import Abilities from './Abilities';

const StyledTable = styled.table`
  border-collapse: collapse;
  border-bottom: hsl(0, 0%, 90%) 1px solid;
  width: 80%;
`;

const StyledRow = styled.tr`
  height: 2em;
  border-top: hsl(0, 0%, 90%) 1px solid;
`;

const LabelCell = styled.td`
  text-align: right;
  color: hsl(0, 0%, 40%);
`;

const InfoCell = styled.td`
  padding: 0 0 0 1em;
`;

const Div = styled.div`
  grid-area: info;
  border: solid red 3px;
`;

const decimetersToFeet = (decimeters) => {
  let inches = (decimeters * 3.937).toFixed(0);
  const feet = (inches / 12).toFixed(0);
  inches %= 12;
  return `(${feet}'${inches}")`;
};

const hectogramsToPounds = (hectograms) => {
  const pounds = (hectograms * 0.220462).toFixed(1);
  return `(${pounds} lbs)`;
};

const Info = ({ color, numbers, types, genera, height, weight, abilities }) => {
  return (
    <Div>
      <h3>Info</h3>
      <StyledTable>
        <tbody>
          <StyledRow>
            <LabelCell>National №</LabelCell>
            <InfoCell>
              {numbers.find((n) => n.pokedex.name === 'national').entry_number}
            </InfoCell>
          </StyledRow>

          <StyledRow>
            <LabelCell>Type</LabelCell>
            <InfoCell>
              <Types types={types} />
            </InfoCell>
          </StyledRow>

          <StyledRow>
            <LabelCell>Species</LabelCell>
            <InfoCell>
              {genera.find((g) => g.language.name === 'en').genus}
            </InfoCell>
          </StyledRow>

          <StyledRow>
            <LabelCell>Height</LabelCell>
            <InfoCell>
              {height / 10} m {decimetersToFeet(height)}
            </InfoCell>
          </StyledRow>

          <StyledRow>
            <LabelCell>Weight</LabelCell>
            <InfoCell>
              {weight / 10} kg {hectogramsToPounds(weight)}
            </InfoCell>
          </StyledRow>

          <StyledRow>
            <LabelCell>Color</LabelCell>
            <InfoCell>
              {color.name[0].toUpperCase() + color.name.slice(1)}
            </InfoCell>
          </StyledRow>
          <StyledRow>
            <LabelCell>Abilities</LabelCell>
            <InfoCell>
              <Abilities abilities={abilities} />
            </InfoCell>
          </StyledRow>
        </tbody>
      </StyledTable>
    </Div>
  );
};

export default Info;
