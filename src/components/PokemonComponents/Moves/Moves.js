import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  border-bottom: hsl(0, 0%, 90%) 1px solid;
`;

const StyledRow = styled.tr`
  height: 1.5em;
  border-top: hsl(0, 0%, 90%) 1px solid;
`;

const InfoCell = styled.td`
  padding: 0 0 0 1em;
`;

const NumberCell = styled.td`
  text-align: right;
  padding: 0 0 0 1em;
`;

const formatName = (name) => {
  return name
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');
};

const sortMoves = (moves) => {
  if (moves[0] && moves[0].level > -1) moves.sort((a, b) => a.level - b.level);
  else
    moves.sort((a, b) => {
      const textA = a.move.name;
      const textB = b.move.name;
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

  return moves;
};

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
