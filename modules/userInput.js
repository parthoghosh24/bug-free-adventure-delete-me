class UserInput {
    constructor(gameLogic) {
        this.gameLogic = gameLogic;
        this.addEventListeners();
    }

    addEventListeners() {
        const gameContainer = document.getElementById("game-container");
        gameContainer.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick(event) {
        const cell = event.target.closest("td");
        if (cell) {
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            this.gameLogic.makeMove(row, col);
        }
    }
}

export default UserInput;