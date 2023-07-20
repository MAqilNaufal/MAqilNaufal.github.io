// Add event listener to the dark mode toggle switch
document
  .getElementById("dark-mode-toggle")
  .addEventListener("change", function () {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle("dark-mode");
  });

// Load Feather icons
feather.replace();

// JavaScript to dynamically adjust the navbar position based on screen size
window.addEventListener("resize", function () {
  var navbar = document.getElementById("navbar");
  var isMobile = window.innerWidth <= 767;

  if (isMobile) {
    navbar.style.position = "fixed";
    navbar.style.bottom = "0";
    navbar.style.top = "auto";
  } else {
    navbar.style.position = "fixed";
    navbar.style.bottom = "auto";
    navbar.style.top = "0";
  }
});

// Initial adjustment on page load
window.addEventListener("load", function () {
  var navbar = document.getElementById("navbar");
  var isMobile = window.innerWidth <= 767;

  if (isMobile) {
    navbar.style.position = "fixed";
    navbar.style.bottom = "0";
    navbar.style.top = "auto";
  }
});

window.addEventListener("scroll", function () {
  var contactSection = document.getElementById("contact");
  var contactOffsetTop = contactSection.offsetTop;
  var contactHeight = contactSection.offsetHeight;
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;

  if (
    scrollPosition >= contactOffsetTop - windowHeight &&
    scrollPosition <= contactOffsetTop + contactHeight
  ) {
    contactSection.classList.add("show-image");
  } else {
    contactSection.classList.remove("show-image");
  }
});

// JavaScript to add smooth scrolling behavior
$(document).ready(function () {
  // Smooth scrolling for navbar links
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
