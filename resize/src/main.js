const title = document.querySelector('#title');

title.addEventListener('mouseenter', () => {
  title.innerText= "I'm beautiful in my way";
  title.classList.add('gold');
});

title.addEventListener('mouseleave', () => {
  title.innerText= "I'm on the right track, baby";
  title.classList.remove('gold');
});

function resizeEvent() {
  title.innerText= 'Hey! you resized me!';
    title.style.color = 'orange';
}
window.addEventListener('resize', resizeEvent);

title.addEventListener('contextmenu', () => {
  title.innerText= "Hey! you've clicked the right button";
});
