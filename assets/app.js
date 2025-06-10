// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './styles/app.scss';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');


/**
* Vérifie si le thème est stocké dans le localStorage ou s'il faut utiliser les paramètres par défaut
*/
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
* Change le texte de l'input
*/
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Light theme" : "Dark theme";
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

/**
* Donne la classe Data-theme à l'élément (balise) HTML
*/
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}


/**
* On page load:
*/

/**
* 1. Récupère la valeur du thème dans le localStorage ou les paramètres système
*/
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
* 2. Met le site dans le thème correspondant
*/
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

/**
* 3. Met à jour le texte du bouton et l'attribut data-theme de l'élément HTML si le thème est "sombre"
*/
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
* 4. Ajout de l'événement pour changer le thème au clic sur le bouton
*/
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
}); 


// MODAL

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("plus");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// AJAX

// document.addEventListener('DOMContentLoaded', function() {
//   const filterBtn = document.querySelector('.filter-btn');
//   const resultContainer = document.querySelector('.result-container');

//   filterBtn.addEventListener('click', function() {
//     fetch('filter-page?filterGetValue=${filterBtn}', {
//       method: 'GET',
//       headers: {'X-Requested-With': 'HMLHttpRequest'}
//     })
//     .then(response => response.json())
//     .then(data => {
//       resultContainer.innerHTML = data.html;
//     })
//     .catch(error => console.error('Error:', error));
//   });
// });