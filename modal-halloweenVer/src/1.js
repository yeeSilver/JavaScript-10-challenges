
const openImg = document.querySelector('.wizard');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.modal_overlay');
const closeBtn = modal.querySelector('button');
const openModal = () => {
  modal.classList.remove('hidden');
}
const closeModal = () => {
  modal.classList.add('hidden');
}
openImg.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);