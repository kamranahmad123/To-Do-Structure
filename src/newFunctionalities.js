import checkDelete from './completionStatus.js';

export const inputTask = document.getElementById('input-area');
export const addButton = document.querySelector('.addButton');
export const tasksData = JSON.parse(localStorage.getItem('task')) || [];
let filterData = [];
const taskRemover = (tasknumber) => {
  filterData = tasksData.filter((dailyTasks) => dailyTasks.index !== tasknumber.index) || [];
  localStorage.setItem('task', JSON.stringify(filterData));
  window.location.reload();
};

export function executeData(input) {
  input.forEach((element, i) => {
    element.index = i + 1;

    const listEntry = document.querySelector('.list-entry');
    const li = document.createElement('li');
    const task = document.createElement('input');
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkBox');
    const deleteButton = document.createElement('i');
    deleteButton.setAttribute('class', 'fa-solid fa-trash');
    task.value = `${element.description}`;
    deleteButton.onclick = () => taskRemover(element);
    checkBox.onclick = () => checkDelete(element, tasksData);
    checkBox.checked = element.completed;
    li.classList.add('list');
    li.classList.add('border');
    deleteButton.classList.add('deleteButton');
    task.classList.add('description');
    li.appendChild(checkBox);
    li.appendChild(task);
    li.appendChild(deleteButton);
    listEntry.appendChild(li);
  });
}
export const getData = () => {
  const objData = { description: inputTask.value, completed: false, index: null };
  tasksData.push(objData);
  localStorage.setItem('task', JSON.stringify(tasksData));
  window.location.reload();
};
