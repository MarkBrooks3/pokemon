import React, { useState } from 'react';
//TODO split moves up by learn method and sort by level
//also ability to switch which moves are shown by generation
//TODO LATER add details to all moves like typing and power by calling api

const MoveList = ({ moves }) => {
  const [generation, setGeneration] = useState('ultra-sun-ultra-moon');

  return (
    <div>
      <h3>Moves</h3>
      {moves.map((m) => {
        const versionDetails = m.version_group_details.find(
          (v) => v.version_group.name === generation
        );

        return versionDetails ? (
          <li key={m.move.name}>
            {m.move.name} {versionDetails.level_learned_at}{' '}
            {versionDetails.move_learn_method.name}
          </li>
        ) : null;
      })}
    </div>
  );
};

export default MoveList;
