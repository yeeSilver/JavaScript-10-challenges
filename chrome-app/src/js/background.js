const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg"
];
 
const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `src/img/${chosenImg}`;
document.body.appendChild(bgImg); // apend하면 가장 마지막요소로 삽입됨.(prepend는 제일 첫 요소)