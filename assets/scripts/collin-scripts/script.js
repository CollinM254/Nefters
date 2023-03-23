/*Hamburger menu script starts */

let menuBtn = document.querySelector(".mobile-menu");
let hamburgerMenu = document.querySelector(".header-mobile");

menuBtn.addEventListener("click", () => {
  if (hamburgerMenu.classList.toggle("hidden")) {
    menuBtn.classList.toggle("menu");
    menuBtn.classList.toggle("close");
    hamburgerMenu.style.left = "-100%";
  } else {
    menuBtn.classList.toggle("menu");
    menuBtn.classList.toggle("close");
    hamburgerMenu.style.left = "0";
  }
});

/*Hamburger menu ends */

/*List filtering starts*/

let nftList = document.querySelectorAll(".nft-item");
let nftDisplayer = document.querySelector(".nft-list");
let buttons = document.querySelectorAll(".filter-item+[value]");

document
  .querySelector(".filter-item.allCategories")
  .addEventListener("click", (event) => {
    document.querySelector(".filter-item.active").classList.toggle("active");
    event.target.classList.toggle("active");
    const selectedList = document.querySelectorAll(".nft-item+.hidden");
    if (selectedList.length != 0) {
      selectedList.forEach((elem) => {
        elem.classList.toggle("hidden");
      });
    }
  });

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    document.querySelector(".filter-item.active").classList.toggle("active");
    event.target.classList.toggle("active");
    nftList.forEach((elem) => {
      if (!elem.classList.contains("hidden")) {
        elem.classList.toggle("hidden");
      }
    });

    let fileteredList = [];
    nftList.forEach((elem) => {
      if (elem.getAttribute("category").includes(event.target.value)) {
        fileteredList.push(elem);
      }
    });

    fileteredList.forEach((elem) => {
      elem.classList.toggle("hidden");
    });
  });
});

/*List filtering ends*/
