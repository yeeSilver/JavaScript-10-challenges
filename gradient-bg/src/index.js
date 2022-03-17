const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

function getRandom(){
  let randomArr = [];

  for(let i=0; i<2; i++){
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    if(randomArr.indexOf(randomColor) === -1){
      randomArr.push(randomColor);
    }else{
      i--;
    }
  }
  const color1 = randomArr[0];
  const color2 = randomArr[1];
  document.body.style.background = `linear-gradient(to left,${color1}, ${color2})`
}

const btn = document.querySelector("button");
btn.addEventListener('click',getRandom);