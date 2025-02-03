// const preloader = document.querySelector("[data-preloader]");

// window.addEventListener("load", () => {
//   preloader.classList.add("remove");
// });

// const addEventOnElements = function (elements, eventType, callback) {
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener(eventType, callback);
//   }
// };

// const navbar = document.querySelector("[data-navbar]");
// const navTogglers = document.querySelectorAll("[data-nav-toggler]");
// const overlay = document.querySelector("[data-overlay]");

// const toggleNav = function () {
//   navbar.classList.toggle("active");
//   overlay.classList.toggle("active");
//   document.body.classList.toggle("nav-active");
// };

// addEventOnElements(navTogglers, "click", toggleNav);

// const header = document.querySelector("[data-header]");

// window.addEventListener("scroll", function () {
//   header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
// });

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".login-btn");
  const signUpBtn = document.querySelector(".btn.btn-primary");

  const loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
    loginBtn.textContent = "Logout";
    loginBtn.href = "#";

    loginBtn.classList.remove("login-btn");
    loginBtn.classList.add("btn", "btn-primary");

    if (signUpBtn) {
      signUpBtn.style.display = "none";
    }

    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("loggedInUser");
      window.location.reload();
    });
  } else {
    loginBtn.addEventListener("click", function (e) {
      window.location.href = "login.html";
    });
  }

  const getStartedBtn = document.getElementById("getStartedBtn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function (e) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (!loggedInUser) {
        e.preventDefault();
        alert("You cannot access the application without being logged in!");
      }
    });
  }
});

window.addEventListener("load", () => {
  const preloader = document.querySelector("[data-preloader]");
  setTimeout(() => {
    preloader.classList.add("remove");
  }, 1000);
});

const addEventOnElements = function (elements, eventType, callback) {
  for (const item of elements) {
    item.addEventListener(eventType, callback);
  }
};

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll("[data-navbar] a");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navToggler, "click", toggleNav);
addEventOnElements(navLinks, "click", toggleNav);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.scrollY >= 120 ? "add" : "remove"]("active");
});

let sections = document.querySelectorAll("section");

document.addEventListener("scroll", function () {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 180;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
});
