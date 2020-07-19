import React from 'react';
import PropTypes from 'prop-types';

import './Square.css';

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * return (
 *   <Square player="X" position={0} winning={false} onSquareClick={(position)=>console.log(position)} />
 * )
 */
const Square = ({onSquareClick, player, position, winning = false}) => {
  const classes = ['square', winning ? 'square--winner' : ''].join(' ');

  const handleSquareClick = (evt) => {
    if (player !== undefined && player !== null) {
      // if the square is already taken, then do nothing

      if (evt) {
        evt.preventDefault();
      }
    } else {
      onSquareClick(position);

      if (evt) {
        const {classList} = evt.target;
        classList.remove('flipInY');

        setTimeout(function updateClasses() {
          classList.add('flipInY');
        }, 0);
      }
    }
  };

  return (
    <button type="button" className={classes} onClick={handleSquareClick}>
      {player}
    </button>
  );
};

Square.defaultProps = {
  player: null,
};

Square.propTypes = {
  onSquareClick: PropTypes.func.isRequired,
  player: PropTypes.string,
  position: PropTypes.number.isRequired,
  winning: PropTypes.bool.isRequired,
};

export default Square;
