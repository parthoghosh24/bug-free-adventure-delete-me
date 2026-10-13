import GameBoard from '../modules/gameBoard.js';
import UserInput from '../modules/userInput.js';
import GameLogic from '../modules/gameLogic.js';

class GameEngine {
    constructor(containerId) {
        this.gameBoard = new GameBoard(3, 3);
        this.gameLogic = new GameLogic(this.gameBoard);
        this.userInput = new UserInput(this.gameLogic);
        this.gameBoard.renderBoard(containerId);
    }
}

export default GameEngine;
