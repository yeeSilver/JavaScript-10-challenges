const clock = document.querySelector("#clock");

function getClock(){
  // string.padStart(2,"0"): 문자열이 2자리가 아니라면 앞에 0을 채워.
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText= `${hours} : ${minutes} : ${seconds}`;
}
getClock();
setInterval(getClock, 1000);
