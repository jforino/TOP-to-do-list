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

}


export default Project; 