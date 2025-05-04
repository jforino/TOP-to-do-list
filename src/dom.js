import toDoItem from "./task";
import Project from './project.js'

// Global var declares 
const toDoListUL = document.getElementById('to-do-list-ul'); 
const projectNameHeading = document.getElementById('project-name-div');

function addItemToDOMList(element){
    const task = document.createElement('li'); 
    task.className = 'to-do-list-li'
    task.textContent = element.taskTitle; 
    toDoListUL.append(task);

    const checkBox = document.createElement('input');
    checkBox.className = 'li-check-box'
    checkBox.type = 'checkbox';

    checkBox.addEventListener('change', () => {
        task.classList.toggle('to-do-list-li-checked', checkBox.checked); 
        console.log('clicked'); 
        
        element.completed = checkBox.checked; 
        console.log(element.completed); 
    })

    task.appendChild(checkBox); 
}

function setProjectName(currentProject){
    projectNameHeading.textContent = `Project Name: ${currentProject.projectName}`;    
}

// main export function
export function renderDOM(currentProject){
   
    setProjectName(currentProject);
     
    currentProject.projectToDoList.forEach(element => {
        addItemToDOMList(element);  
    });

}