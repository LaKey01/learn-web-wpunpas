const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search");
const originalPlaceholder = searchBox.placeholder;
const docs = document;

// Toggle sidebar visibility
hamburger.onclick = (event) => {
  navbarNav.classList.toggle("active");
  event.preventDefault();
};

searchButton.addEventListener("click", function (event) {
  searchForm.classList.toggle("active");
  if (searchForm.classList.contains("active")) {
    searchBox.placeholder = originalPlaceholder;
    searchBox.focus();
  } else {
    searchBox.placeholder = "";
  }

  // if (
  //   !searchButton.contains(event.target) &&
  //   !searchForm.contains(event.target)
  // ) {
  //   searchForm.classList.remove("active");
  // }
  event.preventDefault();
});

searchBox.placeholder = originalPlaceholder;

// // docs.addEventListener("click", function (event) {
// //   if (
// //     !searchButton.contains(event.target) &&
// //     !searchForm.contains(event.target)
// //   ) {
// //     searchForm.classList.remove("active");
// //     searchBox.placeholder = "";
// //   }
// });

// Close sidebar when clicking outside of it
docs.addEventListener("click", function (event) {
  if (!hamburger.contains(event.target) && !navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
  if (
    !searchButton.contains(event.target) &&
    !searchForm.contains(event.target)
  ) {
    searchForm.classList.remove("active");
    searchBox.placeholder = "";
  }
});
