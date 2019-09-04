const slideBar = document.querySelector('.slide-list');
const gridWidth = 20;
var slidedLength = 0;

setInterval(() => {
    if (slidedLength === 140) {
        slidedLength = 0;
        slideBar.style.transition = "transform ease 0ms";
        slideBar.style.transform = "translateX(0)";
        console.log('now slide to: ', slidedLength);
    }
    else {
        slideBar.style.transition = "transform ease 500ms";
        slidedLength += gridWidth;
        slideBar.style.transform = "translateX(-" + slidedLength + "vw)";
        console.log('now slide to: ', slidedLength);
    }
}, 1000);
