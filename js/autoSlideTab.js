const slideBar = document.querySelector('.slide-list');
const gridWidth = 20;
const initialPosition = -60;
var basePosition = initialPosition;
var barDragging = false;

// initializing the slide
barInterval = setInterval(() => {
    if (basePosition <= -200) {
        // slide to end, reposition the slide list
        basePosition = initialPosition;
        slideBar.style.transition = "transform ease 0ms";
        slideBar.style.transform = "translateX(" + basePosition + "vw)";
        console.log('now slide to: ', basePosition);
    }
    else {
        // start the slide
        slideBar.style.transition = "transform ease 500ms";
        basePosition -= gridWidth;
        slideBar.style.transform = "translateX(" + basePosition + "vw)";
        console.log('now slide to: ', basePosition);
    }
}, 1000);

function convertWidthToVW(w) {
    return w/document.documentElement.clientWidth*100;
}

slideBar.onmousedown = function(e) {
    //stop the slide before dragging

    clearInterval(barInterval);
    slideBar.style.transition = "transform ease 0ms";
    barDragging = true;
    slideBarX = slideBar.offsetLeft;
    slideBarY = slideBar.offsetTop;
    mouseInitialX = e.pageX;
    mouseInitialY = e.pageY;

    // console.log("slidebar position: " + slideBarX + ", " + slideBarY);
    // console.log("mouse position: " + e.pageX + ", " + e.pageY);
    // console.log("mouse position X(vw): "+ convertWidthToVW(e.pageX));
}

slideBar.onmousemove = function(e) {
    if (barDragging) {
        offsetMouseX = e.pageX - mouseInitialX;
        offsetMouseY = e.pageY - mouseInitialY;
        slideBar.style.transform = "translateX(" + (basePosition + convertWidthToVW(offsetMouseX)) + "vw)";
    }
}

slideBar.onmouseup = function() {
    barDragging = false;
    slideBar.style.transition = "transform ease 500ms";
    basePosition = parseInt((basePosition + convertWidthToVW(offsetMouseX))/20)*20;
    if (basePosition > 0) {
        // prevent bar from sliding right too much
        basePosition = 0;
    }
    if (basePosition < -200) {
        // prevent bar from sliding left too much
        basePosition = -200;
    }
    slideBar.style.transform = "translateX(" + basePosition + "vw)";
    
    // restart the slide
    barInterval = setInterval(() => {
        if (basePosition <= -200) {
            basePosition = initialPosition;
            slideBar.style.transition = "transform ease 0ms";
            slideBar.style.transform = "translateX(" + basePosition + "vw)";
            console.log('now slide to: ', basePosition);
        }
        else {
            slideBar.style.transition = "transform ease 500ms";
            basePosition -= gridWidth;
            slideBar.style.transform = "translateX(" + basePosition + "vw)";
            console.log('now slide to: ', basePosition);
        }
    }, 1000);
}