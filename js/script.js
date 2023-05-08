const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navMenu = document.querySelector(".modal");
const navHero = document.querySelector(".nav-hero");

hamburger.addEventListener("click", function () {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("flex");
  navHero.classList.add("blureffect");
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", function () {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
  navHero.classList.remove("blureffect");
  document.body.classList.remove("no-scroll");
});

navMenu.addEventListener("click", function () {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
  navHero.classList.remove("blureffect");
  document.body.classList.remove("no-scroll");
});
