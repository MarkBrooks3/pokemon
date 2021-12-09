import React from 'react';
import styled from 'styled-components';
import { formatName, sortMoves } from '../../../services/helper';

const StyledTable = styled.table`
  border-collapse: collapse;
  border-bottom: hsl(0, 0%, 90%) 1px solid;
`;

const StyledRow = styled.tr`
  height: 1.5em;
  border-top: hsl(0, 0%, 90%) 1px solid;
`;

const InfoCell = styled.td`
  padding: 0 1em 0 1em;
`;

const NumberCell = styled.td`
  text-align: right;
  padding: 0 0 0 1em;
`;

const Moves = ({ moves }) => {
  return (
    <StyledTable>
      <tbody>
        {sortMoves(moves).map((m) => (
          <StyledRow key={m.move.name}>
            {m.level > -1 && <NumberCell>{Number(m.level)}</NumberCell>}
            <InfoCell>{formatName(m.move.name)}</InfoCell>
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Moves;
