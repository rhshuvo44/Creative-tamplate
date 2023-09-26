// navbar
const menuBTn = document.querySelector(".menu-icon span");
const searchBTn = document.querySelector(".search-icon");
const cancelBTn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form ");

menuBTn.onclick = () => {
  items.classList.add("active");
  menuBTn.classList.add("hide");
  searchBTn.classList.add("hide");
  cancelBTn.classList.add("show");
};
cancelBTn.onclick = () => {
  items.classList.remove("active");
  form.classList.remove("active");
  menuBTn.classList.remove("hide");
  searchBTn.classList.remove("hide");
  cancelBTn.classList.remove("show");
};
searchBTn.onclick = () => {
  form.classList.add("active");
  searchBTn.classList.add("hide");
  cancelBTn.classList.add("show");
};

// portfolio galler
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}
// swiper
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 50,
    // },
  },
});
