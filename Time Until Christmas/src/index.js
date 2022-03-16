const clockTitle = document.querySelector(".js-clock");

function getDay(){
  const d_date = new Date("2022-12-25T00:00:00+0900");
  const d_years = d_date.getFullYear();
  const d_months = d_date.getMonth()+1;
  const d_day = d_date.getDate();

  const current = new Date();
  const gap = d_date.getTime() - current.getTime();
  const day = Math.floor(gap/(1000*60*60*24));
  let hours = Math.floor((gap % (1000*60*60*24))/(1000*60*60));
  let minutes = Math.floor((gap % (1000*60*60))/(1000*60));
  let seconds = Math.floor((gap % (1000*60))/1000);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  clockTitle.innerText = `
  ${day}d ${hours}h ${minutes}m ${seconds}s
  `
}

getDay();
setInterval(getDay, 1000);
