// toggle navbar phone
const openBar = document.getElementsByClassName("open")[0];
const closeBar = document.getElementsByClassName("close")[0];
const navbar = document.getElementById("nav");

openBar.addEventListener("click", function () {
  this.classList.add("display-none");
  navbar.classList.remove("display-none");
  closeBar.classList.remove("display-none");
});

closeBar.addEventListener("click", function () {
  this.classList.add("display-none");
  openBar.classList.remove("display-none");
  navbar.classList.add("display-none");
});

// about section toggle
const contents = document.getElementsByClassName("about-content");

const aboutItems = document.getElementsByClassName("items-about");
function showContent(id) {
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.add("hidden");
    aboutItems[i].classList.remove("active-item");
  }
  const item = document.getElementById(id);
  item.classList.add("show");
  item.classList.remove("hidden");
  event.currentTarget.classList.add("active-item");
}
