// menü.js
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll('#bottomNav .nav-item');
  const currentPage = location.pathname.split("/").pop();

  navItems.forEach(item => {
    if (item.getAttribute('href') === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
