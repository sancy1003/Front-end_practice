"use strict";

const agent = navigator.userAgent.toLowerCase();
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
  document.querySelector("#Contact"),
];
const msgSendBtn = document.querySelector(".contact-send-btn");
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
      let itemSort = portfolioItemSort[i];
      itemSort.style.display = "none";
      itemSort.classList.remove("appear");
      itemSort.style.opacity = 0;
      itemSort.style.display = "inline-block";
      setTimeout(function () {
        itemSort.classList.add("appear");
      }, 30);
    }
  } else {
    for (var i = 0; i < portfolioItemSort.length; i++) {
      let itemSort = portfolioItemSort[i];
      if (
        itemSort.classList.contains(
          `pf-${portfolioClassification[array].innerText}`
        )
      ) {
        itemSort.style.display = "none";
        itemSort.classList.remove("appear");
        itemSort.style.opacity = 0;
        itemSort.style.display = "inline-block";
        setTimeout(function () {
          itemSort.classList.add("appear");
        }, 30);
      } else {
        itemSort.classList.remove("appear");
        itemSort.style.display = "none";
      }
    }
  }
}

function movePosition(event) {
  if (agent.indexOf("edge") != -1) {
    switch (event.target.innerText) {
      case "Home":
        window.window.scroll(0, 0);
        break;
      case "About":
        window.window.scroll(0, movePos[1].offsetTop - 100);
        break;
      case "Portfolio":
        window.window.scroll(0, movePos[2].offsetTop - 100);
        break;
      case "Contact":
        window.window.scroll(0, movePos[3].offsetTop - 100);
        break;
    }
  } else {
    switch (event.target.innerText) {
      case "Home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "About":
        window.scrollTo({
          top: movePos[1].offsetTop - 100,
          behavior: "smooth",
        });
        break;
      case "Portfolio":
        window.scrollTo({
          top: movePos[2].offsetTop - 100,
          behavior: "smooth",
        });
        break;
      case "Contact":
        window.scrollTo({
          top: movePos[3].offsetTop - 100,
          behavior: "smooth",
        });
        break;
    }
  }
  headerMenuCol();
}

function headerMenuCol() {
  if (scrollY < movePos[1].offsetTop - 180) {
    menuName[0].classList.remove("active");
    menuName[1].classList.remove("active");
    menuName[2].classList.remove("active");
    menuName[3].classList.remove("active");
    menuName[0].classList.add("active");
  } else if (
    movePos[1].offsetTop - 180 < scrollY &&
    scrollY < movePos[2].offsetTop - 300
  ) {
    menuName[0].classList.remove("active");
    menuName[1].classList.remove("active");
    menuName[2].classList.remove("active");
    menuName[3].classList.remove("active");
    menuName[1].classList.add("active");
  } else if (
    movePos[2].offsetTop - 299 < scrollY &&
    movePos[3].offsetTop - 300 > scrollY
  ) {
    menuName[0].classList.remove("active");
    menuName[1].classList.remove("active");
    menuName[2].classList.remove("active");
    menuName[3].classList.remove("active");
    menuName[2].classList.add("active");
  } else if (movePos[3].offsetTop - 299 < scrollY) {
    menuName[0].classList.remove("active");
    menuName[1].classList.remove("active");
    menuName[2].classList.remove("active");
    menuName[3].classList.remove("active");
    menuName[3].classList.add("active");
  }
}

function checkBrowser() {
  if (agent.indexOf("edge") != -1) {
    alert("본 사이트는 Chrome 환경에 최적화 되어있습니다.");
  }
  if (
    (navigator.appName == "Netscape" && agent.indexOf("trident") != -1) ||
    agent.indexOf("msie") != -1
  ) {
    alert("본 사이트는 Chrome 환경에 최적화 되어있습니다.");
  }
}

function sendMessage() {
  const mailImg = document.querySelector(".contact-img");
  const sendAfter = document.querySelector(".send-after");

  if (mailImg) {
    mailImg.classList.add("msgMove");
    setTimeout(function () {
      mailImg.remove();
      sendAfter.classList.add("comfirmMove");
    }, 1000);
  }
}

function scrollAnimation() {
  const likeBtn = document.querySelector(".js-like");
  const infoItem = document.querySelectorAll(".about-info-item");
  let likeBtnOffsetTop =
    likeBtn.parentElement.parentElement.offsetTop +
    likeBtn.parentElement.offsetTop +
    likeBtn.offsetTop;
  let infoItemOffsetTop = infoItem[0].offsetTop;

  if (
    window.scrollY < likeBtnOffsetTop &&
    likeBtnOffsetTop < window.scrollY + window.innerHeight &&
    !likeBtn.classList.contains("likeAnim")
  ) {
    likeBtn.classList.add("likeAnim");
  }

  for (let i = 0; i < infoItem.length; i++) {
    if (
      window.scrollY < infoItemOffsetTop &&
      infoItemOffsetTop < window.scrollY + window.innerHeight &&
      !infoItem[i].classList.contains("info-item-move")
    ) {
      infoItem[i].classList.add("info-item-move");
      infoItem[i].classList.remove("info-item-pre");
    }
  }
}

function init() {
  checkBrowser();
  menu.addEventListener("click", clickMenuBtn);
  window.addEventListener("resize", delMenu);
  window.addEventListener("scroll", headerTop);
  window.addEventListener("scroll", headerMenuCol);
  msgSendBtn.addEventListener("click", sendMessage);
  for (var i = 0; i < portfolioClassification.length; i++) {
    portfolioClassification[i].addEventListener("click", (event) =>
      portfolioModeChange(event)
    );
  }
  for (var i = 0; i < menuName.length; i++) {
    menuName[i].addEventListener("click", (event) => movePosition(event));
  }
  window.addEventListener("scroll", scrollAnimation);
}

init();
