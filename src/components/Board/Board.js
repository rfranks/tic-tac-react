import React from 'react';
import './Board.css';

class Square extends React.Component {
    render() {
        const {winning, player} = this.props;

        const classes = [
            'square',
            winning ? 'square--winner' : ''
        ].join(' ');

        return (
            <button className={classes} onClick={this.props.onClick}>
                {player}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        const {player, winning} = this.props.squares[i];

        return (
            <Square
                player={player}
                winning={winning}
                onClick={(e) => {
                    this.props.onClick(i);

                    e.target.innerText.trim().length === 0 && function () {
                        let classes = e.target.classList;
                        classes.remove('flipInY');

                        setTimeout(function () {
                            classes.add('flipInY');
                        }, 0);
                    }();
                }}
            />
        );
    }

    render() {
        return (
            <div className="tic-tac-board">
                <div className="tic-tac-board__row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="tic-tac-board__row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="tic-tac-board__row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;