import React from 'react';
import PropTypes from 'prop-types';

import Square from '../Square/Square';

import './Board.css';

const Board = ({squares, onSquareClick}) => {
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
};

Board.propTypes = {
  onSquareClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.string,
      winning: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Board;
