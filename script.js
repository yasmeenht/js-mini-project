let inputTask = document.querySelector(".inputArea input");
let addTaskbtn = document.querySelector(".addButton");
let tasksList = document.querySelector(".tasksList");
let tasksArray = []




addTaskbtn.addEventListener("click", function (){
    let task = {
        id: Date.now(),
        text: inputTask.value
    };
    tasksArray.push(task);
    tasksList.innerHTML += 
    `<div class="tasks" style="display: inline;">
        <span class="currentTask">${inputTask.value}</span>
        <button class="deleteButton" onclick="deleteStuff(this, ${task.id})">Delete</button><br>
    </div>`;

    console.log(tasksArray);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    inputTask.value="";
})

inputTask.addEventListener("keypress", function(){
    let task = {
        id: Date.now(),
        text: inputTask.value
    };
    if (event.key === "Enter") {
    tasksArray.push(task);
    tasksList.innerHTML += 
    `<div class="tasks" style="display: inline;">
        <span class="currentTask">${task.text}</span>
        <button class="deleteButton" onclick="deleteStuff(this, ${task.id})">Delete</button><br>
    </div>`;

    console.log(tasksArray);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    inputTask.value="";
    }
    
})
    

function deleteStuff(btn, id){
    for(i in tasksArray){
        if(tasksArray[i].id == id){
            tasksArray.splice(i,1);
            break;
        }
    }
    btn.parentElement.remove();
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
}


tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

for (let task of tasksArray) {
    tasksList.innerHTML += `
        <div class="tasks" style="display: inline;">
            <span class="currentTask">${task.text}</span>
            <button class="deleteButton" onclick="deleteStuff(this, ${task.id})">
                Delete
            </button><br>
        </div>`;
}