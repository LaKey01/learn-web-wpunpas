const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Toggle sidebar visibility
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Close sidebar when clicking outside of it
document.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});
