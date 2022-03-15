const todoForm = document.querySelector("#con-todo");
const todoList = document.querySelector("#li-todo");
const todoInput = todoForm.querySelector("input");
const TODOS_KEY = "todos";
let toDos=[];

//toDos를 로컬 스토리지에 저장
function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id= newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  toDos = toDos.filter((el) => el.id !== parseInt(li.id));
  //parseInt 문자열 -> 숫자 (그런데 !도 바꿔주지 않나?)
  saveTodos();
}

function handleToDOSubmit(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value="";
  const addTodoObj = {
    id: Date.now(),
    text: newTodo
  }
  toDos.push(addTodoObj);
  paintTodo(addTodoObj);
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
   toDos = parsedTodos; // 원래 들어있던 parsedtodos를 toDos 배열 안에 넣어줌
   parsedTodos.forEach(paintTodo);
}