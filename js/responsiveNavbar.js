const mainTrigger = document.querySelector('.hambuger');
const subTrigger = document.querySelector('.list-head');
const navlinks = document.querySelector('.nav-links');
const navlist = document.querySelector('.nav-list');

mainTrigger.addEventListener('click', () => {
    navlinks.style.display = navlinks.style.display == 'block'? 'none':'block';
});

subTrigger.addEventListener('click', () => {
    navlist.style.display = navlist.style.display == 'block'? 'none':'block';
});