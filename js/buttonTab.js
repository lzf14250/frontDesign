const leftBtn = document.getElementById('left-button');
const rightBtn = document.getElementById('right-button');
const slideList = document.querySelector('.slide-list');
const messageBox = document.querySelector('.message');
const slideImgContainers = document.querySelectorAll('.slide-img-container');
const slideWidth = 60;

var navBtnGroup = document.querySelector('.nav-btn-group');
var slideIndex = 0;
var slidePosition = 0;
var slideListDragging = false;

function makeBtnPrimary(index) {
    var btns = document.querySelectorAll('.nav-btn-container > button');
    for (let btn of btns) {
        btn.classList.remove('primary');
    }
    btns[index].classList.add('primary');
}

function showSlideMess() {
    messageBox.style.visibility = 'visible';
    messageBox.style.opacity = 1;
    setTimeout(() => {
        messageBox.style.opacity = 0;
        setTimeout(() => {
            messageBox.style.visibility = 'hidden';
        }, 300);
    }, 1000);
}

leftBtn.onclick = function() {
    if (slideIndex >= 1) {
        slideIndex -= 1;
        slidePosition += slideWidth;
        slideList.style.transform = "translateX(" + slidePosition + "vw)";
        makeBtnPrimary(slideIndex);
    }
    else {
        showSlideMess();
    }
}

rightBtn.onclick = function() {
    if (slideIndex < slideImgContainers.length - 1) {
        slideIndex += 1;
        slidePosition -= slideWidth;
        slideList.style.transform = "translateX(" + slidePosition + "vw)";
        makeBtnPrimary(slideIndex);
    }
    else {
        showSlideMess();
    }
}

function convertWidthToVW(w) {
    return w/document.documentElement.clientWidth*100;
}

slideList.onmousedown = function(e) {
    slideListDragging = true;
    slideList.style.transition = "transform ease 0ms";
    iniMsePosX = e.pageX;
    iniMsePosY = e.pageY;
}

slideList.onmousemove = function(e) {
    if (slideListDragging) {
        offsetMsePosX = e.pageX - iniMsePosX;
        slideList.style.transform = "translateX(" + (slidePosition + convertWidthToVW(offsetMsePosX)) + "vw)";
    }
}

slideList.onmouseup = function(e) {
    slideListDragging = false;

    if (-convertWidthToVW(offsetMsePosX) > slideWidth/4) {
        slideIndex += 1;
    }
    if (convertWidthToVW(offsetMsePosX) > slideWidth/4) {
        slideIndex -= 1;
    }
    
    if (slideIndex >= slideImgContainers.length) {
        slideIndex = slideImgContainers.length - 1;
        showSlideMess();
    }
    if (slideIndex < 0) {
        slideIndex = 0;
        showSlideMess();
    }

    makeBtnPrimary(slideIndex);
    slidePosition = -slideIndex*slideWidth;

    slideList.style.transition = "transform ease-out 500ms";
    slideList.style.transform = "translateX(" + slidePosition + "vw)";
    console.log("slide to: " + slidePosition);
}

for(var i = 0; i < slideImgContainers.length; i++) {
    var btnContainer = document.createElement('div');
    btnContainer.classList.add('nav-btn-container');
    var btn = document.createElement('button');
    btn.innerHTML = i+1;
    btn.index = -i*slideWidth;
    if (i === 0) {
        btn.classList.add('primary');
    }
    btn.onclick = function() {
        slideList.style.transform = 'translateX(' + this.index + 'vw)';
        slidePosition = this.index;
        slideIndex = -this.index/slideWidth;
        makeBtnPrimary(slideIndex);
    }
    btnContainer.append(btn);
    navBtnGroup.append(btnContainer);
}