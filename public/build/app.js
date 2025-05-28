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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzZCO0FBQ047QUFDdkI7QUFFMUJBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdFQUFnRSxDQUFDOztBQUc3RTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyw2QkFBNkJBLENBQUFDLElBQUEsRUFBMkM7RUFBQSxJQUF4Q0MsaUJBQWlCLEdBQUFELElBQUEsQ0FBakJDLGlCQUFpQjtJQUFFQyxpQkFBaUIsR0FBQUYsSUFBQSxDQUFqQkUsaUJBQWlCO0VBQzNFLElBQUlELGlCQUFpQixLQUFLLElBQUksRUFBRTtJQUM5QixPQUFPQSxpQkFBaUI7RUFDMUI7RUFFQSxJQUFJQyxpQkFBaUIsQ0FBQ0MsT0FBTyxFQUFFO0lBQzdCLE9BQU8sTUFBTTtFQUNmO0VBRUEsT0FBTyxPQUFPO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLFlBQVlBLENBQUFDLEtBQUEsRUFBdUI7RUFBQSxJQUFwQkMsUUFBUSxHQUFBRCxLQUFBLENBQVJDLFFBQVE7SUFBRUMsTUFBTSxHQUFBRixLQUFBLENBQU5FLE1BQU07RUFDdEMsSUFBTUMsTUFBTSxHQUFHRCxNQUFNLEdBQUcsYUFBYSxHQUFHLFlBQVk7RUFDcERELFFBQVEsQ0FBQ0csWUFBWSxDQUFDLFlBQVksRUFBRUQsTUFBTSxDQUFDO0VBQzNDRixRQUFRLENBQUNJLFNBQVMsR0FBR0YsTUFBTTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTRyxtQkFBbUJBLENBQUFDLEtBQUEsRUFBWTtFQUFBLElBQVRDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQ2xDQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ04sWUFBWSxDQUFDLFlBQVksRUFBRUksS0FBSyxDQUFDO0FBQ2xFOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFNRyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0FBQzVELElBQU1kLGlCQUFpQixHQUFHZ0IsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3ZELElBQU1oQixpQkFBaUIsR0FBR2lCLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDLDhCQUE4QixDQUFDOztBQUUzRTtBQUNBO0FBQ0E7QUFDQSxJQUFJQyxtQkFBbUIsR0FBR3RCLDZCQUE2QixDQUFDO0VBQUVFLGlCQUFpQixFQUFqQkEsaUJBQWlCO0VBQUVDLGlCQUFpQixFQUFqQkE7QUFBa0IsQ0FBQyxDQUFDOztBQUVqRztBQUNBO0FBQ0E7QUFDQUUsWUFBWSxDQUFDO0VBQUVFLFFBQVEsRUFBRVUsTUFBTTtFQUFFVCxNQUFNLEVBQUVjLG1CQUFtQixLQUFLO0FBQU8sQ0FBQyxDQUFDO0FBQzFFVixtQkFBbUIsQ0FBQztFQUFFRSxLQUFLLEVBQUVRO0FBQW9CLENBQUMsQ0FBQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0FMLE1BQU0sQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUMxQyxJQUFNQyxRQUFRLEdBQUdILG1CQUFtQixLQUFLLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtFQUVsRUosWUFBWSxDQUFDUSxPQUFPLENBQUMsT0FBTyxFQUFFRCxRQUFRLENBQUM7RUFDdkNwQixZQUFZLENBQUM7SUFBRUUsUUFBUSxFQUFFVSxNQUFNO0lBQUVULE1BQU0sRUFBRWlCLFFBQVEsS0FBSztFQUFPLENBQUMsQ0FBQztFQUMvRGIsbUJBQW1CLENBQUM7SUFBRUUsS0FBSyxFQUFFVztFQUFTLENBQUMsQ0FBQztFQUV4Q0gsbUJBQW1CLEdBQUdHLFFBQVE7QUFDaEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2hGRjs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XG4vKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cbiAqL1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnXG5cbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XG5cblxuLyoqXG4qIFbDqXJpZmllIHNpIGxlIHRow6htZSBlc3Qgc3RvY2vDqSBkYW5zIGxlIGxvY2FsU3RvcmFnZSBvdSBzJ2lsIGZhdXQgdXRpbGlzZXIgbGVzIHBhcmFtw6h0cmVzIHBhciBkw6lmYXV0XG4qL1xuZnVuY3Rpb24gY2FsY3VsYXRlU2V0dGluZ0FzVGhlbWVTdHJpbmcoeyBsb2NhbFN0b3JhZ2VUaGVtZSwgc3lzdGVtU2V0dGluZ0RhcmsgfSkge1xuICBpZiAobG9jYWxTdG9yYWdlVGhlbWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlVGhlbWU7XG4gIH1cblxuICBpZiAoc3lzdGVtU2V0dGluZ0RhcmsubWF0Y2hlcykge1xuICAgIHJldHVybiBcImRhcmtcIjtcbiAgfVxuXG4gIHJldHVybiBcImxpZ2h0XCI7XG59XG5cbi8qKlxuKiBDaGFuZ2UgbGUgdGV4dGUgZGUgbCdpbnB1dFxuKi9cbmZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbih7IGJ1dHRvbkVsLCBpc0RhcmsgfSkge1xuICBjb25zdCBuZXdDdGEgPSBpc0RhcmsgPyBcIkxpZ2h0IHRoZW1lXCIgOiBcIkRhcmsgdGhlbWVcIjtcbiAgYnV0dG9uRWwuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBuZXdDdGEpO1xuICBidXR0b25FbC5pbm5lclRleHQgPSBuZXdDdGE7XG59XG5cbi8qKlxuKiBEb25uZSBsYSBjbGFzc2UgRGF0YS10aGVtZSDDoCBsJ8OpbMOpbWVudCAoYmFsaXNlKSBIVE1MXG4qL1xuZnVuY3Rpb24gdXBkYXRlVGhlbWVPbkh0bWxFbCh7IHRoZW1lIH0pIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCB0aGVtZSk7XG59XG5cblxuLyoqXG4qIE9uIHBhZ2UgbG9hZDpcbiovXG5cbi8qKlxuKiAxLiBSw6ljdXDDqHJlIGxhIHZhbGV1ciBkdSB0aMOobWUgZGFucyBsZSBsb2NhbFN0b3JhZ2Ugb3UgbGVzIHBhcmFtw6h0cmVzIHN5c3TDqG1lXG4qL1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRoZW1lLXRvZ2dsZV1cIik7XG5jb25zdCBsb2NhbFN0b3JhZ2VUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG5jb25zdCBzeXN0ZW1TZXR0aW5nRGFyayA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKTtcblxuLyoqXG4qIDIuIE1ldCBsZSBzaXRlIGRhbnMgbGUgdGjDqG1lIGNvcnJlc3BvbmRhbnRcbiovXG5sZXQgY3VycmVudFRoZW1lU2V0dGluZyA9IGNhbGN1bGF0ZVNldHRpbmdBc1RoZW1lU3RyaW5nKHsgbG9jYWxTdG9yYWdlVGhlbWUsIHN5c3RlbVNldHRpbmdEYXJrIH0pO1xuXG4vKipcbiogMy4gTWV0IMOgIGpvdXIgbGUgdGV4dGUgZHUgYm91dG9uIGV0IGwnYXR0cmlidXQgZGF0YS10aGVtZSBkZSBsJ8OpbMOpbWVudCBIVE1MIHNpIGxlIHRow6htZSBlc3QgXCJzb21icmVcIlxuKi9cbnVwZGF0ZUJ1dHRvbih7IGJ1dHRvbkVsOiBidXR0b24sIGlzRGFyazogY3VycmVudFRoZW1lU2V0dGluZyA9PT0gXCJkYXJrXCIgfSk7XG51cGRhdGVUaGVtZU9uSHRtbEVsKHsgdGhlbWU6IGN1cnJlbnRUaGVtZVNldHRpbmcgfSk7XG5cbi8qKlxuKiA0LiBBam91dCBkZSBsJ8OpdsOpbmVtZW50IHBvdXIgY2hhbmdlciBsZSB0aMOobWUgYXUgY2xpYyBzdXIgbGUgYm91dG9uXG4qL1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgbmV3VGhlbWUgPSBjdXJyZW50VGhlbWVTZXR0aW5nID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3VGhlbWUpO1xuICB1cGRhdGVCdXR0b24oeyBidXR0b25FbDogYnV0dG9uLCBpc0Rhcms6IG5ld1RoZW1lID09PSBcImRhcmtcIiB9KTtcbiAgdXBkYXRlVGhlbWVPbkh0bWxFbCh7IHRoZW1lOiBuZXdUaGVtZSB9KTtcblxuICBjdXJyZW50VGhlbWVTZXR0aW5nID0gbmV3VGhlbWU7XG59KTsgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJjYWxjdWxhdGVTZXR0aW5nQXNUaGVtZVN0cmluZyIsIl9yZWYiLCJsb2NhbFN0b3JhZ2VUaGVtZSIsInN5c3RlbVNldHRpbmdEYXJrIiwibWF0Y2hlcyIsInVwZGF0ZUJ1dHRvbiIsIl9yZWYyIiwiYnV0dG9uRWwiLCJpc0RhcmsiLCJuZXdDdGEiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJ1cGRhdGVUaGVtZU9uSHRtbEVsIiwiX3JlZjMiLCJ0aGVtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiY3VycmVudFRoZW1lU2V0dGluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm5ld1RoZW1lIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=