import React from 'react';
import styled from 'styled-components';
//TODO add more styles

const StatBar = styled.div`
  width: ${(props) => (props.value / 255) * 100}%;
  height: 0.75em;
  background-color: ${(props) => {
    const percent = (props.value / 255) * 100;
    switch (true) {
      case percent <= 10:
        return '#F34444';
      case percent <= 20:
        return '#FF7F0F';
      case percent <= 40:
        return '#FFDD57';
      case percent <= 60:
        return '#A0E515';
      case percent <= 80:
        return '#23CD5E';
      default:
        return '#00C2B8';
    }
  }};
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

const BarCell = styled.td`
  width: 255px;
`;

const TitleCell = styled.td`
  text-align: right;
  width: 5em;
`;

const NumberCell = styled.td`
  width: 2em;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const Stats = ({ stats }) => {
  return (
    <div>
      <h3>Stats</h3>
      <StyledTable>
        <tbody>
          {stats.map((s) => (
            <tr key={s.stat.name}>
              <TitleCell>{s.stat.name}</TitleCell>
              <NumberCell>{s.base_stat}</NumberCell>
              <BarCell>
                <StatBar value={s.base_stat} />
              </BarCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default Stats;
