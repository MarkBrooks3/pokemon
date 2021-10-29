import React from 'react';
import styled from 'styled-components';
//TODO add more styles

const StatBar = styled.div`
  width: ${(props) => (props.value / 255) * 100}%;
  background-color: red;
  border-radius: 0.3em;
`;

const BarHolder = styled.div`
  width: 255px;
  background-color: gray;
  border-radius: 0.3em;
`;

const Stats = ({ stats }) => {
  return (
    <div>
      <h3>Stats</h3>
      {stats.map((s) => (
        <li key={s.stat.name}>
          {s.stat.name}{' '}
          <BarHolder>
            <StatBar value={s.base_stat}>{s.base_stat}</StatBar>
          </BarHolder>
        </li>
      ))}
    </div>
  );
};

export default Stats;
