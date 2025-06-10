"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
// import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */




console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/**
* Vérifie si le thème est stocké dans le localStorage ou s'il faut utiliser les paramètres par défaut
*/
function calculateSettingAsThemeString(_ref) {
  var localStorageTheme = _ref.localStorageTheme,
    systemSettingDark = _ref.systemSettingDark;
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
function updateButton(_ref2) {
  var buttonEl = _ref2.buttonEl,
    isDark = _ref2.isDark;
  var newCta = isDark ? "Light theme" : "Dark theme";
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

/**
* Donne la classe Data-theme à l'élément (balise) HTML
*/
function updateThemeOnHtmlEl(_ref3) {
  var theme = _ref3.theme;
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
* On page load:
*/

/**
* 1. Récupère la valeur du thème dans le localStorage ou les paramètres système
*/
var button = document.querySelector("[data-theme-toggle]");
var localStorageTheme = localStorage.getItem("theme");
var systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
* 2. Met le site dans le thème correspondant
*/
var currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme: localStorageTheme,
  systemSettingDark: systemSettingDark
});

/**
* 3. Met à jour le texte du bouton et l'attribut data-theme de l'élément HTML si le thème est "sombre"
*/
updateButton({
  buttonEl: button,
  isDark: currentThemeSetting === "dark"
});
updateThemeOnHtmlEl({
  theme: currentThemeSetting
});

/**
* 4. Ajout de l'événement pour changer le thème au clic sur le bouton
*/
button.addEventListener("click", function (event) {
  var newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  updateButton({
    buttonEl: button,
    isDark: newTheme === "dark"
  });
  updateThemeOnHtmlEl({
    theme: newTheme
  });
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
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-8e93d7"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7O0FBRXpDO0FBQ0EsSUFBSUUsSUFBSSxHQUFHZixRQUFRLENBQUNnQixzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXREO0FBQ0FGLEdBQUcsQ0FBQ0csT0FBTyxHQUFHLFlBQVc7RUFDdkJMLEtBQUssQ0FBQ00sS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztBQUMvQixDQUFDOztBQUVEO0FBQ0FKLElBQUksQ0FBQ0UsT0FBTyxHQUFHLFlBQVc7RUFDeEJMLEtBQUssQ0FBQ00sS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtBQUM5QixDQUFDOztBQUVEO0FBQ0FkLE1BQU0sQ0FBQ1ksT0FBTyxHQUFHLFVBQVNSLEtBQUssRUFBRTtFQUMvQixJQUFJQSxLQUFLLENBQUNXLE1BQU0sSUFBSVIsS0FBSyxFQUFFO0lBQ3pCQSxLQUFLLENBQUNNLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDOUI7QUFDRixDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaElBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuXG5cbi8qKlxuKiBWw6lyaWZpZSBzaSBsZSB0aMOobWUgZXN0IHN0b2Nrw6kgZGFucyBsZSBsb2NhbFN0b3JhZ2Ugb3UgcydpbCBmYXV0IHV0aWxpc2VyIGxlcyBwYXJhbcOodHJlcyBwYXIgZMOpZmF1dFxuKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZVNldHRpbmdBc1RoZW1lU3RyaW5nKHsgbG9jYWxTdG9yYWdlVGhlbWUsIHN5c3RlbVNldHRpbmdEYXJrIH0pIHtcbiAgaWYgKGxvY2FsU3RvcmFnZVRoZW1lICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVRoZW1lO1xuICB9XG5cbiAgaWYgKHN5c3RlbVNldHRpbmdEYXJrLm1hdGNoZXMpIHtcbiAgICByZXR1cm4gXCJkYXJrXCI7XG4gIH1cblxuICByZXR1cm4gXCJsaWdodFwiO1xufVxuXG4vKipcbiogQ2hhbmdlIGxlIHRleHRlIGRlIGwnaW5wdXRcbiovXG5mdW5jdGlvbiB1cGRhdGVCdXR0b24oeyBidXR0b25FbCwgaXNEYXJrIH0pIHtcbiAgY29uc3QgbmV3Q3RhID0gaXNEYXJrID8gXCJMaWdodCB0aGVtZVwiIDogXCJEYXJrIHRoZW1lXCI7XG4gIGJ1dHRvbkVsLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgbmV3Q3RhKTtcbiAgYnV0dG9uRWwuaW5uZXJUZXh0ID0gbmV3Q3RhO1xufVxuXG4vKipcbiogRG9ubmUgbGEgY2xhc3NlIERhdGEtdGhlbWUgw6AgbCfDqWzDqW1lbnQgKGJhbGlzZSkgSFRNTFxuKi9cbmZ1bmN0aW9uIHVwZGF0ZVRoZW1lT25IdG1sRWwoeyB0aGVtZSB9KSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgdGhlbWUpO1xufVxuXG5cbi8qKlxuKiBPbiBwYWdlIGxvYWQ6XG4qL1xuXG4vKipcbiogMS4gUsOpY3Vww6hyZSBsYSB2YWxldXIgZHUgdGjDqG1lIGRhbnMgbGUgbG9jYWxTdG9yYWdlIG91IGxlcyBwYXJhbcOodHJlcyBzeXN0w6htZVxuKi9cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aGVtZS10b2dnbGVdXCIpO1xuY29uc3QgbG9jYWxTdG9yYWdlVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpO1xuY29uc3Qgc3lzdGVtU2V0dGluZ0RhcmsgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIik7XG5cbi8qKlxuKiAyLiBNZXQgbGUgc2l0ZSBkYW5zIGxlIHRow6htZSBjb3JyZXNwb25kYW50XG4qL1xubGV0IGN1cnJlbnRUaGVtZVNldHRpbmcgPSBjYWxjdWxhdGVTZXR0aW5nQXNUaGVtZVN0cmluZyh7IGxvY2FsU3RvcmFnZVRoZW1lLCBzeXN0ZW1TZXR0aW5nRGFyayB9KTtcblxuLyoqXG4qIDMuIE1ldCDDoCBqb3VyIGxlIHRleHRlIGR1IGJvdXRvbiBldCBsJ2F0dHJpYnV0IGRhdGEtdGhlbWUgZGUgbCfDqWzDqW1lbnQgSFRNTCBzaSBsZSB0aMOobWUgZXN0IFwic29tYnJlXCJcbiovXG51cGRhdGVCdXR0b24oeyBidXR0b25FbDogYnV0dG9uLCBpc0Rhcms6IGN1cnJlbnRUaGVtZVNldHRpbmcgPT09IFwiZGFya1wiIH0pO1xudXBkYXRlVGhlbWVPbkh0bWxFbCh7IHRoZW1lOiBjdXJyZW50VGhlbWVTZXR0aW5nIH0pO1xuXG4vKipcbiogNC4gQWpvdXQgZGUgbCfDqXbDqW5lbWVudCBwb3VyIGNoYW5nZXIgbGUgdGjDqG1lIGF1IGNsaWMgc3VyIGxlIGJvdXRvblxuKi9cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IG5ld1RoZW1lID0gY3VycmVudFRoZW1lU2V0dGluZyA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIjtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld1RoZW1lKTtcbiAgdXBkYXRlQnV0dG9uKHsgYnV0dG9uRWw6IGJ1dHRvbiwgaXNEYXJrOiBuZXdUaGVtZSA9PT0gXCJkYXJrXCIgfSk7XG4gIHVwZGF0ZVRoZW1lT25IdG1sRWwoeyB0aGVtZTogbmV3VGhlbWUgfSk7XG5cbiAgY3VycmVudFRoZW1lU2V0dGluZyA9IG5ld1RoZW1lO1xufSk7IFxuXG5cbi8vIE1PREFMXG5cbi8vIEdldCB0aGUgbW9kYWxcbnZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5cbi8vIEdldCB0aGUgYnV0dG9uIHRoYXQgb3BlbnMgdGhlIG1vZGFsXG52YXIgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzXCIpO1xuXG4vLyBHZXQgdGhlIDxzcGFuPiBlbGVtZW50IHRoYXQgY2xvc2VzIHRoZSBtb2RhbFxudmFyIHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG5cbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBidXR0b24sIG9wZW4gdGhlIG1vZGFsXG5idG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcbnNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbi8vIEFKQVhcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuLy8gICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWJ0bicpO1xuLy8gICBjb25zdCByZXN1bHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0LWNvbnRhaW5lcicpO1xuXG4vLyAgIGZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuLy8gICAgIGZldGNoKCdmaWx0ZXItcGFnZT9maWx0ZXJHZXRWYWx1ZT0ke2ZpbHRlckJ0bn0nLCB7XG4vLyAgICAgICBtZXRob2Q6ICdHRVQnLFxuLy8gICAgICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ0hNTEh0dHBSZXF1ZXN0J31cbi8vICAgICB9KVxuLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgICAudGhlbihkYXRhID0+IHtcbi8vICAgICAgIHJlc3VsdENvbnRhaW5lci5pbm5lckhUTUwgPSBkYXRhLmh0bWw7XG4vLyAgICAgfSlcbi8vICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpKTtcbi8vICAgfSk7XG4vLyB9KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImNhbGN1bGF0ZVNldHRpbmdBc1RoZW1lU3RyaW5nIiwiX3JlZiIsImxvY2FsU3RvcmFnZVRoZW1lIiwic3lzdGVtU2V0dGluZ0RhcmsiLCJtYXRjaGVzIiwidXBkYXRlQnV0dG9uIiwiX3JlZjIiLCJidXR0b25FbCIsImlzRGFyayIsIm5ld0N0YSIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsInVwZGF0ZVRoZW1lT25IdG1sRWwiLCJfcmVmMyIsInRoZW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJjdXJyZW50VGhlbWVTZXR0aW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibmV3VGhlbWUiLCJzZXRJdGVtIiwibW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImJ0biIsInNwYW4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib25jbGljayIsInN0eWxlIiwiZGlzcGxheSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=