document.addEventListener("DOMContentLoaded", function () {
    loadTodos();
  });
  
  function loadTodos() {
    const todoList = document.getElementById("todoList");
    const todos = getTodos();
  
    todoList.innerHTML = "";
    todos.forEach(function (todo, index) {
      const li = document.createElement("li");
      li.textContent = todo;
      li.setAttribute("data-index", index);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", deleteTodo);
  
      li.appendChild(deleteButton);
      todoList.appendChild(li);
    });
  }
  
  function addTodo() {
    const newTodo = document.getElementById("newTodo").value;
  
    if (newTodo !== "") {
      const todos = getTodos();
      todos.push(newTodo);
      setTodos(todos);
      loadTodos();
      document.getElementById("newTodo").value = "";
    }
  }
  
  function deleteTodo() {
    const index = this.parentNode.getAttribute("data-index");
    const todos = getTodos();
    todos.splice(index, 1);
    setTodos(todos);
    loadTodos();
  }
  
  function getTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    return todos;
  }
  
  function setTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
