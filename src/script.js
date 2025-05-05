import toDoItem from './task';
import Project from './project.js'
import { isToday } from 'date-fns';
import { renderDOM } from './dom.js';
import './style.css';

// check local storage if any saved data
// if saved data use JSON parse and add to screen 

const projectList = localStorage.getItem('projects');


const taskOne = new toDoItem('paint the house', 'painting the house', '2', 'low');
const taskTwo = new toDoItem('walk the dog', 'walk the dog', '2', 'low');
const taskThree = new toDoItem('throw the trash', 'walk the dog', '2', 'low');

const thingsToDo = [taskOne, taskTwo, taskThree];

const newProject = new Project('House Remodel', thingsToDo);

const JSONItemList = localStorage.getItem('projects'); 

const parsedJSON = JSON.parse(JSONItemList);

console.log(parsedJSON[0]);


// redo below func ? 


renderDOM(newProject); 