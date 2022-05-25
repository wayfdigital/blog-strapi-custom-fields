import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@buffetjs/core';
import { Fruit } from './FruitsList.parts.js';
import { useSelectAll } from './FruitsList.hooks';

export const FruitsList = ({ fruits, checkedFruits }) => {
  const { toggleSelectAll } = useSelectAll({ fruits, checkedFruits });
  const hasFruits = fruits.length > 0;

  if (!hasFruits) {
    return <p>No fruits available</p>;
  }

  const fruitsListItems = fruits.map((fruit, index) => {
    const key = `_fruit_${fruit.name}`;
    const label = `${index + 1}. ${fruit.name}`;
    const fieldIndex = checkedFruits.findIndex((item) => item?.id === fruit.id);
    const checked = fieldIndex !== -1;

    return (
      <Fruit fruit={fruit} key={key} label={label} checked={checked} fieldIndex={fieldIndex} />
    );
  });

  return (
    <>
      <Checkbox
        message="Select All"
        name="selectAll"
        value={fruits.length === checkedFruits.length}
        onChange={toggleSelectAll}
      />
      <ul>{fruitsListItems}</ul>
    </>
  );
};

FruitsList.propTypes = {
  fruits: PropTypes.array,
  checkedFruits: PropTypes.array,
};

FruitsList.defaultProps = {
  fruits: [],
  checkedFruits: [],
};
