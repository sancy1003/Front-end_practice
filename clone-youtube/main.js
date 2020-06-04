"use strict";

const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
let isMenuOpen = true;

function clickMenuBtn() {
  sidebar.classList.remove("show");
  main.classList.remove("goRight");
  sidebar.classList.remove("noShow");
  main.classList.remove("goLeft");
  if (window.innerWidth > 700) {
    if (!isMenuOpen) {
      sidebar.classList.remove("noShow");
      main.classList.remove("goLeft");
      isMenuOpen = true;
    } else {
      sidebar.classList.add("noShow");
      main.classList.add("goLeft");
      isMenuOpen = false;
    }
  } else if (window.innerWidth < 700) {
    if (isMenuOpen) {
      sidebar.classList.remove("show");
      main.classList.remove("goRight");
      isMenuOpen = false;
    } else {
      sidebar.classList.add("show");
      main.classList.add("goRight");
      isMenuOpen = true;
    }
  }

  console.log(menu);
  console.log(sidebar);
  console.log(main);
}

function widthCheck() {
  if (window.innerWidth > 700) {
    isMenuOpen = true;
  } else {
    isMenuOpen = false;
  }
}

function menuStatusCheck() {
  if (main.getBoundingClientRect().x === 250) {
    isMenuOpen = true;
  } else {
    isMenuOpen = false;
  }
}

function init() {
  menu.addEventListener("click", clickMenuBtn);
  widthCheck();
  window.addEventListener("resize", menuStatusCheck);
}

init();
