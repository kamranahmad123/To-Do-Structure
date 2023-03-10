import checkDelete from './completionStatus.js';

export const getStorage = () => JSON.parse(localStorage.getItem('task')) || [];
export const tasksData = getStorage();
export function storage(storageData) {
  localStorage.setItem('task', JSON.stringify(storageData));
}
export const taskRemover = (tasknumber) => {
  let filterData = tasksData.filter((dailyTasks) => dailyTasks.index !== tasknumber) || [];
  filterData = filterData.map((dailyTask, i) => ({ ...dailyTask, index: i + 1 }));
  storage(filterData);
};

export function executeData(input) {
  input.forEach((element, i) => {
    const listEntry = document.querySelector('.list-entry');
    const li = document.createElement('li');
    const task = document.createElement('input');
    task.id = i + 1;
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkBox');
    const deleteButton = document.createElement('i');
    deleteButton.setAttribute('class', 'fa-solid fa-trash');
    task.value = `${element.description}`;
    deleteButton.addEventListener('click', () => {
      taskRemover(element.index);
      window.location.reload();
    });
    checkBox.addEventListener('click', () => {
      checkDelete(element.index, tasksData);
      window.location.reload();
    });
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
export const getData = (inputTask) => {
  const objData = { description: inputTask, completed: false, index: tasksData.length + 1 };
  tasksData.push(objData);
  storage(tasksData);
};

export const updateDescription = (description, id) => {
  const filterData = getStorage().map((task) => {
    if (task.index === Number(id)) {
      return { ...task, description };
    }
    return task;
  });
  storage(filterData);
};
