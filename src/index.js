import './style.css';
import './Add.png';
import './delete.png';
import './Refresh.png';

const tasksData = [
  {
    description: 'Morning walk',
    completed: true,
    index: 1,

  },
  {
    description: 'Reading book ',
    completed: false,
    index: 2,
  },

];

tasksData.forEach((element) => {
  const listEntry = document.querySelector('.list-entry');
  const li = document.createElement('li');
  const task = document.createElement('p');
  const checkBox = document.createElement('input');
  const deleteButton = document.createElement('img');
  checkBox.setAttribute('type', 'checkBox');
  checkBox.innerHTML = `${element.completed}`;
  task.innerHTML = `${element.description}`;

  deleteButton.src = './delete.png';

  li.classList.add('list');
  li.classList.add('border');
  deleteButton.classList.add('deleteButton');
  task.classList.add('description');

  li.appendChild(checkBox);
  li.appendChild(task);
  li.appendChild(deleteButton);

  listEntry.appendChild(li);
});