// menü.js
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".menu-item").forEach((item) => {
  if (item.getAttribute("href") === currentPage) {
    item.classList.add("active");
  }
});
