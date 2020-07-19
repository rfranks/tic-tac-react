// import React from "react";
// import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
// import {action} from "@storybook/addon-actions";
//
// import {Board} from "./Board";
//
// import intro from './docs/intro.md';
// import board from './docs/board.md';
// import square from './docs/square.md';
//
// export default {
//   title: "Board/Square",
//   component: Square,
//   decorators: [withKnobs],
//   parameters: {
//     notes: {Introduction: intro, Square: square, Board: board},
//   },
// };
//
// export const basicSquare = () => (
//   <Square
//     position={number('Position', 0, {
//       range: true,
//       min: 0,
//       max: 8,
//       step: 1,
//     })}
//     player={text('Player', 'X')}
//     winning={boolean("Winning", false)}
//     onSquareClick={action('clicked')}
//   />
// );
