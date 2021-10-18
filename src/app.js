import { generateBoard, button } from './board.js';
import { init } from './import.js';

// Load puzzle
// Generate DOM elements
// Check solution
// Configure input event listeners


window.addEventListener('DOMContentLoaded', start);

function start() {
    const main = document.querySelector('main');
    let cells = {
        blocks: [[]],
        rows: [[]],
        columns: [[]],
    };

    const checkBtn = document.getElementById('checkBtn');
    checkBtn.addEventListener('click', () => {
        cells.blocks.forEach(check);
        cells.rows.forEach(check);
        cells.columns.forEach(check);
        checkBtn.replaceWith(uncheckBtn);
    });
    const uncheckBtn = button('Clear Check', () => {
        cells.blocks.forEach(c => c.forEach(x => x.classList.remove('error')));
        uncheckBtn.replaceWith(checkBtn);
    });

    init((puzzle) => cells = generateBoard(puzzle, main));
}

function check(cells) {
    const numbers = new Set();

    for (let cell of cells) {
        if (cell.value != '') {
            numbers.add(cell.value);
        }
    }

    if (numbers.size != 9) {
        cells.forEach(c => c.classList.add('error'));
    }
}
