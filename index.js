const btn = document.querySelector("label > input");
const mainBody = document.querySelector("body");
const title = document.querySelector("h1");

btn.addEventListener("click", () => {
  mainBody.classList.toggle("darkMode");
  title.classList.toggle("home-title");
});
