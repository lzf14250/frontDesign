var slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideDowns = document.querySelectorAll('.slide-down');
const slideUps = document.querySelectorAll('.slide-up');

function slideFromTo(indexBefore, indexNext) {
    slides[indexNext].style.zIndex = 1;
    slides[indexNext].style.display = "block";

    setTimeout(() => {
        slideDowns[indexNext].style.top = "0";
        slideUps[indexNext].style.top = "40%";
        setTimeout(() => {
            slideUps[indexNext].style.top = "50%";
            slides[indexBefore].style.display = 'none';
            slideDowns[indexBefore].style.top = "-100%";
            slideUps[indexBefore].style.top = "100%";
        }, 700);
    }, 0);
}

document.querySelector('#left-button').onclick = function() {
    prevSlideIndex = slideIndex;
    slides[prevSlideIndex].style.zIndex = 0;
    slideIndex = (slideIndex + 2) % 3;
    slideFromTo(prevSlideIndex, slideIndex);
}

document.querySelector('#right-button').onclick = function() {
    prevSlideIndex = slideIndex;
    slides[prevSlideIndex].style.zIndex = 0;
    slideIndex = (slideIndex + 1) % 3;
    slideFromTo(prevSlideIndex, slideIndex);
}