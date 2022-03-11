const loginForm = document.querySelector('#con-login');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

//단순 string만 포함하는 변수는 대문자로 표기하는 게 국룰적인 느낌.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault(); //submit하면 디폴트값으로 새로고침하는데 그걸 못하게 함.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  printGreetings(username);
}

function printGreetings(username){
  greeting.innerText = `Hello🖐 Master, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  printGreetings(savedUsername);
}