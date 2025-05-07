import toDoItem from "./task";
import Project from "./project.js";

// Global var declares
const toDoListUL = document.getElementById("to-do-list-ul");
const projectNameHeading = document.getElementById("project-name-div");
const form = document.getElementById("user-task-input-form");

function addItemToDOMList(element) {
  const task = document.createElement("li");
  task.className = "to-do-list-li";
  task.textContent = element.taskTitle;
  // task.addEventListener('mouseenter', () => {
  // --- ADD IN CODE for HOVERING AND SHOWING TASK DETAILS ---
  // })
  toDoListUL.append(task);

  const checkBox = document.createElement("input");
  checkBox.className = "li-check-box";
  checkBox.type = "checkbox";

  checkBox.addEventListener("change", () => {
    task.classList.toggle("to-do-list-li-checked", checkBox.checked);
    console.log("clicked");

    element.completed = checkBox.checked;
  });

  task.appendChild(checkBox);
}

function setProjectName(currentProject) {
  projectNameHeading.textContent = `Project Name: ${currentProject.projectName}`;
}

function createToDoItemFromUserInput() {
  const taskTitle = document.getElementById("input-field-taskTitle").value;
  const dueDate = document.getElementById("input-due-date").value;
  const dueTime = document.getElementById("input-due-time").value;
  const description = document.getElementById(
    "input-field-task-description",
  ).value;

  const newTask = new toDoItem(taskTitle, description, dueDate);
  return newTask;
}

// main export function
export function renderDOM(currentProject) {
  setProjectName(currentProject);

  const localStorageItems = localStorage.getItem("projects");
  const parsedLocalStorageItems = JSON.parse(localStorageItems);

  console.log(parsedLocalStorageItems.projectToDoList);

  parsedLocalStorageItems.forEach((todoitem) => {
    addItemToDOMList(todoitem);
  });

  // listen for user input and create task
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userCreatedTask = createToDoItemFromUserInput();

    addItemToDOMList(userCreatedTask);
    currentProject.projectToDoList.push(userCreatedTask);

    currentProject.updateProjectTasks(currentProject);

    form.reset();
  });
}
