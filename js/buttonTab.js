const leftBtn = document.getElementById('left-button');
const rightBtn = document.getElementById('right-button');
const slideList = document.querySelector('.slide-list');
const messageBox = document.querySelector('.message');
var slidePosition = 0;

leftBtn.onclick = function() {
    if (slidePosition > -180) {
        slidePosition -= 60;
        slideList.style.transform = "translateX(" + slidePosition + "vw)";
    }
    else {
        messageBox.style.visibility = 'visible';
        messageBox.style.opacity = 1;
        setTimeout(() => {
            messageBox.style.opacity = 0;
            setTimeout(() => {
                messageBox.style.visibility = 'hidden';
            }, 300);
        }, 1000);
    }
}

rightBtn.onclick = function() {
    if (slidePosition < 0) {
        slidePosition += 60;
        slideList.style.transform = "translateX(" + slidePosition + "vw)";
    }
    else {
        messageBox.style.visibility = 'visible';
        messageBox.style.opacity = 1;
        setTimeout(() => {
            messageBox.style.opacity = 0;
            setTimeout(() => {
                messageBox.style.visibility = 'hidden';
            }, 300);
        }, 1000);
    }
}