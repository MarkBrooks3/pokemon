import React from 'react';
//TODO add styles

const Abilities = ({ abilities }) => {
  return (
    <div>
      {abilities.map((a) =>
        a.is_hidden ? (
          <li key={a.slot}>{a.ability.name}(hidden)</li>
        ) : (
          <li key={a.slot}>
            {a.slot}.{a.ability.name}
          </li>
        )
      )}
    </div>
  );
};

export default Abilities;
