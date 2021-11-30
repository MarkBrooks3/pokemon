import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Moves from './Moves';
//TODO ability to switch which moves are shown by generation
//TODO add link for each move to have its own page
//TODO MAYBE add details to all moves like typing and power by calling api

const Div = styled.div`
  grid-area: moves;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const MoveColumn = styled.div`
  text-align: center;
  border: 1px solid red;
`;

const MoveList = ({ moves }) => {
  const [generation, setGeneration] = useState('ultra-sun-ultra-moon');
  const [levelMoves, setLevelMoves] = useState([]);
  const [eggMoves, setEggMoves] = useState([]);
  const [tmMoves, setTmMoves] = useState([]);
  const [tutorMoves, setTutorMoves] = useState([]);

  useEffect(() => {
    moves.forEach((m) => {
      const versionDetails = m.version_group_details.find(
        (v) => v.version_group.name === generation
      );
      if (versionDetails) {
        switch (versionDetails.move_learn_method.name) {
          case 'egg':
            setEggMoves((prev) => [...prev, m]);
            break;
          case 'machine':
            setTmMoves((prev) => [...prev, m]);
            break;
          case 'level-up':
            m.level = versionDetails.level_learned_at;
            setLevelMoves((prev) => [...prev, m]);
            break;
          case 'tutor':
            setTutorMoves((prev) => [...prev, m]);
            break;
          default: {
            break;
          }
        }
      }
    });
  }, [generation, moves]);

  return (
    <Div>
      <MoveColumn>
        <h4>Level Up Moves</h4>
        <Moves moves={levelMoves} area={'level'} />
      </MoveColumn>
      <MoveColumn>
        <h4>Egg Moves</h4>
        <Moves moves={eggMoves} area={'egg'} />
      </MoveColumn>
      <MoveColumn>
        <h4>Tm Moves</h4>
        <Moves moves={tmMoves} area={'machine'} />
      </MoveColumn>
      <MoveColumn>
        <h4>Tutor Moves</h4>
        <Moves moves={tutorMoves} area={'tutor'} />
      </MoveColumn>
    </Div>
  );
};

export default MoveList;
