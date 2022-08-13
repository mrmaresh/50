const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    // change opacity from 1 to 0
    loadText.style.opacity = (100 - load)/100;
    // change blur from 30px to 0px
    bg.style.filter = `blur(${-30*load/100 + 30}px)`;
}