const menuBtn = document.querySelector('.nav-button');
const menu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  console.log('hi');
});