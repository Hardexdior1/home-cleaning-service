
const serve = document.querySelector(".service-buttons-containerss");
const serviceHide = document.querySelector(".serviceHide");
function HideNaveBar() {
  if (serve.classList.contains("hide")) {
    serve.classList.remove("hide");
  } else {
    serve.classList.add("hide");
  }
}

serviceHide.addEventListener("click", HideNaveBar);

const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".list");

function SibeBar() {
  if (list.classList.contains("hides")) {
    list.classList.remove("hides");
  } else {
    list.classList.add("hides");
  }
}

hamburger.addEventListener("click", SibeBar);

const accordion = document.querySelectorAll(".question");
const hidden = document.querySelectorAll(".answer");

function Array() {
  accordion.forEach((item, indexs) => {
    item.addEventListener("click", () => {
      if (item) {
        hidden.forEach((item, index) => {
          if (index === indexs && item.classList.contains("hidden")) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });
      }
    });
  });
}

Array();