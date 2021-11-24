import React from 'react';
import styled from 'styled-components';

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
  grid-area: breeding;
`;

const Breeding = ({ eggGroups, genderRate, name, hatchCounter }) => {
  return (
    <Div>
      <h3>Breeding</h3>
      <StyledTable>
        <StyledRow>
          <LabelCell>Egg Groups</LabelCell>
          <InfoCell>{eggGroups.map((group) => group.name).join(', ')}</InfoCell>
        </StyledRow>
        <StyledRow>
          <LabelCell>Gender</LabelCell>
          <InfoCell>
            {genderRate >= 0
              ? `${(genderRate / 8) * 100}% female, ${
                  ((8 - genderRate) / 8) * 100
                }% male`
              : `${name} is genderless`}
          </InfoCell>
        </StyledRow>
        <StyledRow>
          <LabelCell>Egg Cycle</LabelCell>
          <InfoCell>{`${hatchCounter} (${
            255 * (hatchCounter + 1)
          } steps)`}</InfoCell>
        </StyledRow>
      </StyledTable>
    </Div>
  );
};

export default Breeding;
