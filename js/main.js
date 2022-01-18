const mobileMenu = document.querySelector(".mobileMenu");
const menu = document.querySelector(".menu");
const wishlist = document.querySelectorAll(".wishlist");
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown__menu");
let dropdownButton = document.querySelector('.dropdown__button');


// Mobile menu toggle
mobileMenu.addEventListener("click", () => {
  menu.classList.toggle("displayBlock");
});

// Wishlist toggle
function addToWishlist(e) {
  e.target.classList.toggle("active");
}

wishlist.forEach((wish) => {
  wish.addEventListener("click", addToWishlist);
});

// Dropdown button
let dropdownButtonState = true;

// Toggle inner html of dropdownMenu span
function toggleDropdown() {
  if (dropdownButtonState) {
    dropdownButton.innerHTML = `<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
    dropdownButtonState = false;
  } else {
    dropdownButton.innerHTML = `<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7L7 1L1 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
    dropdownButtonState = true;
  }
}

dropdownButton.addEventListener("click", toggleDropdown);

// responsive dropdown menu
function toggleDropdownMenu() {
  dropdownMenu.classList.toggle("displayGrid");
}

dropdownButton.addEventListener("click", toggleDropdownMenu);