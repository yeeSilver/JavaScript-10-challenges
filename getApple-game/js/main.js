
'use strict';

const tree = document.querySelector(".img_treetop");
const treeRect = tree.getBoundingClientRect(); // 필드의 사이즈

function init(){
  console.log(fieldRect);
  addApple('red', 8,'../img/red_apple.png');
  addApple('green', 4,'../img/green_apple.png');
}

function addApple(className, count, imgPath){
  const x1 = 10;
  const y1 = 10;
  const x2 = treeRect.width;
  const y2 = treeRect.height;
 for (let i =0; i<count; i++){
   
 }
}

// init();
console.log(treeRect.width,
   treeRect.height)

function random(min, max) {
  return Math.random() * (max - min ) + min;
}