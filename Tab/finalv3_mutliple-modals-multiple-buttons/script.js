"use strict";

const btns = document.querySelectorAll(".show-modal");
const modals = document.querySelectorAll(".modal");

function openModal(i) {
  modals.forEach((modal, index) => {
    if (i === index) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  });
}

btns.forEach((e, i) => {
  e.addEventListener("click", function () {
    openModal(i);
  });
});

// "use strict";
// const btns = document.querySelectorAll(".btn");
// const modals = document.querySelectorAll(".modal");

// const openModal = function (index) {
//   modals.forEach((modal, i) => {
//     if (i === index) {
//       modal.classList.remove("hidden");
//     } else {
//       modal.classList.add("hidden");
//     }
//   });
// };

// btns.forEach((e, index) => {
//   e.addEventListener("click", () => openModal(index));
// });

// ("use strict");

// // CHATGPT
// const btns = document.querySelectorAll(".btn");
// const modals = document.querySelectorAll(".modal");

// btns.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     modals.forEach((modal, modalIndex) => {
//       if (index === modalIndex) {
//         modal.classList.remove("hidden");
//       } else {
//         modal.classList.add("hidden");
//       }
//     });
//   });
// });

// "use strict";

// const tabsContainer = document.getElementById("tabs_container");
// const modals = document.querySelectorAll(".modal");

// tabsContainer.addEventListener("click", (e) => {
//   // 确保点击的是一个按钮
//   if (e.target.classList.contains("btn")) {
//     // 找到所有按钮并获取点击按钮的索引
//     const btns = Array.from(tabsContainer.querySelectorAll(".btn"));
//     const index = btns.indexOf(e.target);

//     // 显示相应的模态框并隐藏其他模态框
//     modals.forEach((modal, modalIndex) => {
//       if (index === modalIndex) {
//         modal.classList.remove("hidden");
//       } else {
//         modal.classList.add("hidden");
//       }
//     });
//   }
// });
