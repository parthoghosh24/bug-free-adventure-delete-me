// since we marked main.js as a module in html, we could now import things
// destructuring from module1.js
// import { value1 } from "./modules/module1.js";

// console.log(value1);

import GameEngine from "./libraries/gameEngine.js";

const game = new GameEngine('game-container');