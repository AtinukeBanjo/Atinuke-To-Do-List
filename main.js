"use strict";
let tasks = [];
let inputName = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let btnValue = document.getElementById('mySubmit');
btnValue.addEventListener("click", () => {
    if (inputName.value.length > 0) {
        tasks.push(inputName.value);
        inputName.value = '';
        displayTasks(tasks);
        console.log(tasks);
    }
});
const displayTasks = (container) => {
    let innerContent = ``;
    for (let i = 0; i < tasks.length; i++) {
        let newList;
        innerContent += `<div>
      <li>${container[i]}</li> 
      <span>
        <button id="edit" onclick="editTask(${i})">✔️</button>
        <button id="delete" onclick="deleteTask(${i})">✖️</button>
      </span>
     
      </div>`;
    }
    taskList.innerHTML = innerContent;
};
const editTask = (index) => {
    if (inputName.value.length > 0) {
        tasks.splice(index, 1, inputName.value);
        displayTasks(tasks);
        inputName.value = '';
    }
};
const deleteTask = (index) => {
    tasks.splice(index, 1);
    displayTasks(tasks);
};
