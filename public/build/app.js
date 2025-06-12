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
  var buttonLD = _ref2.buttonLD,
    isDark = _ref2.isDark;
  var newCta = isDark ? "Light theme" : "Dark theme";
  buttonLD.setAttribute("aria-label", newCta);
  buttonLD.innerText = newCta;
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
  buttonLD: button,
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
    buttonLD: button,
    isDark: newTheme === "dark"
  });
  updateThemeOnHtmlEl({
    theme: newTheme
  });
  currentThemeSetting = newTheme;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzZCO0FBQ047QUFDdEI7QUFFM0JBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDOztBQUc3RTtBQUNBO0FBQ0E7QUFDRSxTQUFTQyw2QkFBNkJBLENBQUFDLElBQUEsRUFBMkM7RUFBQSxJQUF4Q0MsaUJBQWlCLEdBQUFELElBQUEsQ0FBakJDLGlCQUFpQjtJQUFFQyxpQkFBaUIsR0FBQUYsSUFBQSxDQUFqQkUsaUJBQWlCO0VBQzNFLElBQUlELGlCQUFpQixLQUFLLElBQUksRUFBRTtJQUM5QixPQUFPQSxpQkFBaUI7RUFDMUI7RUFFQSxJQUFJQyxpQkFBaUIsQ0FBQ0MsT0FBTyxFQUFFO0lBQzdCLE9BQU8sTUFBTTtFQUNmO0VBRUEsT0FBTyxPQUFPO0FBQ2hCOztBQUVBO0FBQ0Y7QUFDQTtBQUNFLFNBQVNDLFlBQVlBLENBQUFDLEtBQUEsRUFBdUI7RUFBQSxJQUFwQkMsUUFBUSxHQUFBRCxLQUFBLENBQVJDLFFBQVE7SUFBRUMsTUFBTSxHQUFBRixLQUFBLENBQU5FLE1BQU07RUFDdEMsSUFBTUMsTUFBTSxHQUFHRCxNQUFNLEdBQUcsYUFBYSxHQUFHLFlBQVk7RUFDcERELFFBQVEsQ0FBQ0csWUFBWSxDQUFDLFlBQVksRUFBRUQsTUFBTSxDQUFDO0VBQzNDRixRQUFRLENBQUNJLFNBQVMsR0FBR0YsTUFBTTtBQUM3Qjs7QUFFQTtBQUNGO0FBQ0E7QUFDRSxTQUFTRyxtQkFBbUJBLENBQUFDLEtBQUEsRUFBWTtFQUFBLElBQVRDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQ2xDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ04sWUFBWSxDQUFDLFlBQVksRUFBRUksS0FBSyxDQUFDO0FBQ2xFOztBQUdBO0FBQ0Y7QUFDQTs7QUFFRTtBQUNGO0FBQ0E7QUFDRSxJQUFNRyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQzVELElBQU1kLGlCQUFpQixHQUFHZ0IsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3ZELElBQU1oQixpQkFBaUIsR0FBR2lCLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLDhCQUE4QixDQUFDOztBQUUzRTtBQUNGO0FBQ0E7QUFDRSxJQUFJQyxtQkFBbUIsR0FBR3RCLDZCQUE2QixDQUFDO0VBQUVFLGlCQUFpQixFQUFqQkEsaUJBQWlCO0VBQUVDLGlCQUFpQixFQUFqQkE7QUFBa0IsQ0FBQyxDQUFDOztBQUVqRztBQUNGO0FBQ0E7QUFDRUUsWUFBWSxDQUFDO0VBQUVFLFFBQVEsRUFBRVUsTUFBTTtFQUFFVCxNQUFNLEVBQUVjLG1CQUFtQixLQUFLO0FBQU8sQ0FBQyxDQUFDO0FBQzFFVixtQkFBbUIsQ0FBQztFQUFFRSxLQUFLLEVBQUVRO0FBQW9CLENBQUMsQ0FBQzs7QUFFbkQ7QUFDRjtBQUNBO0FBQ0VMLE1BQU0sQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUMxQyxJQUFNQyxRQUFRLEdBQUdILG1CQUFtQixLQUFLLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtFQUVsRUosWUFBWSxDQUFDUSxPQUFPLENBQUMsT0FBTyxFQUFFRCxRQUFRLENBQUM7RUFDdkNwQixZQUFZLENBQUM7SUFBRUUsUUFBUSxFQUFFVSxNQUFNO0lBQUVULE1BQU0sRUFBRWlCLFFBQVEsS0FBSztFQUFPLENBQUMsQ0FBQztFQUMvRGIsbUJBQW1CLENBQUM7SUFBRUUsS0FBSyxFQUFFVztFQUFTLENBQUMsQ0FBQztFQUV4Q0gsbUJBQW1CLEdBQUdHLFFBQVE7QUFDaEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2hGSjs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuXG5cbi8qKlxuKiBWw6lyaWZpZSBzaSBsZSB0aMOobWUgZXN0IHN0b2Nrw6kgZGFucyBsZSBsb2NhbFN0b3JhZ2Ugb3UgcydpbCBmYXV0IHV0aWxpc2VyIGxlcyBwYXJhbcOodHJlcyBwYXIgZMOpZmF1dFxuKi9cbiAgZnVuY3Rpb24gY2FsY3VsYXRlU2V0dGluZ0FzVGhlbWVTdHJpbmcoeyBsb2NhbFN0b3JhZ2VUaGVtZSwgc3lzdGVtU2V0dGluZ0RhcmsgfSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VUaGVtZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVRoZW1lO1xuICAgIH1cblxuICAgIGlmIChzeXN0ZW1TZXR0aW5nRGFyay5tYXRjaGVzKSB7XG4gICAgICByZXR1cm4gXCJkYXJrXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwibGlnaHRcIjtcbiAgfVxuXG4gIC8qKlxuICAqIENoYW5nZSBsZSB0ZXh0ZSBkZSBsJ2lucHV0XG4gICovXG4gIGZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbih7IGJ1dHRvbkxELCBpc0RhcmsgfSkge1xuICAgIGNvbnN0IG5ld0N0YSA9IGlzRGFyayA/IFwiTGlnaHQgdGhlbWVcIiA6IFwiRGFyayB0aGVtZVwiO1xuICAgIGJ1dHRvbkxELnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgbmV3Q3RhKTtcbiAgICBidXR0b25MRC5pbm5lclRleHQgPSBuZXdDdGE7XG4gIH1cblxuICAvKipcbiAgKiBEb25uZSBsYSBjbGFzc2UgRGF0YS10aGVtZSDDoCBsJ8OpbMOpbWVudCAoYmFsaXNlKSBIVE1MXG4gICovXG4gIGZ1bmN0aW9uIHVwZGF0ZVRoZW1lT25IdG1sRWwoeyB0aGVtZSB9KSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCB0aGVtZSk7XG4gIH1cblxuXG4gIC8qKlxuICAqIE9uIHBhZ2UgbG9hZDpcbiAgKi9cblxuICAvKipcbiAgKiAxLiBSw6ljdXDDqHJlIGxhIHZhbGV1ciBkdSB0aMOobWUgZGFucyBsZSBsb2NhbFN0b3JhZ2Ugb3UgbGVzIHBhcmFtw6h0cmVzIHN5c3TDqG1lXG4gICovXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10aGVtZS10b2dnbGVdXCIpO1xuICBjb25zdCBsb2NhbFN0b3JhZ2VUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG4gIGNvbnN0IHN5c3RlbVNldHRpbmdEYXJrID0gd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xuXG4gIC8qKlxuICAqIDIuIE1ldCBsZSBzaXRlIGRhbnMgbGUgdGjDqG1lIGNvcnJlc3BvbmRhbnRcbiAgKi9cbiAgbGV0IGN1cnJlbnRUaGVtZVNldHRpbmcgPSBjYWxjdWxhdGVTZXR0aW5nQXNUaGVtZVN0cmluZyh7IGxvY2FsU3RvcmFnZVRoZW1lLCBzeXN0ZW1TZXR0aW5nRGFyayB9KTtcblxuICAvKipcbiAgKiAzLiBNZXQgw6Agam91ciBsZSB0ZXh0ZSBkdSBib3V0b24gZXQgbCdhdHRyaWJ1dCBkYXRhLXRoZW1lIGRlIGwnw6lsw6ltZW50IEhUTUwgc2kgbGUgdGjDqG1lIGVzdCBcInNvbWJyZVwiXG4gICovXG4gIHVwZGF0ZUJ1dHRvbih7IGJ1dHRvbkxEOiBidXR0b24sIGlzRGFyazogY3VycmVudFRoZW1lU2V0dGluZyA9PT0gXCJkYXJrXCIgfSk7XG4gIHVwZGF0ZVRoZW1lT25IdG1sRWwoeyB0aGVtZTogY3VycmVudFRoZW1lU2V0dGluZyB9KTtcblxuICAvKipcbiAgKiA0LiBBam91dCBkZSBsJ8OpdsOpbmVtZW50IHBvdXIgY2hhbmdlciBsZSB0aMOobWUgYXUgY2xpYyBzdXIgbGUgYm91dG9uXG4gICovXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmV3VGhlbWUgPSBjdXJyZW50VGhlbWVTZXR0aW5nID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBuZXdUaGVtZSk7XG4gICAgdXBkYXRlQnV0dG9uKHsgYnV0dG9uTEQ6IGJ1dHRvbiwgaXNEYXJrOiBuZXdUaGVtZSA9PT0gXCJkYXJrXCIgfSk7XG4gICAgdXBkYXRlVGhlbWVPbkh0bWxFbCh7IHRoZW1lOiBuZXdUaGVtZSB9KTtcblxuICAgIGN1cnJlbnRUaGVtZVNldHRpbmcgPSBuZXdUaGVtZTtcbiAgfSk7IFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJjYWxjdWxhdGVTZXR0aW5nQXNUaGVtZVN0cmluZyIsIl9yZWYiLCJsb2NhbFN0b3JhZ2VUaGVtZSIsInN5c3RlbVNldHRpbmdEYXJrIiwibWF0Y2hlcyIsInVwZGF0ZUJ1dHRvbiIsIl9yZWYyIiwiYnV0dG9uTEQiLCJpc0RhcmsiLCJuZXdDdGEiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJ1cGRhdGVUaGVtZU9uSHRtbEVsIiwiX3JlZjMiLCJ0aGVtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiY3VycmVudFRoZW1lU2V0dGluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm5ld1RoZW1lIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=