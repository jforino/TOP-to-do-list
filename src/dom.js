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