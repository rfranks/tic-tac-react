import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import { useStyles } from '../../theme';
import Game from '../Game/Game';

import './App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const classes = useStyles() || {};

  return (
    <>
      <CssBaseline />

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              <div className="fadeInDown">Welcome to</div>
              <span className="fadeInDown delay--short">Tic</span>
              <span className="fadeInDown delay">-Tac-</span>
              <Link href="https://reactjs.org/">
                <span className="fadeInDown delay--long react-logo--large flipInY" />
              </Link>
            </Typography>
            <Game classes="{classes}" />
          </Container>
        </div>
      </main>

      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Powered by{' '}
          <Link href="https://reactjs.org/">
            <div className="react-logo--small" />
          </Link>
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}
