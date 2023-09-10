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
