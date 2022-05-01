const taskToBeAdded = document.querySelector("[textbox]");
const submit = document.querySelector("[submit]");
const toDoList = document.querySelector(".to-do-list");
let li, checkBox, addedTask, taskRemoval;

function addTask() {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (taskToBeAdded.value !== "") {
      checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.classList.add("checkbox");

      addedTask = document.createElement("p");
      addedTask.classList.add("task-text");
      addedTask.innerHTML = taskToBeAdded.value;

      taskRemoval = document.createElement("span");
      taskRemoval.classList.add("task-delete");

      li = document.createElement("li");
      li.classList.add("task-wrapper");
      li.appendChild(checkBox);
      li.appendChild(addedTask);
      li.appendChild(taskRemoval);

      toDoList.appendChild(li);
      taskToBeAdded.value = "";
      taskToBeAdded.focus();
    }
  });
}

function removeTask() {
  submit.addEventListener("click", () => {
    let taskRemoval = document.querySelectorAll(".task-delete");

    taskRemoval.forEach((item) => {
      item.addEventListener("click", () => {
        item.parentElement.remove();
      });
    });
  });
}

window.addEventListener("load", addTask);
window.addEventListener("load", removeTask);
