const carousal = document.querySelector(".carousal");
const leftArrow = document.querySelector(".arrow__left");
const rightArrow = document.querySelector(".arrow__right");
const totalSlides = document.querySelectorAll(".slide").length;
let currentIndex = 0;

leftArrow.addEventListener("click", function () {
  //   currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
  if (currentIndex === 0) {
    currentIndex = totalSlides - 1; // If it's the first slide, go to the last slide
  } else {
    currentIndex -= 1; // Otherwise, go to the previous slide
  }

  const offset = -currentIndex * 100; // Move the carousal by -100% for each slide
  carousal.style.transform = `translateX(${offset}%)`;
});

rightArrow.addEventListener("click", function () {
  // Move to the next slide
  if (currentIndex + 1 === totalSlides) {
    currentIndex = 0; // If it's the last slide, go back to the first slide
  } else {
    currentIndex += 1; // Otherwise, go to the next slide
  }

  const offset = -currentIndex * 100; // Move the carousal by -100% for each slide
  carousal.style.transform = `translateX(${offset}%)`;
});
