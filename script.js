const carouselItems = document.querySelector('.carousel-items');
const nextBtn2 = document.querySelector('.nextBtn2');
const prevBtn3 = document.querySelector('.prevBtn3');
const prevBtn = document.createElement('button');
prevBtn.classList.add('carousel-control', 'prev');
prevBtn.textContent = '<';
const nextBtn = document.createElement('button');
nextBtn.classList.add('carousel-control', 'next');
nextBtn.textContent = '>';

document.querySelector('.carousel-container').prepend(prevBtn);
document.querySelector('.carousel-container').appendChild(nextBtn);

let currentPosition = 0;
const itemWidth = carouselItems.offsetWidth / 4;

prevBtn3.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        carouselItems.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
    }
});

nextBtn2.addEventListener('click', () => {
    if (currentPosition < 4) {
        currentPosition++;
        carouselItems.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
    }
});

/* ---------------------------------------------------------- */





/* ------------------------------------------------------------------------------------------------------------------------------------- */



/* ------------------------------------------------------------------------------------------------------------------------------------- */



/* ------------------------------------------------------------------------------------------------------------------------------------- */