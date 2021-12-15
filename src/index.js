import './style.css';
import CRUD from './CRUD.js';

document.querySelector('.refreshBtn').addEventListener('click', CRUD.displayScores);
document.querySelector('.postScoreForm').addEventListener('submit', (event) => {
  CRUD.GetScoreFormValues();
  event.preventDefault();
});
