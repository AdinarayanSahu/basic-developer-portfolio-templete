var dribbleBtn = document.querySelector(".footer-dribble-btn");
var twitterBtn = document.querySelector(".footer-twitter-btn");
var linkedinBtn = document.querySelector(".footer-linkedin-btn");
var githubBtn = document.querySelector(".footer-github-btn");
var emailBtn = document.querySelector(".footer-email-btn");
var logo = document.getElementById("logo");

dribbleBtn.addEventListener("click", () => {
  window.open("https://dribbble.com/adinarayansahu");
});

twitterBtn.addEventListener("click", () => {
  window.open("https://twitter.com/adinarayansahu7");
});

linkedinBtn.addEventListener("click", () => {
  window.open("https://linkedin.com/in/adinarayansahu");
});

githubBtn.addEventListener("click", () => {
  window.open("https://github.com/adinarayansahu");
});

emailBtn.addEventListener("click", () => {
  window.open("mailto:contact@adinarayan.in");
});

logo.addEventListener("click", () => {
    window.open("http://127.0.0.1:3000/index.html", "_self");
})
