import React, { useEffect, useState } from 'react';
import { getList } from '../../services/pokemon';

const PreviousAndNext = ({ id }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const offset = id - 1;
    const LIMIT = 3;
    const setData = async () => {
      const data = await getList(offset, LIMIT);
      setList(data.results);
    };
    setData();
  }, [id]);

  return <div>{console.log('HELLO', list)}</div>;
};

export default PreviousAndNext;
