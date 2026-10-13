class GameLogic {
    constructor(gameBoard) {
        this.gameBoard = gameBoard;
        this.currentPlayer = "|:)";
        this.gameOver = false;
        this.turnCount = 0;
    }

    makeMove(row, col) {
        if (this.gameOver) {
            return;
        }

        if (this.gameBoard.board[row][col] === null) {
            this.gameBoard.updateCell(row, col, this.currentPlayer);
            this.gameBoard.renderBoard("game-container");


            if (this.checkForWin()) {
                this.gameOver = true;
                alert(`Player ${this.currentPlayer} wins!`);
            } else if (this.checkForDraw()) {
                this.gameOver = true;
                alert("It's a tie!");
            } else {
                this.switchPlayer();
                this.turnCount++;
            }

        }
    }

    checkForWin() {
        // rows
        for (let r = 0; r < this.gameBoard.rows; r++) {
            
            if (this.checkLine(this.gameBoard.board[r][0], this.gameBoard.board[r][1], this.gameBoard.board[r][2])) {
                return true;
            }
        }

        // cols
        for (let c = 0; c < this.gameBoard.rows; c++) {
            
            if (this.checkLine(this.gameBoard.board[0][c], this.gameBoard.board[1][c], this.gameBoard.board[2][c])) {
                return true;
            }
        }

        // diags
        if (this.checkLine(this.gameBoard.board[0][0], this.gameBoard.board[1][1], this.gameBoard.board[2][2])) {
            return true;
        }

        if (this.checkLine(this.gameBoard.board[0][2], this.gameBoard.board[1][1], this.gameBoard.board[2][0])) {
            return true;
        }

        return false;

    }

    checkLine(a, b, c) {
        return a !== null && a == b && a == c;
    }

    checkForDraw() {
        if (this.turnCount >= 8) {
            return true;
        }
        return false;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === "|:)" ? ">:)" : "|:)";
    }
}

export default GameLogic;