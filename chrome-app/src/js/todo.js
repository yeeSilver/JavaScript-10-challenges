const todoForm = document.querySelector("#con-todo");
const todoList = document.querySelector("#li-todo");
const todoInput = todoForm.querySelector("input");
const TODOS_KEY = "todos";
const toDos=[];

//toDos를 로컬 스토리지에 저장
function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.innerText = "🗑️";
  btn.addEventListener("click",deleteTOdo )
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

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos) //savedTodos 그냥 문자열
if (savedTodos != null){
  //savedTodos를 live JS object로 만들거야..?
  //JSON.parse() : JSON값을 분석해서 JS 객체 생성.
  const parsedTodos = JSON.parse(savedTodos);
   //parsedTodos 객체
   parsedTodos.forEach(paintTodo);
}