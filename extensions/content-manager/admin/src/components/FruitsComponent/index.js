import React, { memo, useState, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { Padded, Text } from '@buffetjs/core';
import { getFruits } from '../../utils/fruits';
import connect from '../FieldComponent/utils/connect';
import select from '../FieldComponent/utils/select';
import { FruitsList } from './FruitsList';

const FruitComponent = ({ componentValue }) => {
  const [fruits, setFruits] = useState([]);
  const hasComponentValue = componentValue !== null;

  useEffect(() => {
    getFruits().then(setFruits);
  }, []);

  if (!hasComponentValue && !fruits.length) {
    return null;
  }

  return (
    <Padded top left right bottomsize="smd">
      <Text fontWeight="bold">Fruits List</Text>
      <FruitsList fruits={fruits} checkedFruits={componentValue?.fruits} />
    </Padded>
  );
};

const Memoized = memo(FruitComponent, isEqual);
export default connect(Memoized, select);
