const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

setActiveSlide();

leftBtn.addEventListener('click', () => {
    console.log("active slide:", activeSlide);
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setActiveSlide();
})

rightBtn.addEventListener('click', () => {
    console.log("active slide:", activeSlide);
    activeSlide++;
    if (activeSlide > slides.length -1){
        activeSlide = 0;
    }
    setActiveSlide();
})

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}


function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    slides[activeSlide].classList.add('active');
    setBgToBody();
}

setInterval( () => {
    activeSlide = (activeSlide + 1) % slides.length;
    setActiveSlide();
},10000)