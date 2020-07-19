import React from 'react';
import PropTypes from 'prop-types';

import './Board.css';

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * return (
 *   <Square player="X" position="0" winning="false" onSquareClick={(position)=>console.log(position)} />
 * )
 */
export function Square({onSquareClick, player, position, winning = false}) {
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
}

Square.defaultProps = {
  player: null,
};

Square.propTypes = {
  onSquareClick: PropTypes.func.isRequired,
  player: PropTypes.string,
  position: PropTypes.number.isRequired,
  winning: PropTypes.bool.isRequired,
};

export default function Board({squares, onSquareClick}) {
  let winner = false;

  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const handleSquareClick = (position) => {
    // if we don't have a winner yet, allow the click
    if (!winner) {
      onSquareClick(position);
    }
  };

  return (
    <div className="tic-tac-board">
      {rows.map((row, index) => {
        const rowNumber = index;

        return (
          <div key={rowNumber} className="tic-tac-board__row">
            {row.map((position) => {
              const {player, winning} = squares[position];

              winner = winner || winning;

              return (
                <Square
                  key={position}
                  position={position}
                  player={player}
                  winning={winning}
                  onSquareClick={handleSquareClick}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

Board.propTypes = {
  onSquareClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.string,
      winning: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
