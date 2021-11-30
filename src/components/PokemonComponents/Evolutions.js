import React, { useState, useEffect } from 'react';
import pokemonService from '../../services/pokemon';

const Evolution = ({ url }) => {
  const [chain, setChain] = useState({});

  useEffect(() => {
    const setData = async () => {
      const newData = await pokemonService.getUrl(url);
      console.log(newData);
      setChain(newData);
    };
    setData();
  }, []);

  return <div></div>;
};

export default Evolution;
