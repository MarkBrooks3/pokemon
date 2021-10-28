import React from 'react';

const Stats = ({ stats }) => {
  return (
    <div>
      <h3>Stats</h3>
      {stats.map((s) => (
        <li key={s.stat.name}>
          {s.stat.name} {s.base_stat}
        </li>
      ))}
    </div>
  );
};

export default Stats;
