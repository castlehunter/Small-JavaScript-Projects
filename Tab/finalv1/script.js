// Select buttons and modal window
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const modalWindow = document.querySelector(".window");
const closeButton = document.querySelector(".close-btn");

// Toggle the visibility of the modal window
function toggleWindow(element) {
  element.classList.toggle("show");
}

// Add click event listeners to the buttons
btn1.addEventListener("click", () => {
  toggleWindow(modalWindow);
});

btn2.addEventListener("click", () => {
  toggleWindow(modalWindow);
});

btn3.addEventListener("click", () => {
  toggleWindow(modalWindow);
});

// Add click event listener to the close button
closeButton.addEventListener("click", () => {
  modalWindow.classList.remove("show");
});
