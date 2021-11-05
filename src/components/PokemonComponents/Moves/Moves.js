import React from 'react';

const formatName = (name) => {
  return name
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');
};

const Moves = ({ moves }) => {
  return (
    <div>
      {moves.map((m) => (
        <li key={m.move.name}>
          {formatName(m.move.name)} {true && m.level}
        </li>
      ))}
    </div>
  );
};

export default Moves;
