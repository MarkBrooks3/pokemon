import React from 'react';
import styled from 'styled-components';
//TODO add ev yield
//format text

const StyledTable = styled.table`
  border-collapse: collapse;
  border-bottom: hsl(0, 0%, 90%) 1px solid;
`;

const StyledRow = styled.tr`
  height: 2em;
  border-top: hsl(0, 0%, 90%) 1px solid;
`;

const LabelCell = styled.td`
  text-align: right;
  width: 6em;
  color: hsl(0, 0%, 40%);
`;

const InfoCell = styled.td`
  padding: 0 0 0 1em;
`;

const Div = styled.div`
  grid-area: training;
`;

const Training = ({ happiness, exp, catchRate, growth }) => {
  return (
    <Div>
      <h3>Training</h3>
      <StyledTable>
        <tbody>
          <StyledRow>
            <LabelCell>Base Happiness</LabelCell>
            <InfoCell>{happiness}</InfoCell>
          </StyledRow>

          <StyledRow>
            <LabelCell>Base Exp.</LabelCell>
            <InfoCell>{exp}</InfoCell>
          </StyledRow>

          <StyledRow>
            <LabelCell>Catch Rate</LabelCell>
            <InfoCell>{catchRate}</InfoCell>
          </StyledRow>

          <StyledRow>
            <LabelCell>Growth Rate</LabelCell>
            <InfoCell>{growth}</InfoCell>
          </StyledRow>
        </tbody>
      </StyledTable>
    </Div>
  );
};

export default Training;
