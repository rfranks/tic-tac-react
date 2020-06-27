import {calculateWinner} from '../../../src/components/Game/Game';

describe('calculateWinner', () => {
  it('evaluates to "X" when the winner is X', () => {
    expect(
      calculateWinner([
        {player: 'X'},
        {player: 'X'},
        {player: 'X'},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
      ])
    ).toEqual('X');
  });

  it('evaluates to "O" when the winner is O', () => {
    expect(
      calculateWinner([
        {player: 'O'},
        {player: 'O'},
        {player: 'O'},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
      ])
    ).toEqual('O');
  });

  it('evaluates to null when there is no winner', () => {
    expect(
      calculateWinner([
        {player: 'O'},
        {player: 'X'},
        {player: 'O'},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
      ])
    ).toBe(null);
  });
  // const container = shallow(<Login />);
  // it('should match the snapshot', () => {
  //   expect(container.html()).toMatchSnapshot();
  // });
  //
  // it('should have an email field', () => {
  //   expect(container.find('input[type="email"]').length).toEqual(1);
  // });
  //
  // it('should have proper props for email field', () => {
  //   expect(container.find('input[type="email"]').props()).toEqual({
  //     className: 'mx-auto my-2',
  //     onBlur: expect.any(Function),
  //     placeholder: 'email',
  //     type: 'email',
  //   });
  // });
  //
  // it('should have a password field', () => { /* Similar to above */
  // });
  // it('should have proper props for password field', () => { /* Trimmed for less lines to read */
  // });
  // it('should have a submit button', () => { /* */
  // });
  // it('should have proper props for submit button', () => { /* */
  // });
});
