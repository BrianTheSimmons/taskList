// Variable declarations
let taskForm = document.getElementById('taskForm');
let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let displaySection = document.getElementById('displaySection');
let taskList = document.getElementById('taskList');
let removeTaskBtn = document.getElementsByClassName('removeTask');
let newTask, newDeleteBtn, newIcon, liNode, iNode;

// Event listeners
addBtn.addEventListener('click', addTask);
for( var i=0;i<removeTaskBtn.length;i++){
	removeTaskBtn[i].addEventListener("click", removeTask);
}

// function to add task
function addTask(e){
    e.preventDefault();
    if(taskInput.value != ''){
        createTask();
        taskList.appendChild(newTask);
        taskInput.value = '';
    } else {
        let warning = document.getElementById('warning');
        warning.classList.remove('hidden');
        setTimeout(function(){
            warning.classList.add('hidden');
        }, 3000)
    }
}

// function to remove task
function removeTask(){
    this.parentNode.parentNode.removeChild(this.parentNode);
}

// function to create task
function createTask(){
    // create Elements and text node
    newTask = document.createElement('li');
    newDeleteBtn = document.createElement('button');
    newIcon = document.createElement('i');
    liNode = document.createTextNode(taskInput.value);
    iNode = document.createTextNode("remove");

    // append children
    newTask.appendChild(liNode);
    newTask.appendChild(newDeleteBtn);
    newIcon.appendChild(iNode);
    newDeleteBtn.appendChild(newIcon);

    // add classes
    newTask.classList.add("mdl-list__item", "task");
    newDeleteBtn.classList.add("mdl-button", "mdl-js-button", "mdl-button--fab", "mdl-button--mini-fab", "mdl-button--colored", "removeTask");
    newIcon.classList.add("material-icons");

    newDeleteBtn.addEventListener("click", removeTask);

    // return the new task crated
    return newTask;
}