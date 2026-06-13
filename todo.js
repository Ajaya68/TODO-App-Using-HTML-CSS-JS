
const paraInput = document.getElementsByClassName("task-input")[0];
const dateInput = document.getElementsByClassName("date-input")[0];
const mainTask = document.getElementsByClassName("main-task")[0];

function addTask() {
  const para = document.createElement("p");
  para.textContent = paraInput.value;

  const dateTime = document.createElement("p");
  const date = new Date(dateInput.value);
  dateTime.textContent = date.toLocaleString();

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.classList.add("btn", "btn-danger");

  const taskDiv = document.createElement("div");

  // Delete task when button is clicked
  btn.addEventListener("click", function () {
    taskDiv.remove();
  });

  taskDiv.append(para, dateTime, btn);
  mainTask.append(taskDiv);

  paraInput.value = "";
  dateInput.value = "";
}

