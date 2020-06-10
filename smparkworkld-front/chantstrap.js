"use strict";

const header = document.querySelector(".header");
const menu = document.querySelector(".menu-icon");
const cal = document.querySelector(".cal").innerText;
const mail = document.querySelector(".mail").innerText;
const portfolioClassification = document.querySelectorAll(
  ".portfolio-classification-item"
);
const portfolioItemSort = document.querySelectorAll(".portfolio-item");
const menuName = document.querySelectorAll(".header-menu-item");
const movePos = [
  document.querySelector("#Home"),
  document.querySelector("#About"),
  document.querySelector("#Portfolio"),
];
let menuOpen = false;
let portfolioMode = 0;

function openSidebar() {
  const bottomText = `Cal&nbsp |&nbsp  ${cal}<br> Email&nbsp |&nbsp  ${mail}`,
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

function headerTop() {
  var scrollPos = window.scrollY;
  if (scrollPos !== 0) {
    if (header.classList.contains("top")) {
      header.classList.remove("top");
    }
  } else {
    if (!header.classList.contains("top")) {
      header.classList.add("top");
    }
  }
}

function portfolioModeChange(sort) {
  for (let i = 0; i < portfolioClassification.length; i++) {
    if (portfolioClassification[i].innerText === sort.target.innerText) {
      if (portfolioMode !== sort.target.innerText) {
        portfolioClassification[portfolioMode].classList.remove("active");
        portfolioMode = i;
        changePortfolioBtn(i);
      }
    }
  }
}

function changePortfolioBtn(i) {
  portfolioClassification[i].classList.add("active");
  sortPortfolioItem(i);
}

function sortPortfolioItem(array) {
  if (portfolioClassification[array].innerText === "All") {
    for (var i = 0; i < portfolioItemSort.length; i++) {
      portfolioItemSort[i].style.display = "inline-block";
    }
  } else {
    for (var i = 0; i < portfolioItemSort.length; i++) {
      if (
        portfolioItemSort[i].classList.contains(
          `pf-${portfolioClassification[array].innerText}`
        )
      ) {
        portfolioItemSort[i].style.display = "inline-block";
      } else {
        portfolioItemSort[i].style.display = "none";
      }
    }
  }
}

function movePosition(event) {
  switch (event.target.innerText) {
    case "Home":
      window.scrollTo({ top: 0, behavior: "smooth" });
      break;
    case "About":
      window.scrollTo({ top: movePos[1].offsetTop - 100, behavior: "smooth" });
      break;
    case "Portfolio":
      window.scrollTo({ top: movePos[2].offsetTop - 100, behavior: "smooth" });
      break;
  }
  headerMenuCol();
}

function headerMenuCol() {
  if (scrollY < movePos[1].offsetTop - 180) {
    menuName[0].classList.remove("active");
    menuName[1].classList.remove("active");
    menuName[2].classList.remove("active");
    menuName[0].classList.add("active");
  } else if (
    movePos[1].offsetTop - 180 < scrollY &&
    scrollY < movePos[2].offsetTop - 100
  ) {
    menuName[0].classList.remove("active");
    menuName[1].classList.remove("active");
    menuName[2].classList.remove("active");
    menuName[1].classList.add("active");
  } else if (movePos[2].offsetTop - 180 <= scrollY) {
    menuName[0].classList.remove("active");
    menuName[1].classList.remove("active");
    menuName[2].classList.remove("active");
    menuName[2].classList.add("active");
  }
}

function init() {
  menu.addEventListener("click", clickMenuBtn);
  window.addEventListener("resize", delMenu);
  window.addEventListener("scroll", headerTop);
  window.addEventListener("scroll", headerMenuCol);
  for (var i = 0; i < portfolioClassification.length; i++) {
    portfolioClassification[i].addEventListener("click", (event) =>
      portfolioModeChange(event)
    );
  }
  for (var i = 0; i < menuName.length; i++) {
    menuName[i].addEventListener("click", (event) => movePosition(event));
  }
}

init();
