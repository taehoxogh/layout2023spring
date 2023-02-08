const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    event.preventDefault();
});
