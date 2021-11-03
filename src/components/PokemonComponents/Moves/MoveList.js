import React, { useEffect, useState } from 'react';
import Moves from './Moves';
//TODO split moves up by learn method and sort by level
//also ability to switch which moves are shown by generation
//TODO LATER add details to all moves like typing and power by calling api

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
    <div>
      <h3>Moves</h3>
      <h4>Level Up Moves</h4>
      <Moves moves={levelMoves} />
      <h4>Egg Moves</h4>
      <Moves moves={eggMoves} />
      <h4>Tm Moves</h4>
      <Moves moves={tmMoves} />
      <h4>Tutor Moves</h4>
      <Moves moves={tutorMoves} />
    </div>
  );
};

export default MoveList;
