import React from 'react';

const Training = ({ happiness, exp, catchRate, growth }) => {
  return (
    <div>
      <h3>Training</h3>
      <li>Base Happiness {happiness}</li>
      <li>Base Exp. {exp}</li>
      <li>Catch Rate {catchRate}</li>
      <li>Growth Rate {growth}</li>
    </div>
  );
};

export default Training;
