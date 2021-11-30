export const formatName = (name) => {
  return name
    .split('-')
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');
};

export const sortMoves = (moves) => {
  if (moves[0] && moves[0].level > -1) moves.sort((a, b) => a.level - b.level);
  else
    moves.sort((a, b) => {
      const textA = a.move.name;
      const textB = b.move.name;
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

  return moves;
};

export const decimetersToFeet = (decimeters) => {
  let inches = (decimeters * 3.937).toFixed(0);
  const feet = (inches / 12).toFixed(0);
  inches %= 12;
  return `(${feet}'${inches}")`;
};

export const hectogramsToPounds = (hectograms) => {
  const pounds = (hectograms * 0.220462).toFixed(1);
  return `(${pounds} lbs)`;
};
