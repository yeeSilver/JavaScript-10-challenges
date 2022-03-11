const todoForm = document.querySelector("#con-todo");
const todoList = document.querySelector("#li-todo");
const todoInput = todoForm.querySelector("input");

const toDos=[];

//toDos를 로컬 스토리지에 저장
function saveTodos(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.innerText = "🗑️";
  btn.addEventListener("click", )
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function deleteTOdo(event){
  const targetLi = event.target.parentElement;
  targetLi.remove();
}

function handleToDOSubmit(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value="";
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", handleToDOSubmit);