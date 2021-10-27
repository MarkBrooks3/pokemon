import React from 'react';
//TODO add styles

const Abilities = ({ abilities }) => {
  return (
    <div>
      <h3>Abilities</h3>
      {abilities.map((a) =>
        a.is_hidden ? (
          <p key={a.slot}>{a.ability.name}(hidden)</p>
        ) : (
          <p key={a.slot}>
            {a.slot}. {a.ability.name}
          </p>
        )
      )}
    </div>
  );
};

export default Abilities;
