//Image carousel
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}



let emailField = document.getElementById("email");
const formButton = document.querySelector('#formButton');
const form = document.getElementById('contactForm');

form.onsubmit = validateEmail();


function validateEmail(event) {

    event.preventDefault();

    const formData = new FormData(event.target)
    const formProperties = Object.fromEntries(formData);

    console.log(formProperties);

    console.log(event);

    const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (regex_pattern.test(formProperties.email)) {
        console.log('The email address is valid');
    }
    else {
        console.log('The email address is not valid');
    }
}

//copy to clipboard function
function copyToClipboard() {
    let copyText = document.querySelector('.email').innerText;
    let copyTextMod = copyText.substring(0, 19)
    navigator.clipboard.writeText(copyTextMod);
}

function copiedToClipboard() {
    document.querySelector('.tooltip').innerText = 'Copied to clipboard!';
    let copied = document.querySelector('.email .dropdown');
    copied.style.left = '-95px';
}

const revert = document.querySelector('.email');

revert.addEventListener('mouseenter', () => {
    console.log('This is working');
    document.querySelector('.tooltip').innerText = 'Click to copy!';
})

