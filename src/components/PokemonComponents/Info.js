import React from 'react';
import Types from './Types';
//TODO add height in feet and weight in pounds

const Info = ({ color, numbers, types, genera, height, weight }) => {
  return (
    <div>
      <h3>Info</h3>
      <li>
        National №
        {numbers.find((n) => n.pokedex.name === 'national').entry_number}
      </li>
      <li>
        <Types types={types} />
      </li>
      <li>Species {genera.find((g) => g.language.name === 'en').genus}</li>
      <li>Height {height / 10} m</li>
      <li>Weight {weight / 10} kg</li>
      <li>Color {color.name}</li>
    </div>
  );
};

export default Info;
