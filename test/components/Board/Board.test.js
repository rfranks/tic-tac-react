import React from 'react';
import { shallow, mount } from 'enzyme';
import Board, { Square } from '../../../src/components/Board/Board';

const coreSquareSpecs = (squareProps, asShallow) => {
  const square = asShallow
    // eslint-disable-next-line react/jsx-props-no-spreading
    ? shallow(<Square {...squareProps} />)
    // eslint-disable-next-line react/jsx-props-no-spreading
    : mount(<Square {...squareProps} />);
  const button = square.find('button[type="button"]');

  it('should match its snapshot', () => {
    expect(square.html()).toMatchSnapshot();
  });

  it('should have a button', () => {
    expect(button.length).toEqual(1);
  });

  if (squareProps.player) {
    it('has a button that has text that matches the player that is occupying it', () => {
      expect(button.text()).toEqual(squareProps.player);
    });

    it('when clicking its button, it DOES NOT dispatch "onSquareClick" function prop', () => {
      expect(squareProps.onSquareClick.mock.calls.length).toBe(0);
      button.simulate('click');
      expect(squareProps.onSquareClick.mock.calls.length).toBe(0);
    });
  } else {
    it('has a button that has text that should be empty', () => {
      expect(button.text()).toBe('');
    });

    it('when clicking its button it dispatches to "onSquareClick" function prop, providing its "position"', () => {
      expect(squareProps.onSquareClick.mock.calls.length).toBe(0);
      button.simulate('click');
      expect(squareProps.onSquareClick.mock.calls.length).toBe(1);
      expect(squareProps.onSquareClick).toHaveBeenCalledWith(
        squareProps.position
      );
    });
  }

  it('should have the "square" class', () => {
    expect(button.html()).toContain(`class="square`);
  });

  it('should have "winner" class based on "winning" prop', () => {
    expect(button.html()).toContain(
      squareProps.winning ? `class="square square--winner` : `class="square`
    );
  });

  return [square, button];
};

describe('Given a <Square /> without a player', () => {
  const initialProps = {
    onSquareClick: jest.fn(),
    position: 0,
    player: undefined,
    winning: false,
  };

  const [square, button] = coreSquareSpecs(initialProps);

  it('renders', () => {
    expect(square).toBeDefined();
    expect(button).toBeDefined();
  });

  // it('should have proper props for email field', () => {
  //   expect(container.find('input[type="email"]').props()).toEqual({
  //     className: 'mx-auto my-2',
  //     onBlur: expect.any(Function),
  //     placeholder: 'email',
  //     type: 'email',
  //   });
});

describe('Given a <Square /> with a player', () => {
  const initialProps = {
    onSquareClick: jest.fn(),
    position: 0,
    player: 'X',
    winning: false,
  };

  // create a Square, and run the core Square specs
  const [square, button] = coreSquareSpecs(initialProps);

  it('renders', () => {
    expect(square).toBeDefined();
    expect(button).toBeDefined();
  });
});

describe('Given a "winning" <Square />', () => {
  const initialProps = {
    onSquareClick: jest.fn(),
    position: 0,
    player: 'X',
    winning: true,
  };

  // create a Square, and run the core Square specs
  const [square, button] = coreSquareSpecs(initialProps);

  it('renders', () => {
    expect(square).toBeDefined();
    expect(button).toBeDefined();
  });

  it('should have the "winner" class', () => {
    expect(button.html()).toContain(`class="square square--winner`);
  });
});

const coreBoardSpecs = (boardProps, asShallow) => {
  const board = asShallow
    // eslint-disable-next-line react/jsx-props-no-spreading
    ? shallow(<Board {...boardProps} />)
    // eslint-disable-next-line react/jsx-props-no-spreading
    : mount(<Board {...boardProps} />);
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
      { player: null, winning: false },
      { player: null, winning: false },
      { player: null, winning: false },
      { player: null, winning: false },
      { player: null, winning: false },
      { player: null, winning: false },
      { player: null, winning: false },
      { player: null, winning: false },
      { player: null, winning: false },
    ],
  };

  // create a Board, and run the core Board specs
  const [board] = coreBoardSpecs(initialProps);

  it('renders', () => {
    expect(board).toBeDefined();
  });
});
