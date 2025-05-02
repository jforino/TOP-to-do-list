class toDoItem {

    constructor(taskTitle, description, dueDate, dueTime, priority, notes='', completed=false){
        this.taskTitle = taskTitle; 
        this.description = description; 
        this.dueDate = dueDate;
        this.dueTime = dueTime; 
        this.priority = priority; 
        this.notes = notes; 
        this.completed = completed; 
    }

    completeToDoItem(){
        this.completed = true; 
    }

    updateToDoItem(newDescription){
        this.description = newDescription; 
    }

    setPriorityToDoItem(newPriority){
        this.priority = newPriority;
    }

}

export default toDoItem; 