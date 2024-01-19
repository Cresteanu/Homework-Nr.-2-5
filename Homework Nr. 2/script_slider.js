// Secțiunea 1: Slider de imagini

const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const prev = document.querySelector(".slider .prev");
const next = document.querySelector(".slider .next");
let index = 0;
let interval = 3000;

function showImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }
  images[index].classList.add("active");
}

function nextImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImage();
}

function prevImage() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage();
}

function autoSlide() {
  setInterval(nextImage, interval);
}

showImage();
autoSlide();

prev.addEventListener("click", prevImage);
next.addEventListener("click", nextImage);

