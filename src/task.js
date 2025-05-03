class toDoItem {

    constructor(taskTitle, description, dueDate, priority=0, notes='', completed=false){
        this.taskTitle = taskTitle; 
        this.description = description; 
        this.dueDate = dueDate;
        this.priority = priority; 
        this.notes = notes; 
        this.completed = completed; 
    }

    completeToDoItem(){
        const toDoCheckbox = document.getElementsByClassName('li-check-box');

        toDoCheckbox.forEach(checkbox => {
            document.addEventListener('click', () => {
                checkbox.classList.add('to-do-list-li-checked');
            })
        });

        this.completed = true; 
    }

    updateToDoItemDescription(newDescription){
        this.description = newDescription; 
    }

    setPriorityToDoItem(newPriority){
        this.priority = newPriority;
    }

    changeToDoItemDueDate(newDueDate){
        this.dueDate = newDueDate; 
    }

}

export default toDoItem; 