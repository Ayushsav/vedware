// JavaScript for toggling the mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');


// Function to toggle the visibility of the navbar links
function toggleNavbar() {
    navbarLinks.classList.toggle('open');
}

// Event listener to toggle the navbar links when the toggle button is clicked
navbarToggle.addEventListener('click', function () {
    toggleNavbar();
});

// Event listener to close the navbar links when a link is clicked (optional)
navbarLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        if (navbarLinks.classList.contains('open')) {
            toggleNavbar();
        }
    });
});


// Testimonial section slider arrows
const leftArrow = document.querySelector('.testinomial-left-arrow-wrap');
const rightArrow = document.querySelector('.testinomial-right-arrow-wrap');
const sliderMask = document.querySelector('.testinomial-mask');

let slideIndex = 0;
leftArrow.addEventListener('click', function () {
slideIndex = (slideIndex - 1 + 3) % 3;
sliderMask.style.transform = `translateX(-${slideIndex * 100}%)`;
});

rightArrow.addEventListener('click', function () {
slideIndex = (slideIndex + 1) % 3;
sliderMask.style.transform = `translateX(-${slideIndex * 100}%)`;
});

});
window.addEventListener('scroll', function() {
var navbar = document.getElementById('navbar');
if (window.scrollY > 0) { // Change 0 to the desired scroll position
    navbar.style.backgroundColor = '#fff'; // Change background color to white when scrolling
} else {
    navbar.style.backgroundColor = 'transparent'; // Revert to default background color when at the top
}
});

window.addEventListener('scroll', function() {
    console.log('Scrolling...'); // Add this line
    var navbar = document.getElementById('navbar');
    var logoText = navbar.querySelector('.headLogoText'); // Select the logo text element
    var links = navbar.querySelectorAll('.navLinks');
if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'white';
    logoText.style.color = 'black'; // Change the color of the logo text to black
    links.forEach(function(link) {
        link.style.color = 'black';
    });
} else {
    navbar.style.backgroundColor = 'transparent';
    logoText.style.color = 'white'; // Change the color of the logo text to white
    links.forEach(function(link) {
        link.style.color = 'white';
    });
}   
});



// This function will be called when the page loads
window.onload = function() {
  // Set the initial state of the elements for myFunction
  setInitialState("dots", "more", "myBtn");
  // Set the initial state of the elements for myFunction1
  setInitialState("dots1", "more1", "myBtn1");
  setInitialState("dots2", "more2", "myBtn2");
  setInitialState("dots3", "more3", "myBtn3");
};

// Function to set the initial state of elements
function setInitialState(dotsId, moreId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreId);
  var btnText = document.getElementById(btnId);
  
  dots.style.display = "inline"; // Show the dots
  moreText.style.display = "none"; // Hide the additional text
  btnText.innerHTML = "Read more"; // Set button text to "Read more"

  // Add click event listener to the button
  btnText.onclick = function() {
      toggleText(dotsId, moreId, btnId);
  };
}

// Function to toggle between showing more or less text
function toggleText(dotsId, moreId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
  }
}
