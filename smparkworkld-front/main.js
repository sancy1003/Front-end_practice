"use strict";

const header = document.querySelector(".header");
const menu = document.querySelector(".menu-icon");
let menuOpen = false;

function openSidebar() {
    const menuItem = ["Home", "About", "Skills", "Portfolio", "Admin"];
    const bottomText = ["Cal&nbsp |&nbsp  010-0000-0000<br> Email&nbsp |&nbsp  yourmain@naver.com"]
    const screen = document.createElement("div");
    const title = document.createElement("div");
    const bottom = document.createElement("div");
    const ul = document.createElement("ul");
    const menu1 = document.createElement("li");
    const menu2 = document.createElement("li");
    const menu3 = document.createElement("li");
    const menu4 = document.createElement("li");
    const menu5 = document.createElement("li");
    const closeBtn = document.createElement("i");
    
    screen.classList.add("mobile-header-menu-screen");
    screen.addEventListener("click", clickMenuBtn);
    ul.classList.add("mobile-header-menu");
    title.classList.add("mobile-header-menu-title");
    bottom.classList.add("mobile-header-menu-bottom");
    closeBtn.classList.add("mobile-header-menu-closeBtn");
    closeBtn.classList.add("fas");
    closeBtn.classList.add("fa-times");
    closeBtn.addEventListener("click", clickMenuBtn);
    bottom.innerHTML = bottomText[0];
    title.innerText = "Menu";
    menu1.classList.add("mobile-header-menu-item");
    menu1.innerText = menuItem[0];
    menu2.classList.add("mobile-header-menu-item");
    menu2.innerText = menuItem[1];
    menu3.classList.add("mobile-header-menu-item");
    menu3.innerText = menuItem[2];
    menu4.classList.add("mobile-header-menu-item");
    menu4.innerText = menuItem[3];
    menu5.classList.add("mobile-header-menu-item");
    menu5.innerText = menuItem[4];
    ul.appendChild(title);
    ul.appendChild(menu1);
    ul.appendChild(menu2);
    ul.appendChild(menu3);
    ul.appendChild(menu4);
    ul.appendChild(menu5);
    ul.appendChild(bottom);
    ul.appendChild(closeBtn);
    header.appendChild(screen);
    header.appendChild(ul);
}

function closeSidebar() {
    header.removeChild(header.querySelector(".mobile-header-menu"));
    header.removeChild(header.querySelector(".mobile-header-menu-screen"));
}

function clickMenuBtn() {
    if(menuOpen) {
        closeSidebar();
        menuOpen = false;
    } else {
        openSidebar();
        menuOpen = true;
    }
}

function delMenu() {
    if(window.innerWidth > 1000) {
        menuOpen = false;
        closeSidebar();
    }
}

function init() {
    menu.addEventListener("click", clickMenuBtn);
    window.addEventListener("resize", delMenu);
}

init();