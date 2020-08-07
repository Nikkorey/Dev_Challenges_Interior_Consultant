const burgerBtn = document.querySelector(".nav__burger");
const navList = document.querySelector(".nav__list");
burgerBtn.addEventListener("click", () => {
  navList.style.display = "block";
});
