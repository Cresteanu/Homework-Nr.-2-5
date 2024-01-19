// Secțiunea 3: Listă de sarcini

const task = document.querySelector("#task");
const add = document.querySelector("#add");
const list = document.querySelector("#list");
let tasks = [];

function addTask() {
  const taskValue = task.value;
  if (taskValue === "") {
    alert("Nu puteți adăuga o sarcină goală.");
    return;
  }
  const taskObject = {
    id: Math.random().toString(36).substr(2, 9),
    name: taskValue,
    done: false
  };
  tasks.push(taskObject);
  displayTasks();
  task.value = "";
}

function displayTasks() {
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement("li");
    if (task.done) {
      li.classList.add("done");
    }
    const span = document.createElement("span");
    span.textContent = task.name;
    const edit = document.createElement("div");
    edit.classList.add("edit");
    edit.textContent = "✏️";
    edit.setAttribute("data-id", task.id);
    edit.addEventListener("click", editTask);
    const del = document.createElement("div");
    del.classList.add("delete");
    del.textContent = "❌";
    del.setAttribute("data-id", task.id);
    del.addEventListener("click", deleteTask);
    li.appendChild(span);
    li.appendChild(edit);
    li.appendChild(del);
    li.addEventListener("click", toggleTask);
    list.appendChild(li);
  }
}

// Definim funcția pentru a marca o sarcină ca fiind completată
function toggleTask(e) {
  const target = e.target;
  if (target.tagName === "SPAN") {
    const id = target.parentElement.getAttribute("data-id");
    const task = tasks.find(t => t.id === id);
    task.done = !task.done;
    displayTasks();
  }
}

function editTask(e) {
  const target = e.target;
  if (target.classList.contains("edit")) {
    const id = target.getAttribute("data-id");
    const task = tasks.find(t => t.id === id);
    const newName = prompt("Introduceți noul nume pentru sarcină:", task.name);
    if (newName !== null) {
      task.name = newName;
      displayTasks();
    }
  }
}

function deleteTask(e) {
  const target = e.target;
  if (target.classList.contains("delete")) {
    const id = target.getAttribute("data-id");
    tasks = tasks.filter(t => t.id !== id
    );
    displayTasks();
  }
}

add.addEventListener("click", addTask);

// Adăugăm un eveniment de click la nivel global pentru a ascunde mesajele de eroare la click în afara lor
document.addEventListener("click", (e) => {
  if (!e.target.closest(".form")) {
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
  }
});
