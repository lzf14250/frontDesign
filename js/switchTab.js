const tabTriggers = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

for(var i = 0; i < tabTriggers.length; i++) {
    tabTriggers[i].index = i;
    tabTriggers[i].onclick = function() {
        tabTriggers.forEach(tabTrigger => {
            tabTrigger.classList.remove('activated');
        });
        tabContents.forEach(tabContent => {
            tabContent.style.display = 'none';
        });
        tabTriggers[this.index].classList.add('activated');
        tabContents[this.index].style.display= 'block';
    };
}

// Solution Two
//
// tabTriggers.forEach(trigger => {
//     trigger.addEventListener('click', () => {
//         tabTriggers.forEach(tabTrigger => {
//             tabTrigger.classList.remove('activated');
//         });
//         tabContents.forEach(tabContent => {
//             tabContent.style.display = 'none';
//         });
//         trigger.classList.add('activated');
//         document.getElementById(trigger.attributes["target"].nodeValue).style.display = 'block';
//     });
// });