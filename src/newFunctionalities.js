export const inputTask = document.getElementById('input-area');
export const addButton = document.querySelector('.addButton');
export let tasksData = JSON.parse(localStorage.getItem('task')) || [];

const taskRemover = (tasknumber) => {
  tasksData = tasksData.filter((dailyTasks) => dailyTasks.index !== tasknumber);
  localStorage.setItem('task', JSON.stringify(tasksData));
  window.location.reload();
};
export function executeData(input) {
  input.forEach((element, i) => {
    element.index = i + 1;
    const listEntry = document.querySelector('.list-entry');
    const li = document.createElement('li');
    const task = document.createElement('input');
    const checkBox = document.createElement('input');
    const deleteButton = document.createElement('img');
    checkBox.setAttribute('type', 'checkBox');
    checkBox.value = `${element.completed}`;
    task.value = `${element.description}`;
    deleteButton.src = './delete.png';
    deleteButton.onclick = () => taskRemover(element.index);
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

export const getData = (Tasks) => {
  tasksData.push({ description: Tasks.value, completed: false, index: null });
  localStorage.setItem('task', JSON.stringify(tasksData));
  window.location.reload();
};
