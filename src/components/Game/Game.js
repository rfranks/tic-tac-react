import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

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

import BarChart from '../BarChart/BarChart';
import Board from '../Board/Board';

import './Game.css';

function TicTacToeGame({classes}) {
  const [moves, setMoves] = useState([]);

  const wins = useRef({
    x: 0,
    o: 0,
    scratch: 0,
  });

  const newGame = () => {
    const emptyMove = {
      squares: [],
    };

    for (let i = 0; i < 9; i += 1) {
      emptyMove.squares.push({
        player: null,
        winning: false,
      });
    }

    if (moves.length > 0 && Audio.play) {
      Audio.play('/tic-tac-react/sounds/NFF-new-game.wav');
    }

    setMoves([emptyMove]);
  };

  if (moves.length === 0) {
    newGame();
    return null;
  }

  // figure out if we have a winner
  const calculateWinner = (squares) => {
    let winner = null;

    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningLines.forEach(line => {
      const [x, y, z] = line;

      if (
        squares[x].player &&
        squares[x].player === squares[y].player &&
        squares[x].player === squares[z].player
      ) {
        // eslint-disable-next-line no-param-reassign
        squares[x].winning = true;
        // eslint-disable-next-line no-param-reassign
        squares[y].winning = true;
        // eslint-disable-next-line no-param-reassign
        squares[z].winning = true;

        winner = squares[x].player;
      }
    });

    return winner;
  };

  const currentMove = () => {
    return moves.length - 1;
  };

  const currentPlayer = () => {
    return currentMove() % 2 === 0 ? 'X' : 'O';
  };

  const currentSquares = () => {
    return moves[currentMove()].squares;
  };

  const goToMove = move => {
    setMoves(moves.slice(0, move + 1));
  };

  const isScratch = (squares) => {
    return currentMove() === (squares ? 8 : 9) && calculateWinner(squares || currentSquares()) === null;
  };

  const onSquareClick = position => {
    const squares = currentSquares();
    const newSquares = new Array(9).fill('');

    newSquares.forEach((square, index) => {
      const {player, winning} = squares[index];
      newSquares[index] = {
        player,
        winning
      };
    });

    newSquares[position].player = currentPlayer();

    const winner = calculateWinner(newSquares);

    if (isScratch(newSquares)) {
      wins.current.scratch += 1;
      wins.current = {...wins.current};
    } else if (winner !== null) {
      wins.current[winner.toLowerCase()] += 1;
      wins.current = {...wins.current};
    }

    setMoves(
      moves.concat([
        {
          squares: newSquares
        }
      ])
    );

    // play a sound...
    if (Audio.play) {
      if (winner) {
        Audio.play('/tic-tac-react/sounds/NFF-level-up.wav');
      } else {
        Audio.play(
          isScratch()
            ? '/tic-tac-react/sounds/NFF-gameover.wav'
            : '/tic-tac-react/sounds/NFF-ping.wav'
        );
      }
    }
  };

  const winner = calculateWinner(currentSquares());
  const scratchOrPlayerTurnMsg = isScratch() ? "It's a scratch!" : `It's ${currentPlayer()}'s turn`;
  const whoseTurnIsIt = winner !== null ? `Winner: ${winner}` : scratchOrPlayerTurnMsg;

  return (
    <div className={classes.heroButtons}>
      <Container maxWidth="sm">
        <Button variant="contained" color="primary" onClick={newGame}>
          New game
        </Button>
      </Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Paper>
            <Typography variant="h5" align="center" color="textSecondary">
              {whoseTurnIsIt}
            </Typography>
            <Board
              className="tic-tac-game"
              squares={currentSquares()}
              onSquareClick={onSquareClick}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <GameMoves moves={moves} onGoToMove={goToMove} winner={winner}/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <GameScoreCards wins={wins.current}/>
        </Grid>
      </Grid>
    </div>
  );
}

TicTacToeGame.propTypes = {
  classes: PropTypes.string.isRequired
};

function GameScoreCards({wins}) {
  const records = [
    {
      player: 'X',
      wins: wins.x
    },
    {
      player: 'O',
      wins: wins.o
    },
    {
      player: '-',
      wins: wins.scratch
    }
  ];

  const games = wins.o + wins.x + wins.scratch;

  return (
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
                  <TableCell align="right">{wins.x}</TableCell>
                  <TableCell align="right">{wins.o}</TableCell>
                  <TableCell align="right">{wins.scratch}</TableCell>
                  <TableCell align="right">
                    {games ? wins.x / games : 0}
                  </TableCell>
                </TableRow>
                <TableRow key="o">
                  <TableCell component="th" scope="row">
                    O
                  </TableCell>
                  <TableCell align="right">{wins.o}</TableCell>
                  <TableCell align="right">{wins.x}</TableCell>
                  <TableCell align="right">{wins.scratch}</TableCell>
                  <TableCell align="right">
                    {games ? wins.o / games : 0}
                  </TableCell>
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
            {wins.scratch}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h4" color="primary" gutterBottom>
            Wins by player
          </Typography>
          <BarChart data={records} title="" xLabel="wins" yLabel="player"/>
        </Paper>
      </Grid>
    </Grid>
  );
}

GameScoreCards.propTypes = {
  wins: PropTypes.shape({
    x: PropTypes.number.isRequired,
    o: PropTypes.number.isRequired,
    scratch: PropTypes.number.isRequired,
  }).isRequired,
};

function GameMoves(props) {
  const {onGoToMove, moves, winner} = props;

  if (moves === undefined || moves === null) {
    return null;
  }

  const winnerMsg = winner === '-' ? "It's a scratch!" : `${winner} wins!`;

  const history = moves.map((move, index) => {
    const moveNumber = index;
    const isLastMove = index === moves.length - 1;
    const player = index % 2 === 0 ? 'O' : 'X';

    const button = (isLastMove && winner) ? winnerMsg : (
        <Button
          variant={index ? 'outlined' : 'contained'}
          className="tic-tac-game__move fadeIn"
          size="small"
          color="primary"
          onClick={() => onGoToMove(index)}
        >
          {index ? player : <Icon>home</Icon>}
        </Button>
      );

    const icon = isLastMove ? '' : (<Icon color="primary">redo</Icon>);

    return (
      <React.Fragment key={`tic-tac-game__move${moveNumber}`}>
        {button}
        {icon}
      </React.Fragment>
    );
  });

  return (
    <div className="tic-tac-game__moves">
      <Typography variant="h4" color="primary" gutterBottom>
        History
      </Typography>
      {history}
    </div>
  );
}

GameMoves.defaultProps = {
  winner: null
};

GameMoves.propTypes = {
  onGoToMove: PropTypes.func.isRequired,
  moves: PropTypes.arrayOf(PropTypes.shape({
    squares: PropTypes.arrayOf(PropTypes.shape({
      player: PropTypes.string,
      winning: PropTypes.bool.isRequired
    })).isRequired
  })).isRequired,
  winner: PropTypes.string
};

export default TicTacToeGame;
