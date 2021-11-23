import React from 'react';
import styled from 'styled-components';
//TODO add styles

const Ability = styled.li`
  list-style-type: none;
  padding: 2px;
`;

const Hidden = styled.li`
  list-style-type: none;
  color: hsl(0, 0%, 40%);
  padding: 2px;
  font-size: 0.9em;
`;

const Abilities = ({ abilities }) => {
  return (
    <div>
      {abilities.map((a) =>
        a.is_hidden ? (
          <Hidden key={a.slot}>{a.ability.name}(hidden)</Hidden>
        ) : (
          <Ability key={a.slot}>
            {a.slot}. {a.ability.name}
          </Ability>
        )
      )}
    </div>
  );
};

export default Abilities;
