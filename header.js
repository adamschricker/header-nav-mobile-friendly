"use strict";

const NavChecker = () => {
  const windowWidth = window.innerWidth;

  const header = document.querySelector("header");
  header.classList.remove("mobile");

  const headerWidth = header.scrollWidth;

  if (headerWidth > windowWidth) {
    header.classList.add("mobile");
  } else {
    CloseMobileNav();
  }
}
window.addEventListener("load", NavChecker);
window.addEventListener("resize", NavChecker);


const CloseMobileNav = () => {
  document.querySelector("header").classList.remove("open");

  const documentBody = document.querySelector("body");
  documentBody.style.margin = "0 auto";
  documentBody.style.width = "auto";
}


const NavButtonClick = () => {
  const header = document.querySelector("header");

  if (header.classList.contains("open")) {
    CloseMobileNav();
  } else {
    header.classList.add("open");

    const headerNavList = header.querySelector("nav ul");
    headerNavList.addEventListener("click", CloseMobileNav);

    const headerNavListWidth = headerNavList.clientWidth;

    const documentBody = document.querySelector("body");
    documentBody.style.width = documentBody.clientWidth + "px";
    documentBody.style.marginLeft = headerNavListWidth + "px";

    if (!document.querySelector("div.overlay")) {
      const div = document.createElement("div");
      div.classList.add("overlay");
      div.addEventListener("click", CloseMobileNav);
      header.appendChild(div);
    }
  }
}
document.querySelector("header nav button").addEventListener("click", NavButtonClick);
