import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@buffetjs/core';

export const FruitsList = ({ fruits }) => {
  const hasFruits = fruits.length !== 0;

  if (!hasFruits) {
    return <p>No fruits available</p>;
  }

  return (
    <ul>
      {fruits.map((fruit, index) => {
        const key = `_fruit_${fruit.name}`;
        const label = `${index}. ${fruit.name}`;
        return (
          <li key={key} style={{ paddingTop: 15 }}>
            <Checkbox
              name={fruit.name}
              message={label}
              value={fruit.name}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

FruitsList.propTypes = {
  fruits: PropTypes.array,
};

FruitsList.defaultProps = {
  fruits: [],
};
