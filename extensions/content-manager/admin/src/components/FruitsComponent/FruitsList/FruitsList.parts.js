import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@buffetjs/core';
import { useFruitField } from './FruitsList.hook';

export const Fruit = ({ fruit, label, checked, fieldIndex }) => {
  const { add, remove } = useFruitField({ fieldIndex });

  const handleCheckboxChange = () => (checked ? remove() : add(fruit));

  return (
    <Checkbox name={fruit.name} message={label} value={checked} onChange={handleCheckboxChange} />
  );
};

Fruit.propTypes = {
  fruit: PropTypes.object,
  label: PropTypes.string,
  fieldIndex: PropTypes.number,
  checked: PropTypes.bool,
};

Fruit.defaultProps = {
  fruit: {},
  label: '',
  checked: false,
};
