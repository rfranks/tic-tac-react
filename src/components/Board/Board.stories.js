import React from "react";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";

import {Square} from "./Board";

export default {
  title: "Board/Square",
  component: Square,
  decorators: [withKnobs]
};

export const basicSquare = () => (
  // <Square
  //   position={number('Position', 0, {
  //     range: true,
  //     min: 0,
  //     max: 8,
  //     step: 1,
  //   })}
  //   player={text('Player', 'X')}
  //   winning={boolean("Winning", false)}
  //   onSquareClick={action('onSquareClick')}
  // />
  <button>Some text</button>
);
