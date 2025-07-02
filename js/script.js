const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
const docs = document;

// Toggle sidebar visibility
hamburger.onclick = (event) => {
  navbarNav.classList.toggle("active");
  event.preventDefault();
};

// Toggle search form visibility
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const originalPlaceholder = searchBox.placeholder;
const searchButton = document.querySelector("#search");

searchButton.addEventListener("click", function (event) {
  searchForm.classList.toggle("active");
  if (searchForm.classList.contains("active")) {
    searchBox.placeholder = originalPlaceholder;
    searchBox.focus();
  } else {
    searchBox.placeholder = "";
  }
  event.preventDefault();
});

searchBox.placeholder = originalPlaceholder;

// Close sidebar when clicking outside of it
docs.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});
