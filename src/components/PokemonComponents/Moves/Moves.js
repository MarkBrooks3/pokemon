import React from 'react';

const Moves = ({ moves }) => {
  return (
    <div>
      {moves.map((m) => (
        <li key={m.move.name}>{m.move.name}</li>
      ))}
    </div>
  );
};

export default Moves;
