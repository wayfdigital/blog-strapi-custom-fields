import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@buffetjs/core';
import { Tooltip } from '@buffetjs/styles';
import { useFruitField } from './FruitsList.hooks';

export const Fruit = ({ fruit, label, checked, fieldIndex }) => {
  const { add, remove } = useFruitField();

  const handleCheckboxChange = () => (checked ? remove(fieldIndex) : add(fruit));

  return (
    <>
      <div data-for="fruit_desc" data-tip={fruit.description}>
        <Checkbox
          name={fruit.name}
          message={label}
          value={checked}
          onChange={handleCheckboxChange}
        />
      </div>
      <Tooltip id="fruit_desc" />
    </>
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
