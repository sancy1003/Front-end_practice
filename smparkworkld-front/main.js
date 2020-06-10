"use strict";

const header = document.querySelector(".header");
const menu = document.querySelector(".menu-icon");
const cal = document.querySelector(".cal").innerText;
const mail = document.querySelector(".mail").innerText;
let menuOpen = false;

function openSidebar() {
  const bottomText =
      `Cal&nbsp |&nbsp  ${cal}<br> Email&nbsp |&nbsp  ${mail}`,
    screen = document.createElement("div"),
    title = document.createElement("div"),
    bottom = document.createElement("div"),
    closeBtn = document.createElement("i"),
    headerMenu = document.querySelector(".header-menu"),
    menuItem = document.querySelectorAll(".header-menu-item");

  screen.classList.add("mobile-header-menu-screen");
  title.classList.add("mobile-header-menu-title");
  bottom.classList.add("mobile-header-menu-bottom");
  closeBtn.classList.add("mobile-header-menu-closeBtn");
  closeBtn.classList.add("fas");
  closeBtn.classList.add("fa-times");
  bottom.innerHTML = bottomText;
  title.innerText = "Menu";

  headerMenu.classList.remove("header-menu");
  headerMenu.classList.add("mobile-header-menu");
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.remove("header-menu-item");
    menuItem[i].classList.add("mobile-header-menu-item");
  }
  headerMenu.prepend(title);
  headerMenu.appendChild(bottom);
  headerMenu.prepend(closeBtn);
  header.appendChild(screen);

  headerMenu.classList.add("mobile-header-menu-animation-in");
  setTimeout(function () {
    headerMenu.classList.add("mobile-header-menu-animation-out");
  }, 30);
  setTimeout(function () {
    screen.addEventListener("click", clickMenuBtn);
    closeBtn.addEventListener("click", clickMenuBtn);
    headerMenu.classList.remove(
      "mobile-header-menu-animation-in",
      "mobile-header-menu-animation-out"
    );
  }, 700);
}

function closeSidebar() {
  const screen = document.querySelector(".mobile-header-menu-screen"),
    title = document.querySelector(".mobile-header-menu-title"),
    bottom = document.querySelector(".mobile-header-menu-bottom"),
    closeBtn = document.querySelector(".mobile-header-menu-closeBtn"),
    mobileMenu = document.querySelector(".mobile-header-menu"),
    mobileMenuItem = document.querySelectorAll(".mobile-header-menu-item");

  mobileMenu.classList.add("mobile-header-menu-animation-in");
  screen.remove();

  setTimeout(function () {
    title.remove();
    bottom.remove();
    closeBtn.remove();
    mobileMenu.classList.remove("mobile-header-menu");
    mobileMenu.classList.add("header-menu");
    for (let i = 0; i < mobileMenuItem.length; i++) {
      mobileMenuItem[i].classList.remove("mobile-header-menu-item");
      mobileMenuItem[i].classList.add("header-menu-item");
    }
    mobileMenu.classList.remove(
      "mobile-header-menu-animation-in",
      "mobile-header-menu-animation-out"
    );
  }, 700);
}

function clickMenuBtn() {
  if (menuOpen) {
    closeSidebar();
    menuOpen = false;
  } else {
    openSidebar();
    menuOpen = true;
  }
}

function delMenu() {
  if (window.innerWidth > 1000 && menuOpen) {
    menuOpen = false;
    closeSidebar();
    setTimeout(function () {
      const Menu = document.querySelector(".header-menu");
      Menu.classList.add("header-menu-animation-start");
      setTimeout(function () {
        Menu.classList.add("header-menu-animation-end");
      }, 30);
      setTimeout(function () {
        Menu.classList.remove(
          "header-menu-animation-start",
          "header-menu-animation-end"
        );
      }, 1000);
    }, 700);
  }
}

function headerTop(){
  var scrollPos = window.scrollY || document.documentElement.scrollTop;
  if(scrollPos !== 0) {
    header.classList.remove("top");
  } else {
    header.classList.add("top");
  }
  console.log(scrollPos);
}

function init() {
  menu.addEventListener("click", clickMenuBtn);
  window.addEventListener("resize", delMenu);
  window.addEventListener("scroll", headerTop);
  console.log(cal, mail);
}

init();
