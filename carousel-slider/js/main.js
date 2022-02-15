const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slides li');
let currentIdx = 0 //현재 슬라이드 인덱스
const slideCount = slide.length;//끝인지 마지막인지 구분하기 위한 용도 
console.log(slideCount)
const preBtn = document.querySelector('.prev'); 
const nextBtn =  document.querySelector('.next'); 
const slideWidth = 300;
const slideMargin = 30;

//slides 너비 계산

slides.style.width = ((slideWidth + slideMargin)*slideCount) + 'px';
console.log(slides.style.width)

function moveSlide(idx){
  slides.style.transform = 'translateX('+ (-idx * 330 )+ 'px)';
  currentIdx = idx;
}
function endmoveSlixe(){
  slides.style.transform = 'translateX(' + 30+'px)';
}

nextBtn.addEventListener('click', () => {
  if(currentIdx < slideCount -1){
    moveSlide(currentIdx + 1);
    console.log(currentIdx)
    slides.style.transition = 'transform .4s ease';
  }else{
    moveSlide(0);
    slides.style.transition = 'none';

  }
});

preBtn.addEventListener('click', () => {
  if(currentIdx > 0){
    moveSlide(currentIdx -1);
    slides.style.transition = 'transform .4s ease';
  }else{
    moveSlide(slideCount-currentIdx-1);
    slides.style.transition = 'none';
  }
})

