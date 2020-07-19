import React from 'react';
import {shallow, mount} from 'enzyme';
import Board from './Board';

const coreBoardSpecs = (boardProps, asShallow) => {
  const board = asShallow
    ? // eslint-disable-next-line react/jsx-props-no-spreading
      shallow(<Board {...boardProps} />)
    : // eslint-disable-next-line react/jsx-props-no-spreading
      mount(<Board {...boardProps} />);
  const gameBoard = board.find('div.tic-tac-board');

  it('should match its snapshot', () => {
    expect(board.html()).toMatchSnapshot();
  });

  it('should have a "tic-tac-toe" game board', () => {
    expect(gameBoard.length).toEqual(1);
  });

  it('has a game board with 3 rows', () => {
    expect(gameBoard.find('div.tic-tac-board__row').length).toBe(3);
  });

  it('has a game board with 9 squares', () => {
    expect(
      gameBoard.find('div.tic-tac-board__row').find('.square').length
    ).toBe(9);
  });

  it('has a game board where each row has 3 squares', () => {
    gameBoard
      .find('div.tic-tac-board__row')
      .map((row) => expect(row.find('.square').length).toBe(3));
  });

  it('when clicking each "square", it dispatches the "onSquareClick" function prop with the square\'s "position"', () => {
    gameBoard.find('div.tic-tac-board__row').map((row, rowIndex) => {
      row.find('.square').map((square, squareIndex) => {
        const position = rowIndex * 3 + squareIndex;

        expect(boardProps.onSquareClick.mock.calls.length).toBe(position);

        square.simulate('click');

        expect(boardProps.onSquareClick.mock.calls.length).toBe(position + 1);
        expect(boardProps.onSquareClick).toHaveBeenLastCalledWith(position);
        return 0;
      });
      return 0;
    });
  });

  return [board, gameBoard];
};

describe('A <Board />', () => {
  const initialProps = {
    onSquareClick: jest.fn(),
    squares: [
      {player: null, winning: false},
      {player: null, winning: false},
      {player: null, winning: false},
      {player: null, winning: false},
      {player: null, winning: false},
      {player: null, winning: false},
      {player: null, winning: false},
      {player: null, winning: false},
      {player: null, winning: false},
    ],
  };

  // create a Board, and run the core Board specs
  const [board] = coreBoardSpecs(initialProps);

  it('renders', () => {
    expect(board).toBeDefined();
  });
});
