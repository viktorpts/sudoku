import { p1 } from './puzzles.js';
import { generateBoard } from './board.js';

// Load puzzle
// Generate DOM elements
// Check solution
// Configure input event listeners


window.addEventListener('DOMContentLoaded', start);

function start() {
    const main = document.querySelector('main');
    generateBoard(p1, main);
}
