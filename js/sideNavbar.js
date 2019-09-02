const triggers = document.querySelectorAll('.nav-trigger');
const navlist = document.querySelector('.nav-list');
const dropdownHead = document.querySelector('.dropdown-head');
const dropdownList = document.querySelector('.dropdown-list');

triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        navlist.classList.toggle('show-sidenav');
    });
});

dropdownHead.addEventListener('click', () => {
    dropdownList.classList.toggle('show-dropdown');
});