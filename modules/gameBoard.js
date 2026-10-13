class GameBoard {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = [];
        for (let r = 0; r < this.rows; r++) {
            let row = [];
            for (let c = 0; c < this.cols; c++) {
                row.push(null);
            }
            board.push(row);
        }

        return board;
    }

    // we should ideally use ajax and change specific things than rendering the board everytime
    renderBoard(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        const table = document.createElement("table"); // elements are basically tags
        table.classList.add("game-board"); // adding a class to table

        for (let r = 0; r < this.rows; r++) {
            const row = document.createElement("tr");
            for (let c = 0; c < this.cols; c++) {
                const cell = document.createElement("td");                
                cell.textContent = this.board[r][c] || ''; // if null then populate with ''                
                cell.dataset.row = r;
                cell.dataset.col = c;
                row.appendChild(cell);
            }
            table.appendChild(row)
        }
        container.appendChild(table);
    }

    updateCell(row, col, value) {
        this.board[row][col] = value;
    }
}

export default GameBoard;