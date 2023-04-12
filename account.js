const menuBtn = document.getElementById('showMenu');
const menu = document.querySelector('.menu');
const blackWindow = document.getElementById('blackWindow');

menuBtn.addEventListener('click', () => {
  menu.classList.add('show');
  blackWindow.classList.add('active');
});

blackWindow.addEventListener('click', () => {
    menu.classList.remove('show');
    blackWindow.classList.remove('active');
})
