import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonLink = ({ url }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);
  return data.sprites ? (
    <Link to={`/pokemon/${data.id}`}>
      <img src={data.sprites.front_default} alt={data.name} />
    </Link>
  ) : (
    <div />
  );
};

export default PokemonLink;
