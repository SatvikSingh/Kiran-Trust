// importScripts("https://kit.fontawesome.com/64d58efce2.js");
window.onload = function () {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".login-container");

  if (sign_up_btn) {
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
  }

  if (sign_in_btn) {
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }
};
