import { parse } from "date-fns";

class Project {
    constructor(projectName, projectToDoList=[]){
        this.projectName = projectName; 
        this.projectToDoList = projectToDoList;
    }
        
    addToDoItemToProject(toDoItem){
        this.projectToDoList.push(toDoItem); 
    }

    removeToDoItemFromProject(toDoItemTitle){
        const toDoItemIndex = this.projectToDoList.findIndex(item => item.title === toDoItemTitle);
        this.projectToDoList.splice(toDoItemIndex, 1); 
    }

    listTasks(){
        return this.projectToDoList; 
    }
    
    uploadProjectListToLocalStorage() {

        const existingProjects = JSON.parse(localStorage.getItem('projects') || '[]'); 

        const JSONProjectList = {
            projectName : this.projectName,
            tasks : this.projectToDoList
        };

        existingProjects.push(JSONProjectList); 

        localStorage.setItem('projects', JSON.stringify(existingProjects));
    }

    updateProjectTasks(currentProject){
        // create func that updates the projectToDoList array when a user submits a new task 
        
        const projectListJSON = localStorage.getItem('projects');
        const parsedJSON = JSON.parse(projectListJSON); 

        console.log(parsedJSON.projectToDoList);

        console.log(currentProject.projectToDoList); 
        parsedJSON.projectToDoList = JSON.stringify(currentProject.projectToDoList);

        localStorage.setItem('projects',  parsedJSON.projectToDoList)

    }

}


export default Project; 