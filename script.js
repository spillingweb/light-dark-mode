const toggleSwitch = document.querySelector('input[type="checkbox"]');
// const nav = document.getElementById("nav");
const menuIcon = document.querySelector(".menu-icon");
const menuContent = document.querySelector(".menu-content");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

// Hamburger menu
function toggleTheMenu() {
  menuIcon.classList.toggle("close-x");
  menuContent.classList.toggle("is-visible");
}

// Dark or Light images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(theme) {
  menuContent.style.backgroundColor =
    theme == DARK_THEME ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor =
    theme == DARK_THEME ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent =
    theme == DARK_THEME ? "Dark Mode" : "Light Mode";
  theme == DARK_THEME
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  theme == DARK_THEME ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Switch Themes Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", DARK_THEME);
    localStorage.setItem("theme", DARK_THEME);
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute("data-theme", LIGHT_THEME);
    localStorage.setItem("theme", LIGHT_THEME);
    toggleDarkLightMode(LIGHT_THEME);
  }
}

// Event Listeners
toggleSwitch.addEventListener("change", switchTheme);
menuIcon.addEventListener("click", toggleTheMenu);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme == DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
