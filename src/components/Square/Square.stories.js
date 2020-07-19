import React from 'react';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

import Square from './Square';

import intro from './docs/intro.md';
import square from './docs/square.md';

export default {
  title: 'Square',
  component: Square,
  decorators: [withKnobs],
  parameters: {
    notes: {Introduction: intro, Square: square},
  },
};

export const basicSquare = () => (
  <Square
    position={number('Position', 0, {
      range: true,
      min: 0,
      max: 8,
      step: 1,
    })}
    player={text('Player', 'X')}
    winning={boolean('Winning', false)}
    onSquareClick={action('clicked')}
  />
);
