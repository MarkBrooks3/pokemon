import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Pokemon = () => {
  let { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, [id]);

  return <div>{data.name}</div>;
};

export default Pokemon;
