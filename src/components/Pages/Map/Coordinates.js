import React from 'react';
import propTypes from 'prop-types';
import './Map.css';

function Coordinates(props) {
    const { x, y } = props;
    return (
      <div className='Coordinates'>
        <div className=''>
          <h3>Current Coordinates:</h3>
        </div>
        <div className='xy-coord'>
          <div className='x-coord'>
            <h4>X: {x}</h4>
          </div>
          <div className='y-coord'>
            <h4>Y: {y}</h4>
          </div>
        </div>
      </div>
    );
  }

Coordinates.propTypes = {
  x: propTypes.number,
  y: propTypes.number,
};

export default Coordinates;
