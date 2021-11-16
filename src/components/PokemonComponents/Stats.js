import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-collapse: collapse;
  border-bottom: hsl(0, 0%, 95%) 1px solid;
`;

const StyledRow = styled.tr`
  height: 2em;
  border-top: hsl(0, 0%, 95%) 1px solid;
`;

const BarCell = styled.td`
  width: 255px;
`;

const TitleCell = styled.td`
  text-align: right;
  width: 6em;
  color: hsl(0, 0%, 40%);
`;

const NumberCell = styled.td`
  text-align: right;
  padding: 4px 10px;
`;

const StatBar = styled.div`
  width: ${(props) => (props.value / 255) * 100}%;
  height: 0.75em;
  background-color: ${(props) => {
    switch (true) {
      case props.value <= 20:
        return '#F34444';
      case props.value <= 60:
        return '#FF7F0F';
      case props.value <= 90:
        return '#FFDD57';
      case props.value <= 130:
        return '#A0E515';
      case props.value <= 150:
        return '#23CD5E';
      default:
        return '#00C2B8';
    }
  }};
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

const formatName = (name) => {
  name = name.replace('special-', 'Sp. ');
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};

const Stats = ({ stats }) => {
  let total = 0;
  return (
    <div>
      <h3>Base Stats</h3>
      <StyledTable>
        <tbody>
          {stats.map((s, i) => {
            total += s.base_stat;
            return (
              <StyledRow key={s.stat.name} i={i}>
                <TitleCell>{formatName(s.stat.name)}</TitleCell>
                <NumberCell>{s.base_stat}</NumberCell>
                <BarCell>
                  <StatBar value={s.base_stat} />
                </BarCell>
              </StyledRow>
            );
          })}
          <StyledRow>
            <TitleCell>Total</TitleCell>
            <NumberCell>{total}</NumberCell>
          </StyledRow>
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Stats;
