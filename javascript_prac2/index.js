const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handlerClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handlerClick);
}

init();
