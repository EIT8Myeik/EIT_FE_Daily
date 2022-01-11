const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo(); //addd

  updateLs();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;
    console.log(todoEl);
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();
      updateLs();
    });

    todosUL.appendChild(todoEl);

    input.value = "";
    updateLs();
  }
}

function updateLs() {
  todosEL = document.querySelectorAll("li");
  const todos = [];
  todosEL.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  console.log(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}
