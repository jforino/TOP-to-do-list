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
        const projectListJSON = localStorage.getItem('projects');

        const parsedJSON = JSON.parse(projectListJSON); 

        parsedJSON.forEach(element => {
            console.log(element);
            console.log(`update project tasks`)
            if (element.projectName == currentProject.projectName){
                element.tasks.push();
            }        
        });
    }

}


export default Project; 