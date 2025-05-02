import toDoItem from './task';
import Project from './project.js'
import { isToday } from 'date-fns';
import { renderDOM } from './dom.js';
import './style.css';

const taskOne = new toDoItem('paint the house', 'painting the house', '2', 'low');
const taskTwo = new toDoItem('walk the dog', 'walk the dog', '2', 'low');
const taskThree = new toDoItem('throw the trash', 'walk the dog', '2', 'low');

const thingsToDo = [taskOne, taskTwo, taskThree];

const newProject = new Project('House Remodel', thingsToDo); 
renderDOM(newProject); 