import { createToDo } from './task.js';
import { grabJSDate, grabJSDateTime } from './dates.js'; 

const newDate = Date(`2025-05-01T14:30:00Z`); 
let convert = grabJSDate(newDate); 

console.log(convert);