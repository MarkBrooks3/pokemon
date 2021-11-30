import React from 'react';
import styled from 'styled-components';
import { formatName } from '../../services/helper';

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
        <tbody>
          <StyledRow>
            <LabelCell>Egg Groups</LabelCell>
            <InfoCell>
              {eggGroups.map((group) => formatName(group.name)).join(', ')}
            </InfoCell>
          </StyledRow>
          <StyledRow>
            <LabelCell>Gender</LabelCell>
            <InfoCell>
              {genderRate >= 0
                ? `${(genderRate / 8) * 100}% Female, ${
                    ((8 - genderRate) / 8) * 100
                  }% Male`
                : `${name} is genderless`}
            </InfoCell>
          </StyledRow>
          <StyledRow>
            <LabelCell>Egg Cycle</LabelCell>
            <InfoCell>{`${hatchCounter} (${
              255 * (hatchCounter + 1)
            } steps)`}</InfoCell>
          </StyledRow>
        </tbody>
      </StyledTable>
    </Div>
  );
};

export default Breeding;
