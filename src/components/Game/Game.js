import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import BarChart from '../BarChart/BarChart'
import Board from '../Board/Board'

import './Game.css';

const LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.goToMove = this.goToMove.bind(this);

        this.state = this.newGame();
    }

    calculateWinner(squares) {
        for (let i = 0; i < LINES.length; i++) {
            const [a, b, c] = LINES[i];

            if (squares[a].player && squares[a].player === squares[b].player && squares[a].player === squares[c].player) {
                squares[a].winning = squares[b].winning = squares[c].winning = true;
                return squares[a].player;
            }
        }

        //did we scratch
        if (this.currentStep() === 9) {
            return '-';
        }

        return null;
    }

    currentGame() {
        const {wins} = this.state;
        return wins.x + wins.o + wins.scratch + 1; //+1 for the current game
    }

    currentPlayer() {
        return this.currentStep() % 2 === 0 ? 'X' : 'O';
    }

    currentStep() {
        return this.state.history.length - 1;
    }

    handleClick(i) {
        const {history, wins} = this.state;
        const {squares} = history[this.currentStep()];
        let winner = this.calculateWinner(squares);

        if (winner || squares[i].player) {
            //if someone already won, or the square is taken, then no-op
            return;
        }

        const newSquares = new Array(9).fill('');
        newSquares.forEach((square, index) => {
            const {player, winning} = squares[index];
            newSquares[index] = {
                player: player,
                winning: winning
            };
        });

        newSquares[i].player = this.currentPlayer();

        winner = this.calculateWinner(newSquares);

        //did we scratch?
        !winner && this.currentStep() === 8 && (winner = '-');

        //play a sound...
        Audio.play && function() {
            if (!winner) {
                Audio.play('/tic-tac-react/sounds/NFF-ping.wav');
            } else if (winner !== '-') {
                Audio.play('/tic-tac-react/sounds/NFF-level-up.wav');
            } else {
                Audio.play('/tic-tac-react/sounds/NFF-gameover.wav');
            }
        }();

        this.setState({
            history: history.concat([
                {
                    squares: newSquares
                }
            ]),
            wins: {
                x: winner === 'X' ? wins.x + 1 : wins.x,
                o: winner === 'O' ? wins.o + 1 : wins.o,
                scratch: winner === '-' ? wins.scratch + 1 : wins.scratch
            }
        });
    }

    newGame() {
        const state = {
            history: [
                {
                    squares: new Array(9).fill('')
                }
            ],
            wins: {
                x: this.state ? this.state.wins.x : 0,
                o: this.state ? this.state.wins.o : 0,
                scratch: this.state ? this.state.wins.scratch : 0
            }
        };

        //each square needs to be its own play
        state.history.forEach((boardState) => {
            for (let i = 0; i < 9; i++) {
                boardState.squares[i] = {
                    player: null,
                    winning: false
                };
            }
        });

        Audio.play && Audio.play('/tic-tac-react/sounds/NFF-new-game.wav');

        return state;
    }

    goToMove(step) {
        this.setState({
            history: this.state.history.slice(0, step + 1),
            wins: this.state.wins
        });
    }

    render() {
        if (!this.state) {
            return null;
        }

        const history = this.state.history;
        const current = history[this.currentStep()];
        const wins = [
            {
                player: 'X',
                wins: this.state.wins.x
            },
            {
                player: 'O',
                wins: this.state.wins.o
            },
            {
                player: '-',
                wins: this.state.wins.scratch
            }
        ];
        const records = this.state.wins;

        const winner = this.calculateWinner(current.squares);
        const classes = this.props.classes;
        const whoseTurnIsIt = winner ?
            winner === '-' ? "It's a scratch!" : "Winner: " + winner
            : "It's " + this.currentPlayer() + "'s turn"

        return (
            <div className={classes.heroButtons}>
                <Container maxWidth="sm">
                    <Button variant="contained" color="primary" onClick={() => {
                        this.setState(this.newGame());
                    }}>
                        New game
                    </Button>
                </Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6}>
                        <Paper>
                            <Typography variant="h5" align="center" color="textSecondary">
                                {whoseTurnIsIt}
                            </Typography>
                            <Board className="tic-tac-game"
                                   squares={current.squares}
                                   onClick={i => this.handleClick(i)}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <GameMoves history={history} goToMove={this.goToMove} winner={winner}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <GameScoreCards wins={wins} records={records}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

class GameScoreCards extends React.Component {
    render() {
        const {wins, records} = this.props;
        const games = records.o + records.x + records.scratch;

        return (
            <React.Fragment>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="h4" color="primary" gutterBottom>
                                Stats
                            </Typography>
                            <TableContainer>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Player</TableCell>
                                            <TableCell align="right">Wins</TableCell>
                                            <TableCell align="right">Losses</TableCell>
                                            <TableCell align="right">Scratch</TableCell>
                                            <TableCell align="right">%</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow key="x">
                                            <TableCell component="th" scope="row">
                                                X
                                            </TableCell>
                                            <TableCell align="right">{records.x}</TableCell>
                                            <TableCell align="right">{records.o}</TableCell>
                                            <TableCell align="right">{records.scratch}</TableCell>
                                            <TableCell align="right">{games ? records.x / games : 0}</TableCell>
                                        </TableRow>
                                        <TableRow key="o">
                                            <TableCell component="th" scope="row">
                                                O
                                            </TableCell>
                                            <TableCell align="right">{records.o}</TableCell>
                                            <TableCell align="right">{records.x}</TableCell>
                                            <TableCell align="right">{records.scratch}</TableCell>
                                            <TableCell align="right">{games ? records.o / games : 0}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <Typography variant="h4" color="primary" gutterBottom>
                                Games played
                            </Typography>
                            <Typography variant="h1" color="textSecondary">
                                {games}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <Typography variant="h4" color="primary" gutterBottom>
                                Scratches
                            </Typography>
                            <Typography variant="h1" color="textSecondary">
                                {records.scratch}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="h4" color="primary" gutterBottom>
                                Wins by player
                            </Typography>
                            <BarChart data={wins} title="" x="wins" y="player"/>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

class GameMoves extends React.Component {
    render() {
        const {goToMove, history, winner} = this.props;

        const moves = history.map((move, index) => {
            const isLastMove = (index === history.length - 1);
            const player = (isLastMove && winner) ?
                winner === '-' ? "It's a scratch!" : (winner + ' wins!') :
                index ? index % 2 === 0 ? 'O' : 'X' : '';

            return (
                <React.Fragment key={'tic-tac-game__move' + index}>
                    {index ? (
                            <React.Fragment>
                                {!isLastMove ? (
                                        <Icon color="primary">redo</Icon>
                                    ) : winner ? '' : (<Icon color="primary">redo</Icon>)
                                }
                                <span>{player}</span>
                            </React.Fragment>
                        ) : ''}
                    {(isLastMove && winner) ?
                        '' : (
                            <Button variant={index ? 'outlined' : 'contained'}
                                    className="tic-tac-game__move fadeIn"
                                    size="small"
                                    color="primary"
                                    onClick={() => goToMove(index)}>
                                {index ? index : (<Icon>home</Icon>)}
                            </Button>
                        )}
                </React.Fragment>
            );
        });

        return (
            <div className="tic-tac-game__moves">
                <Typography variant="h4" color="primary" gutterBottom>
                    History
                </Typography>
                {moves}
            </div>
        );
    }
}

export default Game;